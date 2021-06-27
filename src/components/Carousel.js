import getParent from "../functions/getParent"

export default function Carousel({ header, elements }) {
    let counter = 0;
    let direction;

    let getCurrCarousel = (e) => {
        let carousel = getParent("carousel", e.target)
        let body = carousel.querySelector(".carousel-body .body-wrapper")
        let firstItem = body.querySelector(".carousel-item")

        return { carousel, body, firstItem }
    }

    let handleTransition = (e) => {
        let { carousel, body, firstItem } = getCurrCarousel(e)

        if (direction == 1) {
            body.appendChild(body.firstElementChild);
            body.appendChild(body.firstElementChild);
        } else {
            body.prepend(body.lastElementChild);
            body.prepend(body.lastElementChild);
        }

        let elmWidth = firstItem.getBoundingClientRect().width;
        let elmWidthPercent = (elmWidth / carousel.getBoundingClientRect().width) * 100;

        body.style.transition = "none";
        body.style.transform = `translate(0%)`;

        setTimeout(() => {
            body.style.transition = "all 0.8s";
        });
    }


    let handleLeft = (e) => {
        let { carousel, body, firstItem } = getCurrCarousel(e)

        direction = -1;
        body.style.transform = `translateX(0%)`;
    }

    let handleRight = (e) => {
        let { carousel, body, firstItem } = getCurrCarousel(e)

        let elmWidth = firstItem.getBoundingClientRect().width;
        let elmWidthPercent = (elmWidth / carousel.getBoundingClientRect().width) * 100;

        body.style.transform = `translateX(-${(elmWidthPercent * 2)}%)`;

        direction = 1;
        counter++
    }



    return (
        <section>
            <h3>{header}</h3>

            <div className="section-body">
                <div className="carousel">
                    <div className="carousel-controller">
                        <button onclick={(e) => handleLeft(e)} className="carousel-button">
                            <div className="icon">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                        </button>

                        <button onclick={(e) => handleRight(e)} className="carousel-button">
                            <div className="icon">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </button>
                    </div>

                    <div className="carousel-body">
                        <div ontransitionend={(e) => handleTransition(e)} className="body-wrapper">
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
