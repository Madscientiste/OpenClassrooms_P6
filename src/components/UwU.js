import Component from "../core/component";
import store from "../core/store";

export default class UwU extends Component {
    constructor(onUpdate) {
        super({ store }, onUpdate)
    }

    click() {
        console.log("clicked")
        store.dispatch('setUwU', !store.state.UwU)
    }


    render() {
        console.log(store)

        return (
            <div onclick={(e) => this.click(e)}>
                {store.state.UwU} - ayaya
            </div>
        )
    }
}