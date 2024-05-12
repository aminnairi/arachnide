import { application } from "@arachnide/core";
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

type ApplicationState = {
  counter: number,
  steps: number
}

type ApplicationEvent
  = { type: "INCREMENT", payload: null }
  | { type: "DECREMENT", payload: null }
  | { type: "SET_STEPS", payload: number }

application<ApplicationState, ApplicationEvent>({
  root,
  state: () => ({
    counter: 10,
    steps: 10
  }),
  update: ({ state, event }) => {
    if (event.type === "INCREMENT") {
      return {
        ...state,
        counter: state.counter + state.steps
      };
    }

    if (event.type === "DECREMENT") {
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

    if (event.type === "SET_STEPS") {
      return {
        ...state,
        steps: event.payload
      };
    }

    return state;
  },
  views: {
    "/arachnide": ({ state, emit, go }) => {
      return div({
        attributes: {
          className: "container"
        },
        children: [
          h1({
            attributes: {
              className: "center",
              style: styles({
                "text-align": "center"
              })
            },
            children: ["Home"]
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
                go({
                  path: "/arachnide/summary",
                  parameters: {},
                  searchParameters: {}
                });
              }
            },
            children: ["Go to summary"]
          }),
          p({
            attributes: {
              style: styles({
                "text-align": "center"
              })
            },
            children: ["Get a summary of all of the below informations"]
          }),
          div({
            attributes: {
              className: "grid"
            },
            children: [
              button({
                attributes: {
                  className: "outline",
                  onclick: () => {
                    emit({
                      type: "INCREMENT",
                      payload: null
                    });
                  }
                },
                children: ["Increment"]
              }),
              button({
                attributes: {
                  className: "outline",
                  onclick: () => {
                    emit({
                      type: "DECREMENT",
                      payload: null
                    });
                  }
                },
                children: ["Decrement"]
              }),
            ]
          }),
          label({
            attributes: {
              for: "steps"
            },
            children: [" Steps "]
          }),
          input({
            attributes: {
              id: "steps",
              step: 10,
              type: "number",
              value: state.steps,
              oninput: oninput((value) => {
                emit({
                  type: "SET_STEPS",
                  payload: Number(value) || 100
                });
              })
            }
          }),
          ul({
            children: Array.from(Array(state.counter)).map((_, index) => {
              return li({
                attributes: {},
                children: [`Index #${index}`]
              });
            })
          })
        ]
      });
    },
    "/arachnide/summary": ({ state, go }) => {
      return div({
        attributes: {
          className: "container"
        },
        children: [
          h1({
            attributes: {
              style: styles({
                "text-align": "center"
              })
            },
            children: ["Summary"]
          }),
          p({
            attributes: {
              style: styles({
                "text-align": "center"
              })
            },
            children: [`Counter is currently at ${state.counter}`]
          }),
          p({
            attributes: {
              style: styles({
                "text-align": "center"
              })
            },
            children: [`Steps is currently at ${state.steps}`]
          }),
          button({
            attributes: {
              style: styles({
                display: "block",
                margin: "0 auto"
              }),
              onclick: () => {
                go({
                  path: "/arachnide",
                  parameters: {},
                  searchParameters: {}
                });
              }
            },
            children: ["Go back home"]
          })
        ]
      });
    }
  }
});
