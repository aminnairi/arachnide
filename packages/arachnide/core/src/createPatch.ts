import { VirtualElement } from "./types";
import { render } from "./render";
import { isVirtualStringElement } from "./isVirtualStringElement";
import { isVirtualNumberElement } from "./isVirtualNumberElement";
import { isVirtualBooleanElement } from "./isVirtualBooleanElement";
import { isVirtualNullElement } from "./isVirtualNullElement";
import { isVirtualUndefinedElement } from "./isVirtualUndefinedElement";
import { isElement } from "./isElement";
import { VirtualHTMLElement } from "./VirtualHTMLElement";

/**
 * Create a function that will update the DOM tree based on the differences
 * between two virtual elements
 */
export const createPatch = (oldVirtualElement: VirtualElement, newVirtualElement: VirtualElement) => {
  /**
   * This is the function that will be used to patch any DOM tree element
   */
  return (element: Element | ChildNode) => {
    if (isVirtualNullElement(oldVirtualElement) || isVirtualUndefinedElement(oldVirtualElement)) {
      if (isVirtualNullElement(newVirtualElement) || isVirtualUndefinedElement(newVirtualElement)) {
        return;
      }

      const newElement = render(newVirtualElement);

      if (newElement === null) {
        return;
      }

      element.appendChild(newElement);

      if (newVirtualElement instanceof VirtualHTMLElement) {
        newVirtualElement.whenCreated();

        if (isElement(newElement)) {
          newVirtualElement.reference.target = newElement;
        }
      }

      return;
    }

    /**
     * if the old virtual element is null, undefined or a string, this means
     * that we can simply compare the old and new virtual elements using a
     * simple comparison
     */
    if (isVirtualStringElement(oldVirtualElement) || isVirtualNumberElement(oldVirtualElement) || isVirtualBooleanElement(oldVirtualElement)) {
      /**
       * If the new virtual element is different from the old virtual element
       */
      if (Object.is(oldVirtualElement, newVirtualElement)) {
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

      if (newVirtualElement instanceof VirtualHTMLElement) {
        newVirtualElement.whenCreated();

        if (isElement(newElement)) {
          newVirtualElement.reference.target = newElement;
        }
      }

      /**
       * We can stop here since null, undefined or a string does not have
       * attributes nor children
       */
      return;
    }

    if (isVirtualNullElement(newVirtualElement) || isVirtualUndefinedElement(newVirtualElement)) {
      if (isVirtualNullElement(oldVirtualElement) || isVirtualUndefinedElement(oldVirtualElement)) {
        return;
      }

      element.remove();

      oldVirtualElement.whenDestroyed();

      return;
    }

    /**
     * We can do the same thing for the new virtual DOM as this is a check that
     * we need to do in order to ensure that in the next branches, the old and
     * new virtual elements are objects, which will simplify the process of
     * diffing those two
     */
    if (isVirtualStringElement(newVirtualElement) || isVirtualNumberElement(newVirtualElement) || isVirtualBooleanElement(newVirtualElement)) {
      /**
       * If the new virtual element is different from the old virtual element
       */
      if (Object.is(oldVirtualElement, newVirtualElement)) {
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

      if (oldVirtualElement instanceof VirtualHTMLElement) {
        oldVirtualElement.whenDestroyed();
      }

      /**
       * We can stop here since null, undefined or a string does not have
       * attributes nor children
       */
      return;
    }

    if (!(oldVirtualElement instanceof VirtualHTMLElement)) {
      throw new Error("old virtual element from previous render is not an instance of VirtualHTMLElement");
    }

    if (!(newVirtualElement instanceof VirtualHTMLElement)) {
      throw new Error("old virtual element from previous render is not an instance of VirtualHTMLElement");
    }

    /**
     * Reaching this part of the script, we know for sure (if the user uses
     * TypeScript) that the old and new virtual elements are both objects, so
     * we can start to compare the names of those two elements
     */
    if (oldVirtualElement.name !== newVirtualElement.name) {
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

      if (isElement(newElement)) {
        newVirtualElement.reference.target = newElement;
      }

      oldVirtualElement.whenDestroyed();

      newVirtualElement.whenCreated();

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
        if (typeof oldVirtualElementAttributeValue !== "function" && typeof oldVirtualElement.attributes["xmlns"] === "string") {
          if (!isElement(element)) {
            throw new Error("Tried to remove an attribute on an element that is not an instance of the Element class");
          }

          element.removeAttribute(oldVirtualElementAttributeName);

          return;
        }

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


      if (typeof newVirtualElementAttributeValue !== "function" && typeof newVirtualElement.attributes["xmlns"] === "string") {
        if (!isElement(element)) {
          throw new Error("Tried to update an attribute on an element that is not an instance of the Element class");
        }

        element.setAttribute(oldVirtualElementAttributeName, String(newVirtualElementAttributeValue));

        return;
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

      if (typeof newVirtualElementAttributeValue !== "function" && typeof newVirtualElement.attributes["xmlns"] === "string") {
        if (!isElement(element)) {
          throw new Error("Tried to add an attribute on an element that is not an instance of the Element class");
        }

        element.setAttribute(newVirtualElementAttributeName, String(newVirtualElementAttributeValue));

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
    oldVirtualElement.content.forEach((oldVirtualElementChild, oldVirtualElementChildIndex) => {
      if (element === null) {
        throw new Error("Invalid DOM node found. Has the DOM been manually updated?");
      }

      const newVirtualElementChild = newVirtualElement.content[oldVirtualElementChildIndex];
      const elementChild = element.childNodes[oldVirtualElementChildIndex];

      const patch = createPatch(oldVirtualElementChild, newVirtualElementChild);

      if (elementChild === undefined) {
        throw new Error("Invalid DOM node found. Has the DOM been manually updated?");
      }

      window.queueMicrotask(() => {
        patch(elementChild);
      });
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
    newVirtualElement.content.slice(oldVirtualElement.content.length).forEach(newVirtualElementChild => {
      const patch = createPatch(null, newVirtualElementChild);

      window.queueMicrotask(() => {
        patch(element);
      });
    });
  }
};
