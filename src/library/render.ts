import { VirtualElement } from "./types";

/**
 * Turn a virtual element into a real DOM element
 */
export const render = (virtualElement: VirtualElement): Element | Text => {
  /**
   * If the virtual element does not imply anything visually interesting to
   * render
   */
  if (virtualElement === null || virtualElement === undefined) {
    /**
     * Renders an empty text node, we can do better by using a document
     * fragment, more research are needed in order to know more about this
     * element and to decide if this is a more suitable element to use
     */
    return document.createTextNode("");
  }

  /**
   * If the virtual element is a text
   */
  if (typeof virtualElement === "string") {
    /**
     * We can simply render the text as-is with the createTextNode function
     * suitable for this specific case
     */
    return document.createTextNode(virtualElement);
  }

  /**
   * If we reach this part of the script, this means that the element is
   * neither a string, null or undefined so it must be an object hopefully if
   * the client uses typescript, and if not we should still add a check here
   * before continuing in order to crash the app at runtime, maybe we will
   * force users to use typescript for this framework and this is open to
   * debate
   */
  const element = document.createElement(virtualElement.name);

  /**
   * We use the Object.entries method in order to turn the object into
   * something that can be looped so that we can grab the attribute name &
   * value for each properties/value
   */
  Object.entries(virtualElement.attributes).forEach(([attributeName, attributeValue]) => {
    /**
     * If the attribute does not resolve to something visually interesting such
     * as null or undefined
     */
    if (attributeValue === undefined || attributeValue === null) {
      /**
       * We simply do not render it at all in the return element and since we
       * are not patching anything here, there is not concept of removing the
       * attribute in this specific case so its simpler to just return in here
       */
      return;
    }

    /**
     * If the attribute starts with "on" like "onclick", this means that this
     * is an event and we should treat the value as an event listener instead
     * of a plain attribute string
     */
    if (attributeName.startsWith("on") && typeof attributeValue === "function") {
      /**
       * We add the event to the element using the "addEventListener" method,
       * and we passthrough the computed event to the listener. We could have
       * simplified and reunited this algorithm along with the algorihm
       * responsible for adding an attribute easily, but we might run into
       * trouble when it comes to patching the element since patching oftens
       * means updating/deleting an attribute, or an event in this case, and I
       * really don't know if this is possible to remove an event listener from
       * an element if it has been attached using element.onclick = listener,
       * or maybe removing the element from the DOM and garbage collecting it
       * might as well remove the listener and all of this is useless, I'm not
       * confident enough to answer this question and I might resort to asking
       * help to the community here
       */
      element.addEventListener(attributeName.slice(2), event => attributeValue(event));

      /**
       * We early return in here as we use the fail-fast methodology in order
       * to simplify the writing of conditions and not fall into the
       * if-else-if-else hell
       */
      return;
    }

    /**
     * If the attribute is not an event, this means this is a simple attribute
     * so we might attach it to the element simply by calling the
     * "setAttribute" method
     */
    element.setAttribute(attributeName, String(attributeValue));
  });

  /**
   * Once we created the element and attached all the attributes necessary, we
   * can loop through all of the children and repeat the same process again,
   */
  virtualElement.children.forEach(child => {
    /**
     * But since we don't want to rewrite all of the above, and we certainly
     * don't know how many times we need to do this, we use a recursive algorithm
     * in order to call the render function again on all of the children
     */
    element.appendChild(render(child));
  });

  /**
   * Now that everything has been done for this particular virtual element, we
   * can return it to the caller that will do the side-effect of appending this
   * element to the root DOM element
   */
  return element;
};
