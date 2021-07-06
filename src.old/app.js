import Loader from "./components/Loader"
import Hero from "./components/Hero"
import Carousel from "./components/Carousel"
import Modal from "./components/Modal"

export default async function app(props) {
    let state = props.state

    if (state.isLoading) return <Loader isLoading={state.isLoading} />

    return (
        <>
            {/* <Modal movie={props.state.modal} /> */}
            <div className="container" >
                <Hero movie={state.movies.shift()} />
                <Carousel header="Top Rated Movies" elements={state.movies} />

                {/* The other categories */}
                {state.categories.map(cat => {
                    return <Carousel header={cat.title} elements={cat.items} />
                })}
            </div>
        </>
    )
}
