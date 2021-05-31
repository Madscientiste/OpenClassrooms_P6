import BaseComponent from "./base";
import Component from "../utilities/ElementCreator";

class Stars extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        let rating = this.attributes.getNamedItem("rating")?.value || 0;
        let totalStars = 5;

        let ratingPercentage = (rating / totalStars) * 100;

        let rating_value = new Component("div", { className: "value", innerHTML: rating });
        let stars_outer = new Component("div", { className: "stars-outer" }, () => {
            return new Component("div", { className: "stars-inner", style: `width: ${ratingPercentage}%` });
        });

        this.appendComponents([stars_outer, rating_value]);
    }
}

if (!customElements.get("rating-stars")) customElements.define("rating-stars", Stars);
