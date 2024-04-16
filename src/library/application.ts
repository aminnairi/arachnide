import { ApplicationEvent, CreateApplicationOptions, VirtualElement } from ".";
import { createPatch } from "./createPatch";
import { render } from "./render";

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
