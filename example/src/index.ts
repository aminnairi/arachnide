import { startApplication } from "@arachnide/core";
import { ul, li, div, button, input, label, p, h1 } from "@arachnide/html";
import { styles } from "@arachnide/css";
import { oninput } from "@arachnide/event";

window.addEventListener("error", (event) => {
  alert(`Error: ${event.message}`);
});

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

export type ApplicationState = {
  counter: number,
  steps: number
}

export type ApplicationEvent
  = { name: "INCREMENT" }
  | { name: "DECREMENT" }
  | { name: "SET_STEPS", data: number }

startApplication<ApplicationState, ApplicationEvent>({
  root,
  initialState: () => ({
    counter: 10,
    steps: 10
  }),
  onUpdate: ({ state, event }) => {
    if (event.name === "INCREMENT") {
      return {
        ...state,
        counter: state.counter + state.steps
      };
    }

    if (event.name === "DECREMENT") {
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
    }

    if (event.name === "SET_STEPS") {
      return {
        ...state,
        steps: event.data
      };
    }

    return state;
  },
  pages: {
    "/arachnide": ({ state, update, changePage }) => {
      return div({
        attributes: {
          className: "container"
        },
        content: [
          h1({
            attributes: {
              className: "center",
              style: styles({
                "text-align": "center"
              })
            },
            content: "Home"
          }),
          button({
            attributes: {
              style: styles({
                display: "block",
                "margin-left": "auto",
                "margin-right": "auto",
                "margin-bottom": "30px"
              }),
              onclick: () => {
                changePage({
                  path: "/arachnide/summary",
                  parameters: {},
                  searchParameters: {}
                });
              }
            },
            content: "Go to summary"
          }),
          p({
            attributes: {
              style: styles({
                "text-align": "center"
              })
            },
            content: "Get a summary of all of the below informations"
          }),
          div({
            attributes: {
              className: "grid"
            },
            content: [
              button({
                attributes: {
                  className: "outline",
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
                  className: "outline",
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
              htmlFor: "steps"
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
    "/arachnide/summary": ({ state, changePage }) => {
      return div({
        attributes: {
          className: "container"
        },
        content: [
          h1({
            attributes: {
              style: styles({
                "text-align": "center"
              })
            },
            content: "Summary"
          }),
          p({
            attributes: {
              style: styles({
                "text-align": "center"
              })
            },
            content: `Counter is currently at ${state.counter}`
          }),
          p({
            attributes: {
              style: styles({
                "text-align": "center"
              })
            },
            content: `Steps is currently at ${state.steps}`
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

const picoStylesheet = document.createElement("link");

picoStylesheet.href = "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css";
picoStylesheet.rel = "stylesheet";

document.head.appendChild(picoStylesheet);
