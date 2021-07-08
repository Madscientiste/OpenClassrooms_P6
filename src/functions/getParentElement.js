
/// Recusrive function to get the parent of an element 
/// eg: button click.target
export default function getParentElement(className, el) {
    if (!el.classList) return false
    if (!el.classList.contains(className)) return getParentElement(className, el.parentNode)

    return el
}