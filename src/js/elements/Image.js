class Image {

    constructor(props) {
        this.element = document.createElement("img")

        for (const key in props) {
            this.element[key] = props[key]
        }
    }
}



export default Image
