import { application, div, input, button, ul, li, span, form } from "arachnide";

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
  | { type: "MOVE_GROCERY_UP", payload: number }
  | { type: "MOVE_GROCERY_DOWN", payload: number }

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
        groceries: state.groceries.filter((_, groceryIndex) => {
          return groceryIndex !== event.payload;
        })
      };
    }

    if (event.type === "MOVE_GROCERY_UP") {
      if (event.payload === 0) {
        return state;
      }

      return {
        ...state,
        groceries: state.groceries.map((grocery, groceryIndex) => {
          if (event.payload === groceryIndex) {
            return state.groceries[event.payload - 1];
          }

          if (event.payload - 1 === groceryIndex) {
            return state.groceries[event.payload];
          }

          return grocery;

        })
      };
    }

    if (event.type === "MOVE_GROCERY_DOWN") {
      if (event.payload === state.groceries.length - 1) {
        return state;
      }

      return {
        ...state,
        groceries: state.groceries.map((grocery, groceryIndex) => {
          if (event.payload === groceryIndex) {
            return state.groceries[event.payload + 1];
          }

          if (event.payload + 1 === groceryIndex) {
            return state.groceries[event.payload];
          }

          return grocery;
        })
      };
    }

    return state;
  },
  root,
  view: ({ state, emit }) => {
    return div({
      attributes: {},
      children: [
        form({
          attributes: {
            onsubmit: (event) => {
              if (event instanceof SubmitEvent) {
                event.preventDefault();
                emit({
                  type: "ADD_GROCERY",
                  payload: null
                })
              }
            }
          },
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
                type: "submit"
              },
              children: ["Add grocery"]
            }),
          ]
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
                }),
                button({
                  attributes: {
                    onclick: () => {
                      emit({
                        type: "MOVE_GROCERY_UP",
                        payload: index
                      })
                    }
                  },
                  children: ["Up"]
                }),
                button({
                  attributes: {
                    onclick: () => {
                      emit({
                        type: "MOVE_GROCERY_DOWN",
                        payload: index
                      })
                    }
                  },
                  children: ["Down"]
                })
              ]
            })
          })
        })
      ]
    });
  }
});
