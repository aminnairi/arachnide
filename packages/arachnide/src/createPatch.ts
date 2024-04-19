import { RenderedElement, VirtualElement } from "./types";
import { render } from "./render";

/**
 * Create a function that will update the DOM tree based on the differences
 * between two virtual elements
 */
export const createPatch = (oldVirtualElement: VirtualElement, newVirtualElement: VirtualElement) => {
  /**
   * This is the function that will be used to patch any DOM tree element
   */
  return (element: RenderedElement) => {
    if (oldVirtualElement === null || oldVirtualElement === undefined) {
      if (newVirtualElement === null || newVirtualElement === undefined) {
        return;
      }

      if (element === null) {
        return;
      }

      const newElement = render(newVirtualElement);

      if (newElement === null) {
        return;
      }


      element.appendChild(newElement);

      return;
    }

    /**
     * if the old virtual element is null, undefined or a string, this means
     * that we can simply compare the old and new virtual elements using a
     * simple comparison
     */
    if (typeof oldVirtualElement === "string" || typeof oldVirtualElement === "number" || typeof oldVirtualElement === "boolean") {
      /**
       * If the new virtual element is different from the old virtual element
       */
      if (Object.is(oldVirtualElement, newVirtualElement)) {
        return;
      }

      if (element === null) {
        return;
      }

      const newElement = render(newVirtualElement);

      if (newElement === null) {
        return;
      }

      /**
         * This means that we need to change it in the current DOM, otherwise
         * we do nothing as it means they are identical
         */
      element.replaceWith(newElement);

      /**
       * We can stop here since null, undefined or a string does not have
       * attributes nor children
       */
      return;
    }

    if (newVirtualElement === null || newVirtualElement === undefined) {
      if (oldVirtualElement === null || oldVirtualElement === undefined) {
        return;
      }

      if (element === null) {
        return;
      }

      element.remove();

      return;
    }

    /**
     * We can do the same thing for the new virtual DOM as this is a check that
     * we need to do in order to ensure that in the next branches, the old and
     * new virtual elements are objects, which will simplify the process of
     * diffing those two
     */
    if (typeof newVirtualElement === "string" || typeof newVirtualElement === "number" || typeof newVirtualElement === "boolean") {
      /**
       * If the new virtual element is different from the old virtual element
       */
      if (Object.is(oldVirtualElement, newVirtualElement)) {
        return;
      }

      if (element === null) {
        return;
      }

      const newElement = render(newVirtualElement);

      if (newElement === null) {
        return;
      }

      /**
       * This means that we need to change it in the current DOM, otherwise
       * we do nothing as it means they are identical
       */
      element.replaceWith(newElement);

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
      if (element === null) {
        return;
      }

      const newElement = render(newVirtualElement);

      if (newElement === null) {
        return;
      }

      /**
       * If the two names are different, this means that for this particular
       * node, the element needs to change and we don't need to do a diff on
       * the attribute since the old element will be completely replaced by the
       * new one
       */
      element.replaceWith(newElement);

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
        // @ts-ignore
        element[oldVirtualElementAttributeName] = null;

        return;
      }

      /**
       * From now on, we know that the attribute value is not undefined nor
       * null, so this means that they are not attribute to remove but rather
       * attribute that may have changed and we need to be sure of that in this
       * condition
       */
      if (newVirtualElementAttributeValue === oldVirtualElementAttributeValue) {
        return
      }

      // @ts-ignore
      element[oldVirtualElementAttributeName] = newVirtualElementAttributeValue;
    });

    /**
     * Once we handled all attributes that needs to be either updated or
     * removed, we need to deal with attributes that needs to be added and for
     * that we need to loop through the attributes of the new virtual element
     * instead of the old one
     */
    Object.entries(newVirtualElement.attributes).forEach(([newVirtualElementAttributeName, newVirtualElementAttributeValue]) => {
      /**
       * Same thing as before, but instead we need to grab the value of the old
       * attribute so that we can compare these two and know if we need to add
       * this one or not
       */
      const oldVirtualElementAttributeValue = oldVirtualElement.attributes[newVirtualElementAttributeName];

      /**
       * Since we can encounter attributes that we already dealt with
       * previously, we simply ensure that the old virtual element's attribute
       * is not null or undefined because if this is the case, this means that
       * we have an attribute that was not defined in the old virtual element
       * and maybe defined on the new virtual element, meaning that this is a
       * new attribute that we need to add
       */
      if (oldVirtualElementAttributeValue !== undefined && oldVirtualElementAttributeValue !== null || newVirtualElementAttributeValue === null || newVirtualElementAttributeValue === undefined) {
        return;
      }

      // temporary solution to see if this can simplify the setting of attributes
      // @ts-ignore
      element[newVirtualElementAttributeName] = newVirtualElementAttributeValue;
    });

    /**
     * Once we have dealt with attributes, we need to update the children so we
     * loop through all of the children that are common between the old and the
     * new virtual element, meaning all children that have been modified or
     * deleted
     */
    oldVirtualElement.children.forEach((oldVirtualElementChild, oldVirtualElementChildIndex) => {
      if (element === null) {
        return;
      }

      const newVirtualElementChild = newVirtualElement.children[oldVirtualElementChildIndex];
      const elementChild = element.childNodes[oldVirtualElementChildIndex] as RenderedElement;

      const patch = createPatch(oldVirtualElementChild, newVirtualElementChild);

      patch(elementChild);
    });

    /**
     * Next up, we need to figure out a clever way to deal with all of the
     * children that have been added, meaning those who are reference in the
     * new virtual element but not on the old virtual element, this is
     * something that has not been done yet, also, as this can be a potentially
     * destructive and non-efficient way of dealing with arrays of children, we
     * should allow the user to add a key in order to prevent unecessary
     * re-renders for some of the children and we should account for that case
     * (the key has changed) in here
     */
    newVirtualElement.children.slice(oldVirtualElement.children.length).forEach(newVirtualElementChild => {
      const patch = createPatch(null, newVirtualElementChild);

      patch(element);
    });
  }
};
