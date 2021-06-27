// function createElement(tagName, props, ...children) {
//     const elemType = typeof tagName;

//     const isFunction = elemType == "function"
//     const isFragment = elemType == "fragment"
//     const isHTML = elemType == "string"

//     if (isFunction) {
//         return tagName(props, children)
//     } else if (isFragment) {
//         return children
//     } else if (isHTML) {
//         const element = Object.assign(document.createElement(tagName), props)
//         if (props?.style) Object.assign(element.style, props.style)

//         for (const child of children) {
//             Array.isArray(child) ? element.append(...child) : element.append(child)
//         }

//         return element
//     }
// }

window.createElement = function (type, config, ...children) {
    let props = Object.assign({}, config)
    props.children = children

    return {
        type,
        props
    }
};