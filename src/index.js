import "./styles/main.scss";
import './core/JSXParser'

import State from "./core/State"
import App from "./app";

import Movie from "./model/Movie";

const root = document.getElementById('root')
const state = new State({ movies: [], categories: [], modal: null, isLoading: true }, (props) => {
    root.replaceChildren(<App {...props} />)
})

window.state = state

const app = new App({ state: state.state, setState: state.setState })
app.mount(root)

window.onload = async (e) => {
    let bestMovies = await Movie.filterBy({ sort_by: "-imdb_score" })

    let categories = await Promise.all(
        ["Animation", "Adventure", "History"].map(async categorie => {
            let filter = { genre_contains: categorie, sort_by: "-imdb_score" }
            let items = await Movie.filterBy(filter)

            return { title: categorie, items }
        }))

    state.setState({ movies: bestMovies, isLoading: false, categories })
}

if (module.hot) module.hot.accept()