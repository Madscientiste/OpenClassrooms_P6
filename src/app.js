import BaseComponent from "./components/Base"

// Components
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"

export default class App extends BaseComponent {

    render() {
        let items = [
            {
                title: "Kobayashi-san Chi no Maid Dragon",
                image_url: "https://cdn.myanimelist.net/images/anime/1252/115539.jpg",
                rating: "7.99"
            },
            {
                title: "Kobayashi-san Chi no Maid Dragon S",
                image_url: "https://cdn.myanimelist.net/images/anime/5/85434.jpg",
                rating: "8.51"
            },
            {
                title: "Tantei wa Mou, Shindeiru.",
                image_url: "https://cdn.myanimelist.net/images/anime/1843/115815.jpg",
                rating: "7.77"
            },
            {
                title: "Kanojo mo Kanojo",
                image_url: "https://cdn.myanimelist.net/images/anime/1013/113747.jpg",
                rating: "6.92"
            },
            {
                title: "Tensei shitara Slime Datta Ken 2nd Season",
                image_url: "https://cdn.myanimelist.net/images/anime/1271/109841.jpg",
                rating: "8.40"
            },
            {
                title: "Bokutachi no Remake",
                image_url: "https://cdn.myanimelist.net/images/anime/1737/112772.jpg",
                rating: "7.94"
            },
            {
                title: "Mahouka Koukou no Yuutousei",
                image_url: "https://cdn.myanimelist.net/images/anime/1719/116262.jpg",
                rating: "7.17"
            },
            {
                title: "Mahouka Koukou no Rettousei: Raihousha-hen",
                image_url: "https://cdn.myanimelist.net/images/anime/1443/113820.jpg",
                rating: "7.28"
            },

        ]

        return (
            <>
                <Navbar />

                <h2>Top Movie</h2>
                <Hero />

                <div className="container is-large">
                    <section>
                        <Carousel items={items} />
                        <Carousel items={items} />
                        <Carousel items={items} />
                    </section>
                </div>
            </>
        )
    }
}
