export default class BaseComponent {
    static isClass = true
    constructor(props) {
        this.props = props
        this.element = null
    }

    willRender() { }
    hasRendered() { }
    render() { }

    mount(root) {
        this.willRender()
        this.element = this.render()

        this.hasRendered()

        if (root) root.replaceWith(this.element)
        return this.element
    }
}
