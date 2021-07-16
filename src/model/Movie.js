import axios from "axios"
import api from "../functions/api";
import resolver from "../functions/resolver";

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
        let [data, error] = await resolver(api.get, ["/titles/" + this.id])
        if (error) throw Error("Couldn't resolve the movie, please check if the server is running or if the url of the api is correct", error)

        Object.assign(this, data)
        return this
    }
}

Movie.filterBy = async function (params) {
    // getting 25 items ~ since each call == 5 items 
    // would have been better if the API would let me ask more than 5items ... but whatever
    let [data, error] = await resolver(api.get, ["/titles", { params }])
    if (error) return console.error(error)

    let [data1, error1] = await resolver(axios.get, [data.next])
    let [data2, error2] = await resolver(axios.get, [data1.next])
    let [data3, error3] = await resolver(axios.get, [data2.next])


    let movies = [...data.results, ...data1.results, ...data2.results, ...data3.results]
    const movID = [...new Set(movies.map(m => m.id))]

    //removing duplicates
    movies = movID.map(id => movies.find((m) => m.id == id))

    return await Promise.all(
        movies.map(async data => {
            return await Object.assign(new this(), data).resolve()
        })
    )
}

export default Movie
