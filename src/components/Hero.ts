import Element from "../utilities/Element"

type attrType = { image: Element; title: string; description: string; genre: string; rating: string; }

class HeroComponent {
    element: Element;

    constructor({ image, title, description, genre, rating }: attrType) {
        this.element = new Element("div", { classList: ["hero"] }, () => {
            let heroImage = new Element("div", { classList: ["hero-image"] }, () => [image])

            let heroContent = new Element("div", { classList: ["hero-content pl-3"] }, () => {
                let name = new Element("div", { classList: ["content-name"], innerHTML: title })
                let desc = new Element("p", { classList: ["content-desc"], innerHTML: description })

                let meta = new Element("div", { classList: ["content-meta"] }, () => {
                    let metaGenre = new Element("div", { classList: ["content-genre px-1 m-1"], innerHTML: genre })
                    let metaRating = new Element("div", { classList: ["content-rating"] }, () => {
                        let value = new Element("div", { classList: ["value", "rounded", "mx-1", "px-2"], innerHTML: rating })
                        let icons = new Element("div", { classList: ["icons"] })

                        return [value, icons]
                    })
                    return [metaGenre, metaRating]
                })
                return [name, desc, meta]
            })
            return [heroImage, heroContent]
        }).element
    }
}


export default HeroComponent