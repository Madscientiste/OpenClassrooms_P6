import getParent from "../functions/getParent"

export default function Carousel({ header, elements }) {
    let direction;

    let getCurrCarousel = (e) => {
        let carousel = getParent("carousel", e.target)
        let body = carousel.querySelector(".carousel-body .body-wrapper")
        let firstItem = body.querySelector(".carousel-item")

        return { carousel, body, firstItem }
    }

    let handleTransition = (e) => {
        let { carousel, body, firstItem } = getCurrCarousel(e)
        let isMobile = window.matchMedia("(max-width: 769px)").matches

        if (direction == 1) {
            body.appendChild(body.firstElementChild);
        } else {
            body.prepend(body.lastElementChild);
        }

        let elmWidth = firstItem.getBoundingClientRect().width;

        // this will only work if the user didn't click the left/right button
        body.style.transition = "none";
        body.style.transform = `translate(${isMobile ? 0 : `-${elmWidth * 1}px`})`;

        setTimeout(() => {
            body.style.transition = "all 0.8s";
        });
    }


    let handleLeft = (e) => {
        let { carousel, body, firstItem } = getCurrCarousel(e)

        direction = -1;
        body.style.transform = `translateX(0)`;
    }

    let handleRight = (e) => {
        let { carousel, body, firstItem } = getCurrCarousel(e)

        let elmWidth = firstItem.getBoundingClientRect().width;
        body.style.transform = `translateX(-${elmWidth * 2}px)`;

        direction = 1;
    }

    let handleEmptyImage = (e, movie) => {
        console.warn("Cover of", movie.title, "Couldn't be found")
        e.target.src = "https://via.placeholder.com/200x280?text=No+Cover"
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
                                            <img onerror={(e) => handleEmptyImage(e, movie)} src={movie.image_url} />
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
