import "./styles/main.scss";
import api from "./utilities/api"

const movies = api.getTitles({ sort_by: "-imdb_score" })
movies.then((e) => {
    console.log(e.data.results)
})


if (module.hot) module.hot.accept();