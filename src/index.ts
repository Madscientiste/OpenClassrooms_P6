import './scss/main.scss';

import Element from "./utilities/Element"
import HeroComponent from "./components/Hero"

let heroContainer = document.getElementById("hero-container")
let heroImage = new Element("img", { src: "/assets/images/50317.jpg", alt: "ayaya" })

let movie = {
    title: "Steins;Gate: Fuka Ryouiki no Déjà vu",
    description: "uwu",
    rating: "5.0",
    genre: "romance, sci-fi, drama",
}

let hero = new HeroComponent({ image: heroImage, ...movie })

heroContainer?.appendChild(hero.element)