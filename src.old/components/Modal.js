export default function Modal(props) {
    return (
        <div className="modal-container">
            <div className="modal container">
                <div className="modal-banner">
                    <img className="banner-image" src="https://cdn.myanimelist.net/images/anime/3/50317.jpg" alt="ayaya.png" />
                </div>

                <div className="container is-medium">
                    <div className="modal-header">
                        <div className="wrapper">
                            <div className="header-cover">
                                <img className="cover-image" src="https://cdn.myanimelist.net/images/anime/3/50317.jpg" alt="ayaya.png" />
                            </div>
                        </div>

                        <div className="movie-meta has-rows">
                            <div className="tag">
                                <span className="icon">
                                    <i className="fas fa-clock"></i>
                                </span>
                                1h30
                            </div>

                            <div style={{ 'flex-grow': 1 }} className="tag">
                                <span className="icon is-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                                9.10
                            </div>
                        </div>

                        <div className="header-title">Steins;Gate: Fuka Ryouiki no Déjà vu</div>
                    </div>
                </div>
            </div>

            <div className="movie-details">
                <div className="container is-medium">
                    <section>
                        <h3>Synopsis</h3>
                        <p>
                            After a year in America, Kurisu Makise returns to Akihabara and reunites with Rintarou Okabe. However,
                            their reunion is cut short when Okabe begins to experience recurring flashes of other timelines
                            as the consequences of his time traveling start to manifest.
                            These side effects eventually culminate in Okabe suddenly vanishing from the world,
                            and only the startled Kurisu has any memory of his existence.

                            In the midst of despair, Kurisu is faced with a truly arduous choice that will
                            test both her duty as a scientist and her loyalty as a friend: follow Okabe's advice
                            and stay away from traveling through time to avoid the potential consequences it
                            may have on the world lines, or ignore it to rescue the person that she cherishes most.
                            Regardless of her decision, the path she chooses is one that will affect the past,
                            the present, and the future.
                        </p>

                    </section>

                    <section>
                        <h3>Genres</h3>
                        <div className="tag-list">
                            <span className="tag">sci-fi</span>
                            <span className="tag">romance</span>
                            <span className="tag">drama</span>
                            <span className="tag">mistery</span>
                        </div>
                    </section>

                    <section>
                        <h3>Writer(s)</h3>
                        <div className="tag-list">
                            <span className="tag">Nitroplus</span>
                            <span className="tag">Kugayama, Reki</span>
                            <span className="tag">Shikura, Chiyomaru</span>
                        </div>
                    </section>

                    <section>
                        <h3>Actor(s)</h3>
                        <div className="tag-list">
                            <span className="tag">Miyano, Mamoru</span>
                            <span className="tag">Imai, Asami</span>
                            <span className="tag">Hanazawa, Kana</span>
                            <span className="tag">Tamura, Yukari</span>
                            <span className="tag">Seki, Tomokazu</span>
                            <span className="tag">Kobayashi, Yuu</span>
                            <span className="tag">Momoi, Haruko</span>
                        </div>
                    </section>

                    <section>
                        <h3>Date Published</h3>
                        <div className="tag-list">
                            <span className="tag">Apr 20, 2013</span>
                        </div>
                    </section>

                    <section>
                        <h3>Rated</h3>
                        <div className="tag-list">
                            <span className="tag">PG-13</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
