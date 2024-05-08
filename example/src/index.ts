import { application } from "@arachnide/core";
import { div, button, span } from "@arachnide/html";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

interface ApplicationState {
  counter: number
}

type ApplicationEvent
  = { type: "INCREMENT", payload: null }
  | { type: "DECREMENT", payload: null }

application<ApplicationState, ApplicationEvent>({
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
    "/arachnide/users": ({ go }) => {
      return button({
        attributes: {
          onclick: () => {
            go("/arachnide", {})
          }
        },
        children: ["Go back"]
      });
    },
    "/arachnide": ({ state, emit, go }) => {
      return div({
        attributes: {},
        children: [
          button({
            attributes: {
              onclick: () => {
                go("/arachnide/users", {})
              }
            },
            children: ["Go to users"]
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
