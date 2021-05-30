class BaseComponent extends HTMLElement {
    constructor() {
        super();
    }

    appendComponents(elements) {
        for (const { element } of elements) {
            this.appendChild(element);
        }
    }
}

export default BaseComponent
