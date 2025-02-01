import { startApplication } from "@arachnide/core";
import { ul, li, div, p, h1, span, form, a } from "@arachnide/html";
import { styles } from "@arachnide/css";
import { oninput } from "@arachnide/event";
import { button, input, label } from "@arachnide/silk"
// import yaml from "yaml"

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
  todos: string[],
}

export type ApplicationEvent =
  | { name: "INCREMENT" }
  | { name: "DECREMENT" }
  | { name: "SET_STEPS", data: number }
  | { name: "TODOS_ADD", data: string }
  | { name: "TODOS_REMOVE", data: number }
  | { name: "TODO_SET", data: string }

export enum ApplicationPath {
  NotFound = "*",
  Home = "/arachnide",
  Summary = "/arachnide/summary",
  About = "/arachnide/about",
  Todos = "/arachnide/todos"
}

startApplication<ApplicationState, ApplicationEvent, ApplicationPath>({
  root,
  initialState: () => ({
    counter: 10,
    steps: 10,
    todo: "",
    todos: [
      "Do the dishes",
      "Finish this library",
      "Buy a new coffee mug"
    ],
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

      case "TODOS_ADD":
        return {
          ...state,
          todo: "",
          todos: [
            ...state.todos,
            event.data
          ]
        };

      case "TODOS_REMOVE":
        return {
          ...state,
          todos: state.todos.filter((_, index) => {
            return index !== event.data;
          })
        };

      case "TODO_SET":
        return {
          ...state,
          todo: event.data
        };
    }
  },
  pages: {
    [ApplicationPath.Home]: ({ state, update, changePage }) => {
      return div({
        attributes: {
          className: "container"
        },
        content: [
          h1({
            attributes: {
              className: "center",
              style: styles({
                textAlign: "center"
              })
            },
            content: "Home"
          }),
          button({
            attributes: {
              style: styles({
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "30px"
              }),
              onclick: () => {
                changePage({
                  path: ApplicationPath.About,
                  parameters: {},
                  searchParameters: {}
                });
              },
            },
            content: "Go to about"
          }),
          button({
            attributes: {
              style: styles({
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "30px"
              }),
              onclick: () => {
                changePage({
                  path: ApplicationPath.Summary,
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
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "30px"
              }),
              onclick: () => {
                changePage({
                  path: ApplicationPath.Todos,
                  parameters: {},
                  searchParameters: {}
                });
              },
            },
            content: "Todos List"
          }),
          p({
            attributes: {
              style: styles({
                textAlign: "center"
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
    [ApplicationPath.Summary]: ({ state, changePage }) => {
      return div({
        attributes: {
          className: "container"
        },
        content: [
          h1({
            attributes: {
              style: styles({
                textAlgin: "center"
              })
            },
            content: "Summary"
          }),
          p({
            attributes: {
              style: styles({
                textAlign: "center"
              })
            },
            content: `Counter is currently at ${state.counter}`
          }),
          p({
            attributes: {
              style: styles({
                textAlign: "center"
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
                  path: ApplicationPath.Home,
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
    [ApplicationPath.Todos]: ({ state, update }) => {
      return div({
        content: [
          a({
            attributes: {
              download: "index.txt",
              referrerpolicy: "no-referrer",
            },
            content: "Hello"
          }),
          h1({
            content: "Todos List"
          }),
          form({
            attributes: {
              style: styles({
                display: "flex",
                flexDirection: "row",
                gap: "20px"
              }),
              onsubmit: (event) => {
                event.preventDefault()
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
                      name: "TODO_SET",
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
                          name: "TODOS_REMOVE",
                          data: index
                        }))
                      },
                      style: styles({
                        marginLeft: "10px"
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
    [ApplicationPath.About]: () => {
      return div({
        content: [
          h1({
            content: "About this app"
          })
        ]
      });
    },
    [ApplicationPath.NotFound]: ({ changePage }) => {
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
                  path: ApplicationPath.Home,
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
