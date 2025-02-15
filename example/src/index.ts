import { startApplication } from "@arachnide/core";
import { div, h1, p } from "@arachnide/html";
import { styles } from "@arachnide/css";
import { button } from "@arachnide/silk"

window.addEventListener("error", (event) => {
  alert(`Error: ${event.message}`);
});

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

// STATE

type Started = {
  type: "GAME_STARTED",
  word: string,
  matrix: string[][]
  row: number,
  column: number,
}

type Won = {
  type: "GAME_WON",
  attempts: number
}

type Lost = {
  type: "GAME_LOST",
  word: string
}

type ApplicationState = {
  game: Started | Won | Lost
}

// EVENTS

type AddLetter = {
  name: "ADD_LETTER",
  data: {
    letter: string,
  },
}

type RemoveLetter = {
  name: "REMOVE_LETTER"
}

type NextRow = {
  name: "NEXT_ROW"
}

type Restart = {
  name: "RESTART"
}

export type ApplicationEvent =
  | AddLetter
  | RemoveLetter
  | NextRow
  | Restart

// ROUTING

export enum ApplicationPath {
  NotFound = "*",
  Home = "/arachnide",
}

// UTILITIES

const getBorderColor = (word: string, gameRow: number, gameColumn: number, row: number, column: number, letter: string) => {
  if (row >= gameRow) {
    if (gameRow === row && gameColumn === column) {
      return "3px solid black";
    }

    return "3px solid lightgrey";
  }

  const letterAtSimilarWordIndex = word.at(column) ?? "";

  if (letterAtSimilarWordIndex === letter) {
    return "3px solid green";
  }

  const letterIsInWord = word.split("").some(character => {
    return character === letter;
  });

  if (letterIsInWord) {
    return "3px solid orange";
  }

  return "3px solid lightgrey";
}

// APPLICATION

const getInitialState = (): ApplicationState => {
  const availableWords = [
    "APPLE",
    "BEACH",
    "CANDY",
    "DANCE",
    "EAGLE",
    "FLAME",
    "GRAPE",
    "HOUSE",
    "IMAGE",
    "JOKER",
    "KNOCK",
    "LEMON",
    "MANGO",
    "NIGHT",
    "OCEAN",
    "PIANO",
    "QUEEN",
    "RIVER",
    "STORM",
    "TIGER",
    "UNION",
    "VIVID",
    "WRIST",
    "XENON",
    "YOUNG",
    "ZEBRA",
    "BRAVE",
    "CHESS",
    "DWARF",
    "EMBER",
    "FROST",
    "GLOBE",
    "HASTE",
    "INBOX",
    "JOLLY",
    "KARMA",
    "LUNAR",
    "MIRTH",
    "NOBLE",
    "OPTIC",
    "PRISM",
    "QUILT",
    "RIDER",
    "SIREN",
    "TRUCE",
    "UPSET",
    "VAULT",
    "WHALE",
    "YEAST",
    "ZESTY",
  ];
  const word = [...availableWords].sort(() => Math.random() - 0.5).at(0) ?? "apple";

  return {
    game: {
      type: "GAME_STARTED",
      word,
      row: 0,
      column: 0,
      matrix: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ]
    }
  }
}

startApplication<ApplicationState, ApplicationEvent, ApplicationPath>({
  root,
  initialState: getInitialState,
  onUpdate: ({ state, event }): ApplicationState => {
    if (event.name === "ADD_LETTER") {
      if (state.game.type !== "GAME_STARTED") {
        return state;
      }

      const gameRow = state.game.row;
      const gameColumn = state.game.column;
      const gameMatrix = state.game.matrix;

      return {
        ...state,
        game: {
          ...state.game,
          column: gameColumn >= 4 ? 4 : gameColumn + 1,
          matrix: gameMatrix.map((row, rowIndex) => {
            if (rowIndex !== gameRow) {
              return row;
            }

            return row.map((column, columnIndex) => {
              if (gameColumn !== columnIndex) {
                return column;
              }

              return event.data.letter;
            });
          }),
        }
      }
    }

    if (event.name === "REMOVE_LETTER") {
      if (state.game.type !== "GAME_STARTED") {
        return state;
      }

      const columnIndexToEmpty = state.game.matrix[state.game.row][state.game.column] === "" ? state.game.column - 1 : state.game.column;
      const rowIndexToEmpty = state.game.row;

      return {
        ...state,
        game: {
          ...state.game,
          column: state.game.column <= 0 ? 0 : state.game.column - 1,
          matrix: state.game.matrix.map((row, rowIndex) => {
            if (rowIndex !== rowIndexToEmpty) {
              return row;
            }

            return row.map((column, columnIndex) => {
              if (columnIndex !== columnIndexToEmpty) {
                return column;
              }

              return "";
            });
          }),
        },
      }
    }

    if (event.name === "NEXT_ROW") {
      if (state.game.type !== "GAME_STARTED") {
        return state;
      }

      const row = state.game.matrix[state.game.row];

      const rowFilled = row.every(column => {
        return column !== ""
      });

      if (rowFilled) {
        const wordAttempted = row.join("");

        if (wordAttempted === state.game.word) {
          return {
            ...state,
            game: {
              type: "GAME_WON",
              attempts: state.game.row
            }
          }
        }
      }

      const allRowsFilled = state.game.matrix.every(row => {
        return row.every(column => {
          return column !== "";
        });
      });

      if (allRowsFilled) {
        return {
          ...state,
          game: {
            type: "GAME_LOST",
            word: state.game.word
          }
        };
      }

      const shouldGoToNextRow = state.game.row < 5 && state.game.matrix[state.game.row].every(column => column !== "");

      return {
        ...state,
        game: {
          ...state.game,
          row: shouldGoToNextRow ? state.game.row + 1 : state.game.row,
          column: shouldGoToNextRow ? 0 : state.game.column,
        }
      }
    }

    if (event.name === "RESTART") {
      return getInitialState();
    }

    return state;
  },
  pages: {
    [ApplicationPath.Home]: ({ state, update, changePage }) => {
      if (state.game.type === "GAME_STARTED") {
        const keyboard = [
          ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "BACK"],
          ["A", "S", "D", "F", "G", "H", "J", "K", "L", "ENTR"],
          ["Z", "X", "C", "V", "B", "N", "M", "N"],
        ];

        const onKeyDown = (event: KeyboardEvent) => {
          const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          const letter = event.key.toUpperCase();

          if (letter === "BACKSPACE" || letter === "BACK") {
            return update(() => ({
              name: "REMOVE_LETTER"
            }));
          }

          if (letter === "ENTER" || letter === "ENTR") {
            return update(() => ({
              name: "NEXT_ROW"
            }));
          }

          if (!alphabet.includes(letter)) {
            return;
          }

          update(() => ({
            name: "ADD_LETTER",
            data: {
              letter,
            }
          }));
        };

        const gameRow = state.game.row;
        const gameColumn = state.game.column;
        const gameMatrix = state.game.matrix;
        const gameWord = state.game.word;

        return div({
          whenCreated: () => {
            window.addEventListener("keydown", onKeyDown);
          },
          whenDestroyed: () => {
            window.removeEventListener("keydown", onKeyDown);
          },
          attributes: {
            style: styles({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "5px",
            }),
          },
          content: [
            h1({
              attributes: {
                style: styles({
                  textAlign: "center"
                }),
              },
              content: "WORDLE"
            }),
            ...gameMatrix.map((row, rowIndex) => {
              return div({
                attributes: {
                  style: styles({
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    flex: "1 0 50px"
                  }),
                },
                content: row.map((letter, columnIndex) => {
                  return div({
                    attributes: {
                      style: styles({
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        height: "50px",
                        width: "50px",
                        border: getBorderColor(gameWord, gameRow, gameColumn, rowIndex, columnIndex, letter),
                        fontFamily: "sans-serif"
                      })
                    },
                    content: letter
                  })
                })
              });
            }),
            button({
              attributes: {
                onclick: () => {
                  changePage({
                    parameters: {},
                    path: ApplicationPath.Home,
                    searchParameters: {}
                  })
                }
              },
              content: "Generate New Word"
            }),
            div({
              attributes: {
                style: styles({
                  paddingTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%"
                }),
              },
              content: keyboard.map(row => {
                return div({
                  attributes: {
                    style: styles({
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                      maxWidth: "min(100vw, 400px)"
                    }),
                  },
                  content: row.map(key => {
                    return div({
                      attributes: {
                        style: styles({
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid lightgrey",
                          cursor: "pointer",
                          fontFamily: "sans-serif",
                          padding: "5px",
                        }),
                        onclick: () => {
                          window.dispatchEvent(new KeyboardEvent("keydown", {
                            key
                          }));

                          if (typeof window.navigator.vibrate === "function") {
                            window.navigator.vibrate(50);
                          }
                        }
                      },
                      content: key,
                    });
                  })
                });
              })
            }),
          ]
        });
      }

      if (state.game.type === "GAME_LOST") {
        return div({
          content: [
            p({
              content: "Lost"
            }),
            button({
              attributes: {
                onclick: () => {
                  update(() => ({
                    name: "RESTART"
                  }));
                },
              },
              content: "Retry?"
            })
          ]
        });
      }

      return div({
        content: [
          p({
            content: "Won!"
          }),
          button({
            attributes: {
              onclick: () => {
                update(() => ({
                  name: "RESTART"
                }));
              },
            },
            content: "Retry?"
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