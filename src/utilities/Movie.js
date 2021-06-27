import axios from "axios"
import resolver from "../hooks/resolver"

const instance = axios.create({ baseURL: "http://86.234.148.125:8000/api/v1" })

class Movie {
    constructor(data) {
        this.id = null;
        this.url = null;
        this.title = null;
        this.original_title = null;
        this.year = null;
        this.date_published = null;
        this.duration = null;
        this.description = null;
        this.long_description = null;
        this.avg_vote = null;
        this.imdb_score = null;
        this.votes = null;
        this.metascore = null;
        this.budget = null;
        this.budget_currency = null;
        this.usa_gross_income = null;
        this.worldwide_gross_income = null;
        this.reviews_from_users = null;
        this.reviews_from_critics = null;
        this.image_url = null;
        this.actors = null;
        this.directors = null;
        this.writers = null;
        this.genres = null;
        this.countries = null;
        this.languages = null;
        this.rated = null;
        this.company = null;
    }

    async resolve() {
        let [data, error] = await resolver(instance.get, ["/titles/" + this.id])
        if (error) throw Error("Couldn't resolve the movie, please check if the server is running or if the url of the api is correct", error)

        Object.assign(this, data)

        return this
    }
}

Movie.filterBy = async function (field) {
    let [data, error] = await resolver(instance.get, ["/titles", { params: { sort_by: field } }])
    if (error) throw Error("Couldn't filter the movies, please check if the server is running or if the url of the api is correct")

    return await Promise.all(
        data.results.map(async data => {
            return await Object.assign(new this(), data).resolve()
        })
    )
}

export default Movie
