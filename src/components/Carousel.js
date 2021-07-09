import objectify from "../functions/toObject";
import BaseComponent from "./Base";
import Stars from "./Stars";

export default class Carousel extends BaseComponent {
    state = {
        index: 0,
        mouseDown: false,
        startPosX: null,
        lastPos: { x: null, y: null },
        block: null,
    };

    getCurrentParent() {
        let carousel = this.element;
        let body = carousel.querySelector(".carousel-body");
        let wrapper = body.querySelector(".wrapper");

        let items = wrapper.getElementsByClassName("carousel-item");

        return { carousel, body, wrapper, items };
    }

    getMouseDirection(e) {
        let deltaX = this.state.lastPos.x - e.clientX;
        let deltaY = this.state.lastPos.y - e.clientY;

        // check which direction had the highest amplitude
        // and then figure out direction by checking if the value is greater or less than zero
        let left = Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0;
        let right = Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0;
        let up = Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0;
        let down = Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0;

        let vertical = up || down;
        let horizontal = left || right;

        return { left, right, up, down, vertical, horizontal };
    }

    handleBtnLeft(e) {
        let { carousel, body, wrapper, items } = this.getCurrentParent();
        let item = body.querySelector(".carousel-item");

        let scrollWidth = item.scrollWidth;

        if (this.state.index > 0) {
            this.state.index--;

            wrapper.style.transition = `all 0.5s`;
            wrapper.style.transform = `translate3d(-${scrollWidth * this.state.index}px, 0, 0)`;
        }
    }

    handleBtnRight(e) {
        let { carousel, body, wrapper, items } = this.getCurrentParent();
        let { left, width } = wrapper.getBoundingClientRect();
        let item = body.querySelector(".carousel-item");

        let itemsPerView = Math.floor(width / item.scrollWidth);
        let scrollWidth = item.scrollWidth;
        let max = [...items].length - itemsPerView;

        if (this.state.index < max) {
            this.state.index++;

            wrapper.style.transition = `all 0.5s`;
            wrapper.style.transform = `translate3d(-${scrollWidth * this.state.index}px, 0, 0)`;
        }
    }

    // finger users
    handleTouchMove(e) {
        let { wrapper } = this.getCurrentParent();

        let finger = objectify([...e.touches][0]);
        let MouseMove = new MouseEvent("mousemove", finger);

        let { horizontal, vertical } = this.getMouseDirection(MouseMove);
        if (!this.state.block) this.state.block = vertical && "vertical" || horizontal && "horizontal"

        if (this.state.block == "horizontal") {
            e.preventDefault();
            wrapper.dispatchEvent(MouseMove);
        }
    }

    handleTouchStart(e) {
        let { wrapper } = this.getCurrentParent();

        let finger = objectify([...e.touches][0]);
        let MouseMove = new MouseEvent("mousedown", finger);

        wrapper.dispatchEvent(MouseMove);
    }

    handleTouchEnd(e) {
        let { wrapper } = this.getCurrentParent();
        let finger = objectify([...e.changedTouches][0]);
        let MouseMove = new MouseEvent("mouseup", finger);

        wrapper.dispatchEvent(MouseMove);
        this.state.block = null
    }

    // mouse users
    handleMouseMove(e) {
        if (!this.state.mouseDown) return;
        e.stopPropagation();
        e.preventDefault();

        let { body, wrapper } = this.getCurrentParent();

        // using the body instead of the wrapper, since i need the position related to it
        let { e: left } = new WebKitCSSMatrix(window.getComputedStyle(body).transform);
        const currPosX = e.pageX - left;
        const move = currPosX - this.state.startPosX;

        wrapper.style.transition = `none`;
        wrapper.style.transform = `translate3d(${move}px, 0, 0)`;
    }

    handleMouseLeave(e) {
        if (this.state.mouseDown) {
            this.handleMouseUp(e);
        }
    }

    handleTransition() {
        let { wrapper } = this.getCurrentParent();
        wrapper.style.transition = `none`;
    }

    handleMouseUp(e) {
        e.stopPropagation();
        e.preventDefault();

        this.state.mouseDown = false;

        let { body, wrapper, items } = this.getCurrentParent();
        let { width } = wrapper.getBoundingClientRect();
        let { e: left } = new WebKitCSSMatrix(window.getComputedStyle(wrapper).transform);
        let item = body.querySelector(".carousel-item");

        let pos = Math.abs(Math.round(Number((left / item.scrollWidth).toFixed(2))));
        let itemsPerView = Math.floor(width / item.scrollWidth);

        // snap to the nearest
        let nearest = -(item.scrollWidth * pos);

        wrapper.style.transition = `all 0.5s`;

        if (nearest != left) {
            wrapper.style.transform = `translate3d(${nearest}px, 0 ,0)`;
        }

        // can't go beyond the limit
        if (left > 0) {
            wrapper.style.transform = `translate3d(0, 0, 0)`;
            pos = 0;
        }

        if (itemsPerView > [...items].length) {
            itemsPerView = [...items].length;
        }

        // can't go beyond the limit
        if (pos > [...items].length - itemsPerView) {
            let nearest = -(item.scrollWidth * ([...items].length - itemsPerView));
            pos = [...items].length - itemsPerView;

            wrapper.style.transform = `translateX(${nearest}px)`;
        }

        // keeping track of the current element
        this.state.index = Math.abs(pos);
    }

    handleMouseDown(e) {
        e.stopPropagation();
        e.preventDefault();

        let { wrapper } = this.getCurrentParent();
        let { e: left } = new WebKitCSSMatrix(window.getComputedStyle(wrapper).transform);

        this.state.mouseDown = true;
        this.state.startPosX = e.pageX - left;

        this.state.lastPos = {
            x: e.clientX,
            y: e.clientY,
        };
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
                        ontouchstart={(e) => this.handleTouchStart(e)}
                        ontouchend={(e) => this.handleTouchEnd(e)}
                        ontouchmove={(e) => this.handleTouchMove(e)}
                        ontransitionend={(e) => this.handleTransition(e)}
                        className="wrapper"
                    >
                        {this.props.items.map((e) => {
                            return <Carousel.Item {...e} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

Carousel.Item = function ({ image_url, title, imdb_score }) {
    return (
        <div className="carousel-item">
            <div className="image as-cover has-overlay">
                <div className="overlay">
                    <div className="bottom-left">
                        <Stars rating={imdb_score} />
                    </div>
                </div>

                <img src={image_url} alt="UwU" />
            </div>
            <div className="sub-title text-center">{title}</div>
        </div>
    );
};
