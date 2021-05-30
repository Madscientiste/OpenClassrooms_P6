import BaseComponent from "./base";
import Component from "../utilities/ElementCreator";

class MoviePoster extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        let src = this.attributes.getNamedItem("src").value;
        let title = this.attributes.getNamedItem("title").value;
        let rating = this.attributes.getNamedItem("rating").value;

        let cover_container = new Component("div", { className: "cover-container" }, () => {
            let image = new Component("img", { className: "cover-image", alt: title, src });
            let poster_rating = new Component("rating-stars", undefined, (element) => {
                let nodeAttr = document.createAttribute("rating");
                nodeAttr.value = rating;

                element.setAttributeNode(nodeAttr);
            });

            return [image, poster_rating];
        });

        let poster_title = new Component("div", { className: "poster-title", innerHTML: title });

        this.appendComponents([cover_container, poster_title]);
    }
}

if (!customElements.get("movie-poster")) customElements.define("movie-poster", MoviePoster);
