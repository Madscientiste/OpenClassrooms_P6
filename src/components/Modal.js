import BaseComponent from "./Base";

export default class Modal extends BaseComponent {
    render() {
        let props = this.props

        let duration = {
            hours: Math.floor(props.duration / 60),
            minutes: ('0' + props.duration % 60).slice(-2)
        }

        let closeModal = () => {
            state.setState({ modal: null })
            window.scrollTo({ top: state.state.scrollX, left: 0 })
        }

        return (
            <div className="modal bg-black">
                <div className="is-grid cols-2 contain-content">
                    <div style={{ height: "250px" }} className="grid-item span-col-1 has-overlay">
                        <div className="container is-medium">
                            <div className="overlay">
                                <div className="top-left p-5">
                                    <button onclick={() => closeModal()} className="button is-borderless with-icon">
                                        <span className="icon">
                                            <i className="fas fa-arrow-left"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="image as-cover with-blur with-gradiant">
                            <div className="gradiant"></div>
                            <img src={props.image_url} alt="UwU" />
                        </div>
                    </div>

                    <div className="bg-black-ligher  grid-item span-col-1">
                        <div
                            style={{ padding: "1em", maxHeight: "300px" }}
                            className="container is-medium is-grid grid-gap-s cols-12 "
                        >
                            <div style={{ marginTop: "-200px" }} className="grid-item span-col-4 s-span-col-3 ">
                                <div className="image as-cover is-5by7">
                                    <img src={props.image_url} alt="UwU" />
                                </div>
                            </div>

                            <div style={{ alignSelf: "end" }} className="grid-item span-col-6 s-span-col-7 ">
                                <div className="tags grid-item as-row-2">
                                    <div className="tag with-icon is-left is-fullwidth bg-black">
                                        {duration.hours}h{duration.minutes}
                                        <span className="icon">
                                            <i className="fas fa-clock"></i>
                                        </span>
                                    </div>

                                    <div className="tag with-icon is-left is-fullwidth bg-black">
                                        {Number(props.imdb_score) / 2}
                                        <span className="icon is-warning">
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="title grid-item start-col-1 end-col">{props.title}</div>
                        </div>
                    </div>
                </div>

                <div style={{ padding: "1em" }} className="container is-medium">
                    <section>
                        <div className="is-grid">
                            <div className="grid-item sub-title">Synopsis</div>
                            <div className="grid-item">
                                <p>
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="is-grid">
                            <div className="grid-item sub-title">Genres</div>
                            <div className="grid-item">
                                <div className="tags">
                                    {props.genres.map(genre => {
                                        return <div className="tag">{genre}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="is-grid">
                            <div className="grid-item sub-title">Writer(s)</div>
                            <div className="grid-item">
                                <div className="tags">
                                    {props.writers.map(writer => {
                                        return <div className="tag">{writer}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="is-grid">
                            <div className="grid-item sub-title">Actors</div>
                            <div className="grid-item">
                                <div className="tags">
                                    {props.actors.map(actor => {
                                        return <div className="tag">{actor}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="is-grid cols-2">
                            <div className="grid-item sub-title">Year</div>
                            <div className="grid-item sub-title">Rated</div>
                            <div className="grid-item">
                                <div className="tag">{props.year}</div>
                            </div>

                            <div className="grid-item">
                                <div className="tag">{props.rated}</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
