
/// Helps writing cleaner code for async/await
/// eg:
///     let [data, error] = await resolver(axios.get, "/api/ayaya")
///
export default async function resolver(resolvable, props) {
    try {
        const { data } = await resolvable(...props)
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
