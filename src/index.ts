import axios from "axios"

import "./scss/main.scss";
import Element from "./utilities/Element"
// import HeroComponent from "./components/Hero";

// let heroContainer = document.getElementById("hero-container");

// let desc = `The self - proclaimed mad scientist Rintarou Okabe rents out a room in a rickety old building in Akihabara, where he indulges himself in his hobby of inventing prospective "future gadgets" with fellow lab members: Mayuri Shiina, his air - headed childhood friend, and Hashida Itaru, a perverted hacker nicknamed "Daru." The three pass the time by tinkering with their most promising contraption yet, a machine dubbed the "Phone Microwave," which performs the strange function of morphing bananas into piles of green gel.
// Though miraculous in itself, the phenomenon doesn't provide anything concrete in Okabe's search for a scientific breakthrough; that is, until the lab members are spurred into action by a string of mysterious happenings before stumbling upon an unexpected success—the Phone Microwave can send emails to the past, altering the flow of history.
// Adapted from the critically acclaimed visual novel by 5pb.and Nitroplus, Steins; Gate takes Okabe through the depths of scientific theory and practicality.Forced across the diverging threads of past and present, Okabe must shoulder the burdens that come with holding the key to the realm of time.`

// let movie = {
//     title: "Steins;Gate: Fuka Ryouiki no Déjà vu",
//     description: desc.split("\n").join("<br><br>"),
//     genre: "romance, sci-fi, drama",
//     image: "/assets/images/50317.jpg",
//     rating: "5.0",
// };

// let hero = new HeroComponent(movie);

// heroContainer?.appendChild(hero.toMarkup());

class MovieCard extends HTMLElement {
    constructor() {
        super()
    }

    async connectedCallback() {
        let reqAttr = this.attributes.getNamedItem("request")
        let result = await axios.get(reqAttr.value)


        // this.appendElements([])
    }

    appendElements(childrens: Array<Element>) {
        for (const child of childrens) {
            this.appendChild(child.element)
        }
    }

}

customElements.define("movie-card", MovieCard)