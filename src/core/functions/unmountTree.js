
export default function unmountTree(containerNode) {
    // Read the internal instance from a DOM node:
    var node = containerNode.firstChild;
    var rootComponent = node._internalInstance;

    // Unmount the tree and clear the container
    rootComponent.unmount();
    containerNode.innerHTML = '';
}
