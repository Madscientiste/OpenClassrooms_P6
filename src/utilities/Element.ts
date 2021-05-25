type props = { [k: string]: any }

class Element {
    element: HTMLElement;

    constructor(tagName: string, props: props = {}, callback: CallableFunction = () => []) {
        this.element = document.createElement(tagName)

        Object.keys(props).forEach((key) => {
            // @ts-ignore
            this.element[key] = props[key]
        })

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

    toMarkup() {
        return this.element
    }
}


export default Element