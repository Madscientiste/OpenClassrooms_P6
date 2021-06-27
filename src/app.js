import Loader from "./components/loader"
import Hero from "./components/hero"
import Carousel from "./components/Carousel"

export default async function app(props) {
    let state = props.state

    if (state.isLoading) return <Loader isLoading={state.isLoading} />

    return (
        <div className="container" >
            <Hero movie={state.movies.shift()} />
            <Carousel header="Top Rated Movies" elements={state.movies} />

            {/* The other categories */}
            {state.categories.map(cat => {
                return <Carousel header={cat.title} elements={cat.items} />
            })}
        </div>
    )
}
