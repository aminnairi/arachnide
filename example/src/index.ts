import { Update, startApplication } from "@arachnide/core";
import { ul, li, div, button, input, label, p, h1, span, form } from "@arachnide/html";
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
  steps: number,
  todo: string,
  todos: string[]
}

export type ApplicationEvent
  = { name: "INCREMENT" }
  | { name: "DECREMENT" }
  | { name: "SET_STEPS", data: number }
  | { name: "ADD_TODO", data: string }
  | { name: "REMOVE_TODO", data: number }
  | { name: "SET_TODO", data: string }

startApplication<ApplicationState, ApplicationEvent>({
  root,
  initialState: () => ({
    counter: 10,
    steps: 10,
    todo: "",
    todos: [
      "Do the dishes",
      "Finish this library",
      "Buy a new coffee mug"
    ]
  }),
  onUpdate: ({ state, event }) => {
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

      case "ADD_TODO":
        return {
          ...state,
          todo: "",
          todos: [
            ...state.todos,
            event.data
          ]
        };

      case "REMOVE_TODO":
        return {
          ...state,
          todos: state.todos.filter((_, index) => {
            return index !== event.data;
          })
        };

      case "SET_TODO":
        return {
          ...state,
          todo: event.data
        };
    }
  },
  pages: {
    "/arachnide": ({ state, update, changePage }) => {
      return div({
        attributes: {
          class: "container"
        },
        content: [
          h1({
            attributes: {
              class: "center",
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
                  path: "/arachnide/about",
                  parameters: {},
                  searchParameters: {}
                });
              },
              onload: () => {

              }
            },
            content: "Go to about"
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
                  path: "/arachnide/todos",
                  parameters: {},
                  searchParameters: {}
                });
              },
              onload: () => {

              }
            },
            content: "Todos List"
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
    "/arachnide/summary": ({ state, changePage }) => {
      return div({
        attributes: {
          class: "container"
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
    },
    "/arachnide/todos": ({ state, update }) => {
      return div({
        content: [
          h1({
            content: "Todos List"
          }),
          form({
            attributes: {
              style: styles({
                display: "flex",
                "flex-direction": "row",
                gap: "20px"
              }),
              onsubmit: event => {
                event.preventDefault();

                update(() => ({
                  name: "ADD_TODO",
                  data: state.todo
                }));
              }
            },
            content: [
              input({
                attributes: {
                  style: styles({
                    width: "calc(100% - 100px)"
                  }),
                  type: "text",
                  value: state.todo,
                  oninput: oninput(value => {
                    update(() => ({
                      name: "SET_TODO",
                      data: value
                    }));
                  })
                }
              }),
              button({
                content: "Add",
                attributes: {
                  style: styles({
                    width: "100px"
                  }),
                  type: "submit"
                }
              })
            ]
          }),
          ul({
            content: state.todos.map((todo, index) => {
              return li({
                content: [
                  span({
                    content: `${index + 1}. ${todo}`
                  }),
                  button({
                    attributes: {
                      onclick: () => {
                        update(() => ({
                          name: "REMOVE_TODO",
                          data: index
                        }))
                      },
                      style: styles({
                        "margin-left": "10px"
                      })
                    },
                    content: "Remove"
                  })
                ]
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

const picoStylesheet = document.createElement("link");

picoStylesheet.href = "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css";
picoStylesheet.rel = "stylesheet";

document.head.appendChild(picoStylesheet);
