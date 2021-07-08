import BaseComponent from "./Base"

export default class Hero extends BaseComponent {
    render() {
        return (
            <div className="container is-grid cols-2">
                <div className="grid-item span-col-1">
                    <div className="image as-background-image as-cover with-blur with-gradiant">
                        <div className="gradiant"></div>
                        <img src="https://cdn.myanimelist.net/images/anime/1013/113747.jpg" alt="UwU" />
                    </div>
                </div>

                <div style={{ margin: '0.5em' }} className="grid-item span-col-1 is-grid grid-gap-s cols-12">
                    <div style={{ height: "300px" }} className="grid-item span-col-4 s-span-col-3 m-span-col-2">
                        <div className="image as-cover span-row-3">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/113747.jpg" alt="UwU" />
                        </div>
                    </div>

                    <div className="grid-item is-grid rows-4 span-col-6 s-span-col-7 m-span-col-8">
                        <p style={{ maxHeight: '215px' }} className="span-row-3 hide-overflow line-clamp-9">
                            After harboring an unrequited love for years, Naoya Mukai finally gets to date his childhood friend,
                            Saki Saki. However, just as he tries to commit himself to this relationship,
                            he receives an abrupt confession from Nagisa Minase.
                        </p>

                        <div className="buttons">
                            <button className="button with-icon is-left">
                                More info
                                <span className="icon is-info">
                                    <i className="fas fa-info-circle"></i>
                                </span>
                            </button>

                            <button className="button with-icon is-left">
                                6.92
                                <span className="icon is-warning">
                                    <i className="fas fa-star"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="title span-col-12">Kanojo mo Kanojo</div>
                </div>
            </div >
        )
    }
}
