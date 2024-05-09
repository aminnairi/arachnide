# arachnide

Library for building Web applications

## Features

- Build web application in JavaScript without directly manipulating the DOM yourself
- Handle and share state between elements without using an external Library
- Easily add routing without having to install anything more
- Lots of helpers for adding html, css and events to your Web applications
- Functional style to keep things simple and expressive

## Installation

Coming soon...

## Usage

```typescript
import { application } from "@arachnide/core";
import { div, button, span } from "@arachnide/html";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

application({
  root,
  state: {
    counter: 15
  },
  update: ({ state, event }) => {
    if (event.type === "INCREMENT") {
      return {
        ...state,
        counter: state.counter + 1
      };
    }

    if (event.type === "DECREMENT") {
      return {
        ...state,
        counter: state.counter - 1
      };
    }

    return state;
  },
  views: {
    "/": ({ state, emit }) => {
      return div({
        attributes: {},
        children: [
          button({
            attributes: {
              onclick: () => {
                emit({
                  type: "DECREMENT",
                  payload: null
                });
              }
            },
            children: ["Decrement"]
          }),
          span({
            attributes: {},
            children: [state.counter]
          }),
          button({
            attributes: {
              onclick: () => {
                emit({
                  type: "INCREMENT",
                  payload: null
                });
              }
            },
            children: ["Increment"]
          }),
        ]
      });
    }
  }
});
```

## License

See [`LICENSE`](./LICENSE).

## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Security

See [`SECURITY.md`](./SECURITY.md).
