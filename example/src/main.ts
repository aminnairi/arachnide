import { application } from "arachnide";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

application<number, null>({
  state: 0,
  update: ({ state }) => state,
  root,
  view: () => {
    return "Hello";
  }
})
