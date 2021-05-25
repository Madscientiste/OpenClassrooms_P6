type props = {
    [key: string]: any
}

class Element {
    element: HTMLElement;

    constructor(tagName: string, props: props = {}, callback: CallableFunction = () => []) {
        this.element = document.createElement(tagName)
        // this.element.classList.value = classList.join(" ")

        for (const key in props) {
            this.element[key] = props[key]
        }

        // The callback should always return an array of Elements
        this.appendChildrens(callback(this.element))
    }

    appendChild(child: Element) {
        this.element.appendChild(child.element)
    }

    appendChildrens(childrens: Array<Element>) {
        for (const child of childrens) {
            this.element.appendChild(child.element)
        }
    }
}


export default Element