import "./styles/main.scss";
import "./utilities/jsx"

import App from "./app";
import StateManager from "./core/StateManager";

// const updater = new StateManager({ isLoading: true, movies: [] }, (newState) => {
//     props.state = newState
//     render(props)
// })

// const props = {
//     state: updater.state,
//     setState: updater.setState
// }

// function render(props) {
//     App(props).then((content) => {
//         window.document.getElementById('root').replaceChildren(content)
//     })
// }

// render(props)

if (module.hot) module.hot.accept();

var root = document.getElementById('root');


// import api from "./utilities/api"

// window.onload = async (event) => {
//     let rootElement = document.getElementById("root")
//     let loader = document.getElementById("loader")

//     const titles = await api.getTitles({ sort_by: "imdb_score" })
//     const [a, b, first] = titles.data.results
//     const { data: movie } = await api.getTitle(first.id)

//     console.log(movie)

//     let heroSection = document.createElement("section")
//     heroSection.innerHTML = `
//         <h2>Top Rated Movie</h2>

//         <div class="section-body">
//             <div class="hero">
//                 <div class="hero-banner">
//                     <div class="banner-wrapper">
//                         <div class="banner-image" style="background-image: url('${movie.image_url}');">
//                         </div>
//                     </div>
//                 </div>

//                 <div class="hero-body">
//                     <div class="movie">
//                         <div class="movie-cover">
//                             <div class="image is-5by7">
//                                 <img src="${movie.image_url}">
//                             </div>
//                         </div>

//                         <div class="wrapper">
//                             <p class="movie-description">
//                                 ${movie.description}
//                             </p>

//                             <div class="buttons">
//                                 <button class="button is-info is-light has-icon-right">
//                                     <span>More info</span>
//                                     <span class="icon">
//                                         <i class="fas fa-info-circle"></i>
//                                     </span>
//                                 </button>

//                                 <button class="button is-warning is-light has-icon-right hide-mobile">
//                                     <span>${movie.imdb_score}</span>
//                                     <span class="icon">
//                                         <i class="fas fa-star"></i>
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>

//                         <div class="movie-name">${movie.title}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `

//     rootElement.prepend(heroSection)

//     loader.style.display = "None"
// }

