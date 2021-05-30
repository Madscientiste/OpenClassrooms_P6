class ElementCreator {
    constructor(tagName, props = {}, callback = () => []) {
        this.element = document.createElement(tagName);

        for (const key in props) {
            this.element[key] = props[key];
        }

        this.appendChild(callback(this.element));
    }

    toElement() {
        return this.element;
    }

    appendChild(child) {
        if (child) {
            if (child instanceof Array) {
                child.forEach(this.appendChild, this);
            } else {
                this.element.appendChild(child.toElement());
            }
        }
    }
}

export default ElementCreator;
