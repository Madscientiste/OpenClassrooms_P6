// converting an instance or whatever to an object that we can destrcuture
export default function objectify(obj) {
    let keys = Object.keys(obj.__proto__)
    let result = keys.map((v) => ({ [v]: obj[v] }))
    return Object.assign({}, ...result)
}
