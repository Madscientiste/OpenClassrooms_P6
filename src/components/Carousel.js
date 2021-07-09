import BaseComponent from "./Base"
import Stars from "./Stars"

export default class Carousel extends BaseComponent {
    state = { index: 0, mouseDown: false, mouseMove: false, startPosX: null, scrollLeft: null }

    getCurrentParent() {
        let carousel = this.element
        let body = carousel.querySelector(".carousel-body")
        let wrapper = body.querySelector(".wrapper")

        let items = wrapper.getElementsByClassName("carousel-item")

        return { carousel, body, wrapper, items }
    }

    handleBtnLeft(e) {
        let { carousel, body, wrapper, items } = this.getCurrentParent()
        let item = body.querySelector(".carousel-item")

        let scrollWidth = item.scrollWidth

        if (this.state.index > 0) {
            this.state.index--

            wrapper.style.transition = `all 0.5s`
            wrapper.style.transform = `translateX(-${scrollWidth * this.state.index}px)`
        }
    }

    handleBtnRight(e) {
        let { carousel, body, wrapper, items } = this.getCurrentParent()
        let { left, width } = wrapper.getBoundingClientRect()
        let item = body.querySelector(".carousel-item")

        let itemsPerView = Math.floor(width / item.scrollWidth)
        let scrollWidth = item.scrollWidth
        let max = [...items].length - itemsPerView

        if (this.state.index < max) {
            this.state.index++

            wrapper.style.transition = `all 0.5s`
            wrapper.style.transform = `translateX(-${scrollWidth * this.state.index}px)`
        }
    }

    // finger users
    handleTouchMove(e) {
        ev.preventDefault();

        console.log("uwu senpai")
    }


    // mouse users
    handleMouseMove(e) {
        if (!this.state.mouseDown) return
        e.preventDefault();

        let { body, wrapper } = this.getCurrentParent()
        let { left } = body.getBoundingClientRect()

        const currPosX = e.pageX - left;
        const moveSpeed = (currPosX - this.state.startPosX);

        let move = moveSpeed;

        wrapper.style.transition = `none`
        wrapper.style.transform = `translateX(${move}px)`
    }

    handleMouseLeave(e) {
        if (this.state.mouseDown) {
            this.handleMouseUp(e)
        }
    }

    handleTransition() {
        let { wrapper } = this.getCurrentParent()
        wrapper.style.transition = `none`
    }

    handleMouseUp(e) {
        e.preventDefault();
        this.state.mouseDown = false

        let { body, wrapper, items } = this.getCurrentParent()
        let { left, width } = wrapper.getBoundingClientRect()
        let item = body.querySelector(".carousel-item")

        let pos = Math.abs(Math.round(Number((left / item.scrollWidth).toFixed(2))))
        let itemsPerView = Math.floor(width / item.scrollWidth)

        // snap to the nearest
        let nearest = -(item.scrollWidth * pos)

        wrapper.style.transition = `all 0.5s`

        if (nearest != left) {
            wrapper.style.transform = `translateX(${nearest}px)`
        }

        // can't go beyond the limit
        if (left > 0) {
            wrapper.style.transform = `translateX(0)`
            pos = 0
        }

        if (itemsPerView > [...items].length) {
            itemsPerView = [...items].length
        }

        // can't go beyond the limit
        if (pos > [...items].length - itemsPerView) {
            let nearest = -(item.scrollWidth * ([...items].length - itemsPerView))
            pos = [...items].length - itemsPerView

            wrapper.style.transform = `translateX(${nearest}px)`
        }

        // keeping track of the current element
        this.state.index = Math.abs(pos)
    }

    handleMouseDown(e) {
        e.preventDefault();
        let { wrapper } = this.getCurrentParent()
        let { left } = wrapper.getBoundingClientRect()

        this.state.mouseDown = true
        this.state.startPosX = e.pageX - left;
    }

    render() {
        return (
            <div className="carousel-container">
                <div className="carousel-header">
                    <h3>Best Rated Movies</h3>
                    <div className="carousel-controller">
                        <button onclick={(e) => this.handleBtnLeft(e)} className="button with-icon">
                            <span className="icon">
                                <i className="fas fa-angle-left"></i>
                            </span>
                        </button>

                        <button onclick={(e) => this.handleBtnRight(e)} className="button with-icon">
                            <span className="icon">
                                <i className="fas fa-angle-right"></i>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="carousel-body">
                    <div
                        onmousedown={(e) => this.handleMouseDown(e)}
                        onmouseup={(e) => this.handleMouseUp(e)}
                        onmousemove={(e) => this.handleMouseMove(e)}
                        onmouseleave={(e) => this.handleMouseLeave(e)}
                        ontransitionend={(e) => this.handleTransition(e)}
                        className="wrapper">
                        {this.props.items.map((e) => {
                            return <Carousel.Item {...e} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

Carousel.Item = function ({ image_url, title, rating }) {
    return (
        <div className="carousel-item">
            <div className="image as-cover has-overlay">
                <div className="overlay">
                    <div className="bottom-left">
                        <Stars rating={rating} />
                    </div>
                </div>

                <img src={image_url} alt="UwU" />
            </div>
            <div className="sub-title text-center">{title}</div>
        </div>
    )
}