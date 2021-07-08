export default class BaseComponent {
    static isClass = true
    constructor(props) {
        this.props = props
        this.element = null
    }

    willMount() { }
    render() { }

    mount(root) {
        this.willMount()
        let element = this.render()
        this.element = element

        root ? root.replaceWith(element) : null
        return element
    }
}
