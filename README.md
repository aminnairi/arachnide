# arachnide

Library for building Web applications

## Installation

Coming soon...

## Usage

```typescript
import { application, div, button, p } from "arachnide";

type ApplicationState = number

type ApplicationEvent
  = { type: "INCREMENT", payload: null }
  | { type: "RESET", payload: null }

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element not found");
}

const { emit } = application<ApplicationState, ApplicationEvent>({
  root,
  state: 0,
  update: ({ state, event }) => {
    if (event.type === "INCREMENT") {
      return state + 1;
    }

    if (event.type === "RESET") {
      return 0;
    }

    return state;
  },
  view: ({ state, emit }) => div({
    attributes: {},
    children: [
      button({
        attributes: {
          onclick: () => emit({
            type: "INCREMENT",
            payload: null
          })
        },
        children: ["Increment"]
      })
      button({
        attributes: {
          onclick: () => emit({
            type: "RESET",
            payload: null
          })
        },
        children: ["Reset"]
      }),
      p({
        attributes: {},
        children: [`Counter is at ${state}`]
      })
    ]
  })
});

setInterval(() => {
  emit({
    type: "INCREMENT",
    payload: null
  });
}, 5000);
```

## License

See [`LICENSE`](./LICENSE).
