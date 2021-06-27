export default function hero({ movie }) {
    return (
        <section>
            <h2>Top Rated Movie</h2>

            <div className="section-body">
                <div className="hero">
                    <div className="hero-banner">
                        <div className="banner-wrapper">
                            <div className="banner-image" style={{ backgroundImage: `url(${movie.image_url})` }}>
                            </div>
                        </div>
                    </div>

                    <div className="hero-body">
                        <div className="movie">
                            <div className="movie-cover">
                                <div className="image is-5by7">
                                    <img src={movie.image_url} />
                                </div>
                            </div>

                            <div className="wrapper">
                                <p className="movie-description">
                                    {movie.description}
                                </p>

                                <div className="buttons">
                                    <button className="button is-info is-light has-icon-right">
                                        <span>More info</span>
                                        <span className="icon">
                                            <i className="fas fa-info-circle"></i>
                                        </span>
                                    </button>

                                    <button className="button is-warning is-light has-icon-right hide-mobile">
                                        <span>{movie.imdb_score}</span>
                                        <span className="icon">
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="movie-name">{movie.title}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
