export default function Carousel({ header, elements }) {
    return (
        <section>
            <h3>{header}</h3>

            <div className="section-body">
                <div className="carousel">
                    <div className="carousel-controller">
                        <button className="carousel-button">
                            <div className="icon">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                        </button>

                        <button className="carousel-button">
                            <div className="icon">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </button>
                    </div>

                    <div className="carousel-body">
                        <div className="body-wrapper">
                            {elements.map(movie => {
                                return (
                                    <div className="carousel-item">
                                        <div className="image is-5by7">
                                            <img src={movie.image_url} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
