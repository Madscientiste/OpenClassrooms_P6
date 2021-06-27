export function instantiateComponent(element) {
    var type = element.type;

    if (typeof type === 'function') {
        // User-defined components
        return new CompositeComponent(element);
    } else if (typeof type === 'string') {
        // Platform-specific components
        return new DOMComponent(element);
    }
}

