import { application } from "@arachnide/core";
import { ul, li, div, button, input, label, p } from "@arachnide/html";
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
  state: {
    counter: 10,
    steps: 10
  },
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
        children: [
          button({
            attributes: {
              onclick: () => {
                go("/arachnide/summary", {});
              }
            },
            children: ["Go to summary"]
          }),
          p({
            children: ["Get a summary of all of the below informations"]
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
        children: [
          p({
            children: [`Counter is currently at ${state.counter}`]
          }),
          p({
            children: [`Steps is currently at ${state.steps}`]
          }),
          button({
            attributes: {
              onclick: () => {
                go("/arachnide", {});
              }
            },
            children: ["Go back home"]
          })
        ]
      });
    }
  }
});
