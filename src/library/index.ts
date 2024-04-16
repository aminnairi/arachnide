export type VirtualStringElement = string;

/**
 * An attribute can either be some scalar value (string, boolean, number, ...) that will be parsed as string
 * Or it can be a function in case of an event listener
 */
type VirtualObjectElementAttributes = {
  [Key in string]: string | ((event: Event) => void)
}

export type VirtualObjectElement = {
  name: string,
  attributes: VirtualObjectElementAttributes,
  children: Array<string | VirtualObjectElement>
}

export type VirtualNullElement = null;

export type VirtualElement = VirtualStringElement | VirtualObjectElement | VirtualNullElement;

export type ApplicationEvent = {
  type: string,
  payload: unknown
}

export type Emitter<ApplicationEvent> = (options: ApplicationEvent) => void;

export type ViewOptions<State, ApplicationEvent> = {
  state: State,
  emit: Emitter<ApplicationEvent>
}

export type View<State, ApplicationEvent> = (options: ViewOptions<State, ApplicationEvent>) => VirtualElement

export type UpdateOptions<ApplicationEvent, State> = {
  event: ApplicationEvent,
  state: State
}

export type Update<ApplicationEvent, State> = (options: UpdateOptions<ApplicationEvent, State>) => State

export type CreateApplicationOptions<State, EventName> = {
  view: View<State, EventName>,
  root: Element,
  state: State,
  update: Update<EventName, State>
}

export const element = (virtualObjectElement: VirtualObjectElement): VirtualObjectElement => {
  return virtualObjectElement;
};

export const div = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "div",
    attributes,
    children
  }
};

export const button = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "button",
    attributes,
    children
  };
};

export const p = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "p",
    attributes,
    children
  };
};

export const input = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "input",
    attributes,
    children
  };
};

export const render = (virtualElement: VirtualElement): Element | Text => {
  if (virtualElement === null) {
    return document.createTextNode("");
  }

  if (typeof virtualElement === "string") {
    return document.createTextNode(virtualElement);
  }

  const element = document.createElement(virtualElement.name);

  Object.entries(virtualElement.attributes).forEach(([attributeName, attributeValue]) => {
    if (attributeName.startsWith("on") && typeof attributeValue === "function") {
      element.addEventListener(attributeName.slice(2), event => attributeValue(event));
      return;
    }

    element.setAttribute(attributeName, String(attributeValue));
  });

  virtualElement.children.forEach(child => {
    element.appendChild(render(child));
  });

  return element;
};

export const createPatch = (oldVirtualElement: VirtualElement, newVirtualElement: VirtualElement) => {
  return (element: Element) => {
    if (oldVirtualElement === null) {
      element.replaceWith(render(newVirtualElement));
      return;
    }

    if (typeof oldVirtualElement === "string") {
      if (typeof newVirtualElement === "string") {
        if (oldVirtualElement === newVirtualElement) {
          return;
        }
      }

      element.replaceWith(render(newVirtualElement));
      return;
    }

    if (newVirtualElement === null || typeof newVirtualElement === "string") {
      element.replaceWith(render(newVirtualElement));
      return;
    }

    if (oldVirtualElement.name !== newVirtualElement.name) {
      element.replaceWith(render(newVirtualElement));
      return;
    }

    oldVirtualElement.children.forEach((oldVirtualElementChild, oldVirtualElementChildIndex) => {
      const newVirtualElementChild = newVirtualElement.children[oldVirtualElementChildIndex];
      const elementChild = element.childNodes.item(oldVirtualElementChildIndex);

      if (elementChild === null) {
        throw new Error("Append child not implemented");
      }

      const patch = createPatch(oldVirtualElementChild, newVirtualElementChild);

      patch(elementChild as Element);
    });
  }
};

export const application = <State, GenericEvent extends ApplicationEvent>({ view, root, state, update }: CreateApplicationOptions<State, GenericEvent>) => {
  let oldVirtualElement: VirtualElement;

  const emitIdentifier = window.crypto.randomUUID();

  const emit = ({ type, payload }: GenericEvent) => {
    window.dispatchEvent(new CustomEvent(emitIdentifier, {
      detail: {
        type,
        payload
      }
    }));
  };

  window.addEventListener(emitIdentifier, ({ detail }: CustomEventInit) => {
    state = update({
      event: detail,
      state
    });

    const newVirtualElement = view({
      state,
      emit
    });

    const patch = createPatch(oldVirtualElement, newVirtualElement);

    oldVirtualElement = newVirtualElement;

    patch(root.firstChild as Element);
  });

  const virtualElement = view({
    state,
    emit
  });

  const element = render(virtualElement);

  oldVirtualElement = virtualElement;

  root.appendChild(element);

  return {
    emit
  };
};
