import { VirtualElement } from ".";
import { render } from "./render";

/**
 * Create a function that will update the DOM tree based on the differences
 * between two virtual elements
 */
export const createPatch = (oldVirtualElement: VirtualElement, newVirtualElement: VirtualElement) => {
  /**
   * This is the function that will be used to patch any DOM tree element
   */
  return (element: Element) => {
    /**
     * if the old virtual element is null, undefined or a string, this means
     * that we can simply compare the old and new virtual elements using a
     * simple comparison
     */
    if (oldVirtualElement === null || oldVirtualElement === undefined || typeof oldVirtualElement === "string") {
      /**
       * If the new virtual element is different from the old virtual element
       */
      if (!Object.is(oldVirtualElement, newVirtualElement)) {
        /**
         * This means that we need to change it in the current DOM, otherwise
         * we do nothing as it means they are identical
         */
        element.replaceWith(render(newVirtualElement));
      }

      /**
       * We can stop here since null, undefined or a string does not have
       * attributes nor children
       */
      return;
    }

    /**
     * We can do the same thing for the new virtual DOM as this is a check that
     * we need to do in order to ensure that in the next branches, the old and
     * new virtual elements are objects, which will simplify the process of
     * diffing those two
     */
    if (newVirtualElement === null || newVirtualElement === undefined || typeof newVirtualElement === "string") {
      /**
       * If the new virtual element is different from the old virtual element
       */
      if (!Object.is(oldVirtualElement, newVirtualElement)) {
        /**
         * This means that we need to change it in the current DOM, otherwise
         * we do nothing as it means they are identical
         */
        element.replaceWith(render(newVirtualElement));
      }

      /**
       * We can stop here since null, undefined or a string does not have
       * attributes nor children
       */
      return;
    }

    /**
     * Reaching this part of the script, we know for sure (if the user uses
     * TypeScript) that the old and new virtual elements are both objects, so
     * we can start to compare the names of those two elements
     */
    if (oldVirtualElement.name !== newVirtualElement.name) {
      /**
       * If the two names are different, this means that for this particular
       * node, the element needs to change and we don't need to do a diff on
       * the attribute since the old element will be completely replaced by the
       * new one
       */
      element.replaceWith(render(newVirtualElement));

      /**
       * Here we can simply return since, again, we don't need to do a diffing
       * between the attribute and children since the whole element is
       * different
       */
      return;
    }

    /**
     * Once we know for sure that the two elements are the same, this probably
     * means that their attributes have differences
     */
    Object.entries(oldVirtualElement.attributes).forEach(([oldVirtualElementAttributeName, oldVirtualElementAttributeValue]) => {
      /**
       * We first grab the attribute from the new virtual element based on the
       * name of the old attribute
       */
      const newVirtualElementAttributeValue = newVirtualElement.attributes[oldVirtualElementAttributeName];

      /**
       * If the attribute from the new virtual element is null or undefined, it
       * is considered being removed from the DOM element
       */
      if (newVirtualElementAttributeValue === undefined || newVirtualElementAttributeValue === null) {
        /**
         * Since an attribute can either be a simple attribute or an event
         * listener, we need to first check what type of attribute this is
         */
        if (oldVirtualElementAttributeName.startsWith("on") && typeof oldVirtualElementAttributeValue === "function") {
          /**
           * If this is an event listener attribute, meaning that its name
           * starts with the "on" word like "onclick", we call the
           * "removeEventListener" method on the DOM element in order to remove
           * the old listener from the element, that way we prevent any further
           * listening to an event that is no longer needed
           */
          element.removeEventListener(oldVirtualElementAttributeName.slice(2), oldVirtualElementAttributeValue);

          /**
           * From there, we can simply return and go for the next attribute
           * since an event listener is not at the same time a simple attribute
           */
          return;
        }

        /**
         * If this is not an event listener, we simply call the
         * "removeAttribute" method from the DOM element in order to remove the
         * attribute
         */
        element.removeAttribute(oldVirtualElementAttributeName);

        /**
         * Same logic here as for the listener, since we don't need to go any
         * further, we can issue an early return in order to simplify the
         * branching logic and complexity
         */
        return;
      }

      /**
       * From now on, we know that the attribute value is not undefined nor
       * null, so this means that they are not attribute to remove but rather
       * attribute that may have changed and we need to be sure of that in this
       * condition
       */
      if (newVirtualElementAttributeValue !== oldVirtualElementAttributeValue) {
        /**
         * If we know that the two attributes are different in their value, we
         * need to first check what type of attribute we have here, whether
         * this is an event listener or a simple attribute
         */
        if (oldVirtualElementAttributeName.startsWith("on") && typeof newVirtualElementAttributeValue === "function" && typeof oldVirtualElementAttributeValue === "function") {
          /**
           * If we know for sure that the attribute we are dealing with in here
           * is a event listener
           */
          const eventName = oldVirtualElementAttributeName.slice(2);

          /**
           * We need to first remove the old event listener from the DOM
           * element
           */
          element.removeEventListener(eventName, oldVirtualElementAttributeValue);

          /**
           * Then, we need to attach the new event listener to the same DOM
           * element
           */
          element.addEventListener(eventName, newVirtualElementAttributeValue);

          /**
           * Since an event listener cannot be at the same time a simple
           * attribute, we can safely issue an early return in here to go to
           * the next attribute to check
           */
          return;
        }

        /**
         * If the attribute to update is a simple attribute, the work is even
         * simpler and we simply need to call the "setAttribute" method on the
         * DOM element to patch
         */
        element.setAttribute(oldVirtualElementAttributeName, String(newVirtualElementAttributeValue));
      }
    });

    Object.entries(newVirtualElement.attributes).forEach(([newVirtualElementAttributeName, newVirtualElementAttributeValue]) => {
      const oldVirtualElementAttributeValue = oldVirtualElement.attributes[newVirtualElementAttributeName];

      if (oldVirtualElementAttributeValue !== undefined && oldVirtualElementAttributeValue !== null || newVirtualElementAttributeValue === null || newVirtualElementAttributeValue === undefined) {
        return;
      }

      if (newVirtualElementAttributeName.startsWith("on") && typeof newVirtualElementAttributeValue === "function") {
        element.addEventListener(newVirtualElementAttributeName.slice(2), newVirtualElementAttributeValue);

        return;
      }

      element.setAttribute(newVirtualElementAttributeName, String(newVirtualElementAttributeValue));
    });

    oldVirtualElement.children.forEach((oldVirtualElementChild, oldVirtualElementChildIndex) => {
      const newVirtualElementChild = newVirtualElement.children[oldVirtualElementChildIndex];
      const elementChild = element.childNodes.item(oldVirtualElementChildIndex);

      const patch = createPatch(oldVirtualElementChild, newVirtualElementChild);

      patch(elementChild as Element);
    });
  }
};
