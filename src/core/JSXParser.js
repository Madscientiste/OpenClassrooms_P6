window.createElement = function (tagName, props, ...children) {
    const elemType = typeof tagName;

    const isClass = tagName.isClass
    const isFunction = elemType == "function" && !isClass
    const isFragment = tagName == "fragment"
    const isHTML = elemType == "string"


    if (isFunction) {
        return tagName(props, children)
    } else if (isClass) {
        let app = new tagName(props)
        return app.mount()
    } else if (isFragment) {
        let fragment = document.createDocumentFragment()
        children.forEach(c => fragment.appendChild(c))

        return fragment
    } else if (isHTML) {
        const element = Object.assign(document.createElement(tagName), props)
        if (props?.style) Object.assign(element.style, props.style)

        for (const child of children) {
            Array.isArray(child) ? element.append(...child) : element.append(child)
        }

        return element
    }
}
