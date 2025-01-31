import { startApplication } from "@arachnide/core";
import { ul, li, div, p, h1, span, form, section, pre, code, small } from "@arachnide/html";
import { styles } from "@arachnide/css";
import { oninput } from "@arachnide/event";
import { button, input, label } from "@arachnide/silk"
import yaml from "yaml"

window.addEventListener("error", (event) => {
  alert(`Error: ${event.message}`);
});

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

export interface ComposeServiceName {
  value: string,
  error: string | null
}

export interface ComposeServiceUser {
  value: string,
  error: string | null
}

export interface ComposeServicePort {
  forwarded: number,
  internal: number,
  error: string | null
}

export interface ComposeService {
  name: ComposeServiceName,
  image?: string,
  tty?: boolean,
  stdinOpen?: boolean,
  user?: ComposeServiceUser,
  ports?: ComposeServicePort[]
}

export interface Compose {
  services: Array<ComposeService>
}

export type ApplicationState = {
  counter: number,
  steps: number,
  todo: string,
  todos: string[],
  compose: Compose
}

export type ApplicationEvent =
  | { name: "INCREMENT" }
  | { name: "DECREMENT" }
  | { name: "SET_STEPS", data: number }
  | { name: "TODOS_ADD", data: string }
  | { name: "TODOS_REMOVE", data: number }
  | { name: "TODO_SET", data: string }
  | { name: "COMPOSE_SERVICE_ADD", data: null }
  | { name: "COMPOSE_SERVICE_IMAGE_ADD", data: { index: number } }
  | { name: "COMPOSE_SERVICE_IMAGE_REMOVE", data: { index: number } }
  | { name: "COMPOSE_SERVICE_NAME_SET", data: { name: string, index: number } }
  | { name: "COMPOSE_SERVICE_IMAGE_SET", data: { image: string, index: number } }
  | { name: "COMPOSE_SERVICE_TTY_ADD", data: { index: number } }
  | { name: "COMPOSE_SERVICE_TTY_TOGGLE", data: { index: number } }
  | { name: "COMPOSE_SERVICE_TTY_REMOVE", data: { index: number } }
  | { name: "COMPOSE_SERVICE_STDIN_OPEN_TOGGLE", data: { index: number } }
  | { name: "COMPOSE_SERVICE_USER_ADD", data: { index :number } }
  | { name: "COMPOSE_SERVICE_USER_SET", data: { user: string, index :number } }
  | { name: "COMPOSE_SERVICE_USER_REMOVE", data: { index: number } }

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
    ],
    compose: {
      services: []
    }
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

      case "COMPOSE_SERVICE_ADD":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: [
              ...state.compose.services,
              {
                name: {
                  value: "",
                  error: "Name should not be empty"
                }
              }
            ]
          }
        }

      case "COMPOSE_SERVICE_NAME_SET":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              const error = event.data.name.trim().length === 0
                  ? "Name should not be empty"
                  : null

              return {
                ...service,
                name: {
                  ...service.name,
                  value: event.data.name.trim(),
                  error
                }
              }
            })
          }
        };

      case "COMPOSE_SERVICE_IMAGE_ADD":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              return {
                ...service,
                image: ""
              };
            })
          }
        };

      case "COMPOSE_SERVICE_IMAGE_REMOVE":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              } 

              return {
                ...service,
                image: undefined
              }
            })
          }
        };

      case "COMPOSE_SERVICE_IMAGE_SET":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              return {
                ...service,
                image: event.data.image
              }
            })
          }
        }

      case "COMPOSE_SERVICE_TTY_ADD":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              return {
                ...service,
                tty: true
              }
            })
          }
        };

      case "COMPOSE_SERVICE_TTY_TOGGLE":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              return {
                ...service,
                tty: !service.tty
              }
            })
          }
        }

      case "COMPOSE_SERVICE_TTY_REMOVE":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              return {
                ...service,
                tty: undefined
              }
            })
          }
        }

      case "COMPOSE_SERVICE_STDIN_OPEN_TOGGLE":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              return {
                ...service,
                stdinOpen: !service.stdinOpen
              }
            })
          }
        }

      case "COMPOSE_SERVICE_USER_ADD":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              return {
                ...service,
                user: {
                  value: "",
                  error: null
                }
              }
            })
          }
        };

      case "COMPOSE_SERVICE_USER_SET":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              const error = service.user?.error ?? null;

              return {
                ...service,
                user: {
                  error,
                  value: event.data.user
                }
              }
            })
          }
        };

      case "COMPOSE_SERVICE_USER_REMOVE":
        return {
          ...state,
          compose: {
            ...state.compose,
            services: state.compose.services.map((service, index) => {
              if (index !== event.data.index) {
                return service;
              }

              return {
                ...service,
                user: undefined
              }
            })
          }
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
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "30px"
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
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "30px"
              }),
              onclick: () => {
                changePage({
                  path: "/arachnide/todos",
                  parameters: {},
                  searchParameters: {}
                });
              },
            },
            content: "Todos List"
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
                  path: "/arachnide/compose",
                  parameters: {},
                  searchParameters: {}
                });
              },
            },
            content: "Docker Compose"
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
                flexDirection: "row",
                gap: "20px"
              }),
              onsubmit: event => {
                event.preventDefault();

                update(() => ({
                  name: "TODOS_ADD",
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
    "/arachnide/compose": ({ state, update, changePage }) => {
      return div({
        attributes: {
          style: styles({
            maxWidth: "1000px",
            margin: "0 auto"
          })
        },
        content: [
          button({
            content: "Back Home",
            attributes: {
              style: styles({
                display: "block",
                marginBottom: "10px"
              }),
              onclick: () => {
                changePage({
                  path: "/arachnide",
                  parameters: {},
                  searchParameters: {}
                });
              }
            }
          }),
          button({
            content: "Add service",
            attributes: {
              onclick: () => {
                update(() => ({
                  name: "COMPOSE_SERVICE_ADD",
                  data: null
                }))
              }
            }
          }),
          ...state.compose.services.map((service, index) => {
            return div({
              content: [
                section({
                  content: [
                    label({
                      content: "Name",
                      attributes: {
                        htmlFor: `service-name-${index}`
                      }
                    }),
                    input({
                      attributes: {
                        id: `service-name-${index}`,
                        value: service.name.value,
                        oninput: oninput((name) => {
                          update(() => ({
                            name: "COMPOSE_SERVICE_NAME_SET",
                            data: {
                              name,
                              index
                            }
                          }))
                        })
                      }
                    }),
                    service.name.error ? small({
                      content: service.name.error,
                      attributes: {
                        style: styles({
                          color: "red",
                          fontWeight: "bolder"
                        })
                      }
                    }) : ""
                  ]
                }),
                (service.image === undefined) ? button({
                  content: "Image",
                  attributes: {
                    onclick: () => {
                      update(() => ({
                        name: "COMPOSE_SERVICE_IMAGE_ADD",
                        data: {
                          index
                        }
                      }))
                    }
                  }
                }) : "",
                (service.image !== undefined) ? section({
                  content: [
                    label({
                      attributes: {
                        htmlFor: `service-image-${index}`
                      },
                      content: "Image"
                    }),
                    input({
                      attributes: {
                        id: `service-image-${index}`,
                        value: service.image,
                        oninput: oninput(image => {
                          update(() => ({
                            name: "COMPOSE_SERVICE_IMAGE_SET",
                            data: {
                              index,
                              image
                            }
                          }))
                        })
                      }
                    }),
                    button({
                      content: "Remove",
                      attributes: {
                        onclick: () => {
                          update(() => ({
                            name: "COMPOSE_SERVICE_IMAGE_REMOVE",
                            data: {
                              index
                            }
                          }))
                        }
                      }
                    })
                  ]
                }) : "",
                service.tty === undefined ? button({
                  content: "TTY",
                  attributes: {
                    onclick: () => {
                      update(() => ({
                        name: "COMPOSE_SERVICE_TTY_ADD",
                        data: {
                          index
                        }
                      }))
                    }
                  }
                }) : "",
                service.tty !== undefined ? section({
                  content: [
                    label({
                      content: "TTY",
                      attributes: {
                        htmlFor: `service-tty-${index}`
                      }
                    }),
                    input({
                      attributes: {
                        type: "checkbox",
                        checked: service.tty,
                        onclick: () => {
                          update(() => ({
                            name: "COMPOSE_SERVICE_TTY_TOGGLE",
                            data: {
                              index
                            }
                          }))
                        }
                      }
                    }),
                    button({
                      content: "Remove",
                      attributes: {
                        onclick: () => {
                          update(() => ({
                            name: "COMPOSE_SERVICE_TTY_REMOVE",
                            data: {
                              index
                            }
                          }))
                        }
                      }
                    })
                  ]
                }) : "",
                service.user === undefined ? button({
                  content: "User",
                  attributes: {
                    onclick: () => {
                      update(() => ({
                        name: "COMPOSE_SERVICE_USER_ADD",
                        data: {
                          index
                        }
                      }))
                    }
                  }
                }) : "",
                service.user !== undefined ? section({
                  content: [
                    label({
                      attributes: {
                        htmlFor: `service-user-${index}`
                      },
                      content: "User"
                    }),
                    input({
                      attributes: {
                        value: service.user.value,
                        oninput: oninput(user => {
                          update(() => ({
                            name: "COMPOSE_SERVICE_USER_SET",
                            data: {
                              index,
                              user
                            }
                          }))
                        })
                      }
                    }),
                    button({
                      content: "Remove",
                      attributes: {
                        onclick: () => {
                          update(() => ({
                            name: "COMPOSE_SERVICE_USER_REMOVE",
                            data: {
                              index
                            }
                          }))
                        }
                      }
                    })
                  ]
                }) : ""
              ]
            })
          }),
          pre({
            content: [
              code({
                content: yaml.stringify({
                  ...state.compose,
                  services: Object.fromEntries(state.compose.services.map(({ name, ...service }) => {
                    const serviceOptions = {
                      user: service.user?.value,
                      tty: service.tty,
                      stdin_open: service.stdinOpen,
                      image: service.image
                    };

                    return [
                      name.value,
                      Object.fromEntries(Object.entries(serviceOptions).filter(([, value]) => {
                        return Boolean(value)
                      }))
                    ]
                  }))
                }, null, 2)
              })
            ]
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
