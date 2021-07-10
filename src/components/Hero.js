import BaseComponent from "./Base"
export default class Hero extends BaseComponent {
    showModal() {
        state.setState({ modal: this.props.movie })
    }

    render() {
        let { image_url, title, description, imdb_score } = this.props.movie

        return (
            <div className="is-grid cols-2 contain-content">
                <div className="grid-item span-col-1">
                    <div className="image as-background-image as-cover with-blur with-gradiant">
                        <div className="gradiant"></div>
                        <img src={image_url} alt="UwU" />
                    </div>
                </div>

                <div className="container is-large grid-item span-col-1">
                    <div className="is-grid grid-gap-s cols-12 p-2">
                        <div className="grid-item span-col-4 s-span-col-3 m-span-col-2">
                            <div className="image as-cover is-5by7 span-row-3">
                                <img src={image_url} alt="UwU" />
                            </div>
                        </div>

                        <div className="grid-item is-grid rows-4 span-col-6 s-span-col-7 m-span-col-8">
                            <p style={{ maxHeight: '215px' }} className="span-row-3 hide-overflow line-clamp-9">
                                {description}
                            </p>

                            <div className="buttons">
                                <button onclick={() => this.showModal()} className="button with-icon is-left">
                                    More info
                                    <span className="icon is-info">
                                        <i className="fas fa-info-circle"></i>
                                    </span>
                                </button>

                                <button className="button with-icon is-left">
                                    {Number(imdb_score) / 2}
                                    <span className="icon is-warning">
                                        <i className="fas fa-star"></i>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="title span-col-11">{title}</div>
                    </div>
                </div>
            </div >
        )
    }
}


