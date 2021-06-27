export default class CompositeComponent {
    constructor(element) {
        this.currentElement = element;
        this.renderedComponent = null;
        this.publicInstance = null;
    }

    getPublicInstance() {
        return this.publicInstance;
    }

    mount() {
        var element = this.currentElement;
        var type = element.type;
        var props = element.props;

        var publicInstance;
        var renderedElement;

        if (isClass(type)) {
            publicInstance = new type(props);
            publicInstance.props = props;

            if (publicInstance.componentWillMount) {
                publicInstance.componentWillMount();
            }

            renderedElement = publicInstance.render();

        } else if (typeof type === 'function') {
            publicInstance = null;
            renderedElement = type(props);
        }

        this.publicInstance = publicInstance;

        var renderedComponent = instantiateComponent(renderedElement);
        this.renderedComponent = renderedComponent;

        return renderedComponent.mount();
    }

    unmount() {
        var publicInstance = this.publicInstance;
        if (publicInstance) {
            if (publicInstance.componentWillUnmount) {
                publicInstance.componentWillUnmount();
            }
        }

        var renderedComponent = this.renderedComponent;
        renderedComponent.unmount();
    }


    receive(nextElement) {
        var prevProps = this.currentElement.props;
        var publicInstance = this.publicInstance;
        var prevRenderedComponent = this.renderedComponent;
        var prevRenderedElement = prevRenderedComponent.currentElement;

        this.currentElement = nextElement;
        var type = nextElement.type;
        var nextProps = nextElement.props;

        var nextRenderedElement;

        if (isClass(type)) {
            if (publicInstance.componentWillUpdate) {
                publicInstance.componentWillUpdate(nextProps);
            }

            publicInstance.props = nextProps;
            nextRenderedElement = publicInstance.render();

        } else if (typeof type === 'function') {
            nextRenderedElement = type(nextProps);
        }

        if (prevRenderedElement.type === nextRenderedElement.type) {
            prevRenderedComponent.receive(nextRenderedElement);
            return;
        }

        var prevNode = prevRenderedComponent.getHostNode();

        prevRenderedComponent.unmount();
        var nextRenderedComponent = instantiateComponent(nextRenderedElement);
        var nextNode = nextRenderedComponent.mount();

        this.renderedComponent = nextRenderedComponent;

        prevNode.parentNode.replaceChild(nextNode, prevNode);
    }

    getHostNode() {
        return this.renderedComponent.getHostNode();
    }

}