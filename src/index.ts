import { application } from "./library/application";
import { button } from "./library/elements/button";
import { div } from "./library/elements/div";
import { input } from "./library/elements/input";
import { p } from "./library/elements/p";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

type MyApplicationEvent =
  | { type: "INCREMENT", payload: null }
  | { type: "DECREMENT", payload: null }
  | { type: "SET", payload: number }
  | { type: "SET_STEPS", payload: number }

type MyApplicationState = {
  counter: number,
  steps: number
}

application<MyApplicationState, MyApplicationEvent>({
  state: {
    counter: 0,
    steps: 1
  },
  root: rootElement,
  update: ({ state, event }) => {
    if (event.type === "INCREMENT") {
      return {
        ...state,
        counter: state.counter + state.steps
      };
    }

    if (event.type === "DECREMENT") {
      return {
        ...state,
        counter: state.counter - state.steps
      };
    }

    if (event.type === "SET") {
      return {
        ...state,
        counter: event.payload
      }
    }

    if (event.type === "SET_STEPS") {
      return {
        ...state,
        steps: event.payload
      }
    }

    return state;
  },
  view: ({ state, emit }) => {
    return div({
      attributes: {},
      children: [
        button({
          attributes: {
            onclick: () => {
              emit({
                type: "INCREMENT",
                payload: null
              })
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
              })
            }
          },
          children: ["Decrement"]
        }),
        button({
          attributes: {
            onclick: () => {
              emit({
                type: "SET",
                payload: 0
              })
            }
          },
          children: ["Reset"]
        }),
        input({
          attributes: {
            type: "number",
            min: "1",
            max: "10",
            step: "1",
            value: String(state.steps),
            oninput: (event) => {
              if (event.target instanceof HTMLInputElement) {
                emit({
                  type: "SET_STEPS",
                  payload: Number(event.target.value) || 1
                })
              }
            }
          },
          children: ["Reset"]
        }),
        p({
          attributes: {},
          children: [String(state.counter)]
        })
      ]
    });
  }
});
