# @arachnide/core

## Requirements

- [Node](https://nodejs.org)
- [NPM](https://npmjs.com)

## Initialisation

```bash
npm create vite -- --template vanilla-ts my-arachnide-project
cd my-arachnide-project
npm install
```

## Installation

```bash
npm install --save --save-exact @arachnide/core
```

## Initialization

```typescript
import { startApplication } from "@arachnide/core";
import { ul, li, div, p, h1 } from "@arachnide/html";
import { styles } from "@arachnide/css";
import { oninput } from "@arachnide/event";
import { button, input, label } from "@arachnide/silk"

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}
export type ApplicationState = {
  counter: number
}

export type ApplicationEvent =
  | { name: "INCREMENT" }
  | { name: "DECREMENT" }
  | { name: "SET_STEPS", data: number }

startApplication<ApplicationState, ApplicationEvent>({
  root,
  initialState: () => ({
    counter: 10,
  }),
  onUpdate: ({ state, event }): ApplicationState => {
    switch (event.name) {
      case "INCREMENT":
        return {
          ...state,
          counter: state.counter + state.steps
        };

      case "DECREMENT":
        const newCounter = state.counter - state.steps;

        if (newCounter < 0) {
          return {
            ...state,
            counter: 0
          };
        }

        return {
          ...state,
          counter: state.counter - state.steps
        };

      case "SET_STEPS":
        return {
          ...state,
          steps: event.data
        };
    }
  },
  pages: {
    "/": ({ state, update, changePage }) => {
      return div({
        attributes: {
          class: "container"
        },
        content: [
          h1({
            attributes: {
              class: "center",
              style: styles({
                textAlign: "center"
              })
            },
            content: "Home"
          }),
          div({
            attributes: {
              class: "grid"
            },
            content: [
              button({
                attributes: {
                  class: "outline",
                  onclick: () => {
                    update(() => ({
                      name: "INCREMENT"
                    }));
                  }
                },
                content: "Increment"
              }),
              button({
                attributes: {
                  class: "outline",
                  onclick: () => {
                    update(() => ({
                      name: "DECREMENT"
                    }));
                  }
                },
                content: "Decrement"
              }),
            ]
          }),
          label({
            attributes: {
              for: "steps"
            },
            content: " Steps "
          }),
          input({
            attributes: {
              id: "steps",
              step: 10,
              type: "number",
              value: state.steps,
              oninput: oninput((value) => {
                update(() => ({
                  name: "SET_STEPS",
                  data: Number(value) || 100
                }));
              })
            }
          }),
          ul({
            content: Array.from(Array(state.counter)).map((_, index) => {
              return li({
                attributes: {},
                content: `Index #${index}`
              });
            })
          })
        ]
      });
    },
    "*": ({ changePage }) => {
      return div({
        content: [
          h1({
            content: "Page not found"
          }),
          button({
            attributes: {
              style: styles({
                display: "block",
                margin: "0 auto"
              }),
              onclick: () => {
                changePage({
                  path: "/arachnide",
                  parameters: {},
                  searchParameters: {}
                });
              }
            },
            content: "Go back home"
          })
        ]
      });
    }
  }
});
```

## Start

```bash
npm run dev
```

## Example

See [`example`](https://github.com/aminnairi/example).
