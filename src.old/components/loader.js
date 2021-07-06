export default function loader({ isLoading }) {

    return (
        <div id="loader" style={{ display: isLoading ? "flex" : "none" }} className="loader">
            Loading...
        </div>
    )
}
