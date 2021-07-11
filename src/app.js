import BaseComponent from "./components/Base"

// Components
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Modal from "./components/Modal"
import Loader from "./components/Loader"

export default class App extends BaseComponent {
    render() {
        let { movies, categories, modal, isLoading } = this.props.state

        if (isLoading) return <Loader />

        // while i know it break the purpose of a "modal" but it avoid me a headache
        if (modal) return <Modal setState={this.props.setState} {...modal} />

        return (
            <>
                <Navbar />

                <div className="container is-large px-2">
                    <h2>Top Movie</h2>
                </div>

                <Hero setState={this.props.setState} movie={movies[0]} />

                <div className="container is-large">
                    <section>
                        <Carousel title="Best Rated Movies" items={movies.slice(1)} />

                        {categories.map(cat => {
                            return <Carousel title={cat.title} items={cat.items} />
                        })}
                    </section>
                </div>
            </>
        )
    }
}
