


class BaseElement {
    childrens = false

    constructor(element) {
        this.element = document.createElement(element)
    }

    addChildrens(childrens) {
        if (typeof childrens == Array) {
            console.log(childrens)
        }
    }
}