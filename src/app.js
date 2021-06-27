import Loader from "./components/loader"
import Hero from "./components/hero"
import Carousel from "./components/Carousel"

// utilities
import Movie from "./utilities/Movie"

// export default function app() {
//     // let state = props.state

//     // Movie.filterBy("-imdb_score").then(data => {
//     //     // props.setState({ movies: data, isLoading: false })
//     // })

//     // if (state.isLoading) return <Loader isLoading={state.isLoading} />

//     return (
//         <div className="container" >

//             {/* <Hero movie={state.movies.shift()} />
//             <Carousel header="Top Rated Movies" elements={state.movies} /> */}

//             UwU
//         </div>
//     )
// }

export default class App {
    render() {
        return (
            <div>
                <Loader isLoading={true} />

            </div>
        )
    }
}


App.prototype.isClassComponent = {}

