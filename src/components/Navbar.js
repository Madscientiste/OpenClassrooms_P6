import BaseComponent from "./Base"

export default class Navbar extends BaseComponent {
    render() {
        return (
            <div className="navbar">
                <div className="nav-item brand">Just Stream it</div>
            </div>
        )
    }
}
