export default class BaseComponent {
    static isClass = true
    constructor(props) {
        this.props = props
    }

    willMount() { }
    render() { }

    mount(root) {
        this.willMount()

        let rendered = this.render()
        root ? root.replaceWith(rendered) : null

        return rendered
    }
}
