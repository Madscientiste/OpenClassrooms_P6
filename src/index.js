import "./styles/main.scss";
import "./utilities/jsx"

import App from "./app";
import StateManager from "./core/StateManager";
import Movie from "./utilities/Movie";

const initialState = {
    isLoading: true,
    categories: [],
    movies: []
}

const updater = new StateManager(initialState, (newState) => {
    props.state = newState
    render(props)
})

const props = {
    state: updater.state,
    setState: updater.setState
}

function render(props) {
    App(props).then((content) => {
        window.document.getElementById('root').replaceChildren(content)
    })
}

window.onload = async (e) => {
    let bestMovies = await Movie.filterBy("sort_by", "-imdb_score")

    let categories = await Promise.all(
        ["Action", "Adventure", "History"].map(async categorie => {
            let items = await Movie.filterBy("genre", categorie)
            return { title: categorie, items }
        }))

    props.setState({ movies: bestMovies, isLoading: false, categories })
}

render(props)

if (module.hot) module.hot.accept();


