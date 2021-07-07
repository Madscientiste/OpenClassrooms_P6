import BaseComponent from "./components/Base"

// Components
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"

export default class App extends BaseComponent {
    didMount() {

    }
    
    render() {
        return (
            <>
                <Navbar />
                <Hero />

                <section>
                    <Carousel items={[]} />
                </section>
            </>
        )
    }
}
