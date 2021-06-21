import "./styles/main.scss";

// components
import "./components/Stars";
import "./components/MoviePoster"

const carousel = document.querySelector(".carousel");
const controller = carousel.querySelector(".carousel-controller");
const body = carousel.querySelector(".carousel-body");



if (module.hot) module.hot.accept();