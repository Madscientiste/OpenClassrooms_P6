import BaseComponent from "./Base"
import Stars from "./Stars"

import getParentElement from "../functions/getParentElement"

export default class Carousel extends BaseComponent {
    state = { index: 0 }

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

        let scrollWidth = item.scrollWidth * 2

        if (this.state.index > 0) {
            this.state.index--
            wrapper.style.transform = `translateX(-${scrollWidth * this.state.index}px)`
        }
    }

    handleBtnRight(e) {
        let { carousel, body, wrapper, items } = this.getCurrentParent()
        let item = body.querySelector(".carousel-item")

        let scrollWidth = item.scrollWidth * 2
        let max = ([...items].length / 2) - 2

        if (this.state.index < max) {
            this.state.index++
            wrapper.style.transform = `translateX(-${scrollWidth * this.state.index}px)`
        }
    }

    handleMouseMove(e) {
        let { carousel, body, items } = this.getCurrentParent()

    }

    handleMouseUp(e) {
        let { carousel, body, items } = this.getCurrentParent()
    }

    handleMouseDown(e) {
        let { carousel, body, items } = this.getCurrentParent()
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
                    <div className="wrapper">
                        {Array(15).fill(0).map(() => {
                            return <Carousel.Item />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

Carousel.Item = function () {
    return (
        <div className="carousel-item">
            <div className="image as-cover has-overlay">
                <div className="overlay">
                    <div className="bottom-left">
                        <Stars rating="9.87" />
                    </div>
                </div>

                <img src="https://cdn.myanimelist.net/images/anime/1111/113327.jpg" alt="UwU" />
            </div>
            <div className="sub-title text-center">Osananajimi ga Zettai ni Makenai Love Comedy</div>
        </div>
    )
}