import { application, div, input, button, ul, li, span } from "arachnide";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

interface AppState {
  grocery: string,
  groceries: Array<string>
}

type AppEvent
  = { type: "SET_GROCERY", payload: string }
  | { type: "ADD_GROCERY", payload: null }
  | { type: "REMOVE_GROCERY", payload: number }

application<AppState, AppEvent>({
  state: {
    grocery: "",
    groceries: [
      "milk",
      "flour",
      "eggs"
    ]
  },
  update: ({ state, event }) => {
    if (event.type === "SET_GROCERY") {
      return {
        ...state,
        grocery: event.payload
      };
    }

    if (event.type === "ADD_GROCERY") {
      return {
        ...state,
        grocery: "",
        groceries: [
          ...state.groceries,
          state.grocery
        ]
      };
    }

    if (event.type === "REMOVE_GROCERY") {
      return {
        ...state,
        groceries: state.groceries.filter((_, index) => {
          return index !== event.payload;
        })
      };
    }

    return state;
  },
  root,
  view: ({ state, emit }) => {
    console.log({ state });

    return div({
      attributes: {},
      children: [
        input({
          attributes: {
            type: "text",
            value: state.grocery,
            oninput: event => {
              if (event.target instanceof HTMLInputElement) {
                emit({
                  type: "SET_GROCERY",
                  payload: event.target.value
                });
              }
            }
          },
          children: []
        }),
        button({
          attributes: {
            onclick: () => {
              emit({
                type: "ADD_GROCERY",
                payload: null
              })
            }
          },
          children: ["Add grocery"]
        }),
        ul({
          attributes: {},
          children: state.groceries.map((grocery, index) => {
            return li({
              attributes: {},
              children: [
                span({
                  attributes: {},
                  children: [grocery]
                }),
                button({
                  attributes: {
                    onclick: () => {
                      emit({
                        type: "REMOVE_GROCERY",
                        payload: index
                      })
                    }
                  },
                  children: ["Remove"]
                })
              ]
            })
          })
        })
      ]
    });
  }
})
