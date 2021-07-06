
/// Recusrive function to get the parent of an element 
/// eg: button click.target
export default function getParent(className, el) {
    if (!el.classList.contains(className)) {
        return getParent(className, el.parentNode)
    }
    return el
}