import Observer from "./Observer"

const STATES_UPDATE = "state_update"

// for some reason i can't instansiate a new observer in the class
const observer = new Observer()

export default class StateManager {
    constructor(initialState, onChange = () => null) {
        this.state = initialState
        observer.subscribe(STATES_UPDATE, onChange)
    }

    setState(partialState) {
        Object.assign(this.state, partialState)
        observer.publish(STATES_UPDATE, { state: this.state, setState: this.setState });
        return this.state
    }
}

