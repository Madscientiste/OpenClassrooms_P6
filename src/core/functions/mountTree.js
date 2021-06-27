export default function mountTree(element, containerNode) {
    if (containerNode.firstChild) {
        var prevNode = containerNode.firstChild;
        var prevRootComponent = prevNode._internalInstance;
        var prevElement = prevRootComponent.currentElement;

        // If we can, reuse the existing root component
        if (prevElement.type === element.type) {
            prevRootComponent.receive(element);
            return;
        }

        // Otherwise, unmount the existing tree
        unmountTree(containerNode);
    }

    // Create the top-level internal instance
    var rootComponent = instantiateComponent(element);

    // Mount the top-level component into the container
    var node = rootComponent.mount();
    containerNode.appendChild(node);

    // Save a reference to the internal instance
    node._internalInstance = rootComponent;

    // Return the public instance it provides
    var publicInstance = rootComponent.getPublicInstance();

    return publicInstance;
}