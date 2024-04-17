# arachnide

Library for building Web applications

## Installation

Coming soon...

## Usage

```typescript
import { application, p } from "arachnide";

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element not found");
}

application<null, null>({
  root,
  state: null,
  update: ({ state }) => state,
  view: () => p({
    attributes: {},
    children: ["Hello, world!"]
  })
});
```

## License

See [`LICENSE`](./LICENSE).

## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Security

See [`SECURITY.md`](./SECURITY.md).
