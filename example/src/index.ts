import { application, button, div, h1, p, table, tbody, td, tr } from "arachnide";
import { z } from "zod";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const userSchema = z.object({
  id: z.number(),
  email: z.string().email()
});

const usersSchema = z.array(userSchema);

type User = z.infer<typeof userSchema>;

interface ApplicationState {
  users: Array<User>,
  loading: boolean,
  error: null | string
}

type ApplicationEvent
  = { type: "SET_FETCHING", payload: null }
  | { type: "SET_USERS", payload: Array<User> }
  | { type: "SET_LOADING", payload: boolean }
  | { type: "SET_ERROR", payload: string | null }

application<ApplicationState, ApplicationEvent>({
  root,
  state: {
    loading: false,
    error: null,
    users: []
  },
  update: ({ state, event }) => {
    if (event.type === "SET_FETCHING") {
      return {
        ...state,
        error: null,
        loading: true
      };
    }

    if (event.type === "SET_USERS") {
      return {
        ...state,
        users: event.payload
      };
    }

    if (event.type === "SET_LOADING") {
      return {
        ...state,
        loading: event.payload
      };
    }

    if (event.type === "SET_ERROR") {
      return {
        ...state,
        error: event.payload
      };
    }

    return state;
  },
  view: ({ state, emit }) => {
    const fetchUsers = async () => {
      try {
        emit({
          type: "SET_FETCHING",
          payload: null
        });

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        const users = usersSchema.parse(json);

        emit({
          type: "SET_USERS",
          payload: users
        });
      } catch (error) {
        emit({
          type: "SET_ERROR",
          payload: String(error)
        });
      } finally {
        emit({
          type: "SET_LOADING",
          payload: false
        });
      }
    };

    if (state.loading) {
      return div({
        attributes: {},
        children: [
          h1({
            attributes: {},
            children: ["Loading"]
          }),
          p({
            attributes: {},
            children: ["Users list loading, please wait..."]
          })
        ]
      });
    }

    if (state.error) {
      return div({
        attributes: {},
        children: [
          h1({
            attributes: {},
            children: ["Error"]
          }),
          p({
            attributes: {},
            children: ["An error occurred, please try again later"]
          }),
          button({
            attributes: {
              onclick: fetchUsers
            },
            children: ["Refresh"]
          })
        ]
      });
    }

    if (state.users.length === 0) {
      return div({
        attributes: {},
        children: [
          p({
            attributes: {},
            children: ["No users in this list."]
          }),
          button({
            attributes: {
              onclick: fetchUsers
            },
            children: ["Refresh"]
          })
        ]
      });
    }

    return div({
      attributes: {},
      children: [
        button({
          attributes: {
            onclick: fetchUsers
          },
          children: ["Refresh"]
        }),
        table({
          attributes: {},
          children: [
            tbody({
              attributes: {},
              children: state.users.map(user => {
                return tr({
                  attributes: {},
                  children: [
                    td({
                      attributes: {},
                      children: [user.id]
                    }),
                    td({
                      attributes: {},
                      children: [user.email]
                    })
                  ]
                })
              })
            })
          ]
        })
      ]
    });
  }
});
