# arachnide

Library for building Web applications

## Usage

*Note: the package is not yet published.*

```bash
npm create vite -- --template vanilla-ts my-first-arachnide-project
cd my-first-arachnide-project
npm install
npm install --save --save-exact @arachnide/core @arachnide/html
```

```typescript
// Required core library
import { startApplication } from "@arachnide/core";

// Optional convenience functions for html elements
import { button } from "@arachnide/html";

// Root mounting point for the app
const root = document.getElementById("root");

if (!root) {
  // Simple fail-safe to prevent silly mistakes if the HTML code gets updated
  throw new Error("Root element not found");
}

// State of the app (TypeScript only)
type ApplicationState = {
  counter: number
}

// Union of events (TypeScript only)
type ApplicationEvent = {
  name: "INCREMENT",
  data: number
}

// App starting function
startApplication<ApplicationState, ApplicationEvent>({
  root,
  // Initialization of the state of the app
  initialState: () => ({
    counter: 0
  }),
  // Handler for updates
  onUpdate: ({ state, event }) => {
    // Events have a name property
    if (event.name === "INCREMENT") {
      // Must return a new immutable state
      return {
        ...state,
        // Events can have data too (optional)
        counter: state.counter + event.data
      };
    }

    return state;
  },
  // Pages are first-class citizens in Arachnide!
  pages: {
    // Pages have a route (with optional dynamic segments)
    // Pages must return a function (with lots of helpers to deconstruct)
    "/": ({ state, update }) => {
      // Convenience function for creating a button easily
      return button({
        // Attributes are a direct mapping from the DOM Web API
        attributes: {
          // no need to target the "className" DOM property, just use "class"
          class: state.counter < 0 ? "text-red-500" : null,
          // onclick, just like with the DOM Web API
          onclick: () => {
            // This is the only way to trigger a new render
            update(() => ({
              name: "INCREMENT",
              data: 1
            }));
          }
        },
        // Content can be an element, string, number, array, etc...
        content: `Counter is at ${state.counter}`
      });
    }
  }
});
```

## Libraries

Name | Description
---|---
`@arachnide/core` | Core library for building Web applications using Arachnide
`@arachnide/css` | Utility functions for working with CSS in Arachnide
`@arachnide/dom` | Utility functions for working with the DOM Web API in Arachnide
`@arachnide/event` | Utility functions for working with events of the DOM Web API in Arachnide
`@arachnide/html` | Utility functions for working with elements of the DOM Web API in Arachnide
`@arachnide/svg` | Utility functions for working with elements of the SVG Web API in Arachnide
`@arachnide/mathml` | Utility functions for working with elements of the MathML Web API in Arachnide

## Features

### Written in TypeScript

This library has been written entirely in TypeScript, allowing you to prevent most of the common mistakes we make when using an external library and to help you get the most of your text editor for hints on how to use the library. We also recommend using VSCode to leverage its Intellisense through the usage of TypeScript in your source-code.

### Functional programming

Functional programming is a set of concepts that allow you to code in a way that promotes immutability of data structure and purity of functions in order to minimize side-effects. Side-effects are every actions that are performed outside of the scope of a context, in this case, the JavaScript language, and that can alter the outer context like updating an HTML document, sending an HTTP request, etc... This library relies on these concepts to offer the best developer experience possible and to prevents most of the mistake that we might do when creating Web applications using the Web API DOM. Write only what you expect your UI to be, instead of writing how to create the UI.

### Built-in State

Arachnide shines best when creating Web applications that manipulate states. If you intend on doing so, you can rely on its built-in state management. Create your state directly when creating a new Arachnide application. Share this state throughout the component hierarchy in a functional way to pass down your state to all of your elements. Whenever you update your state, it will simply share this new state to all of your components defined in your pages. Hence, getting a reactive application that gets its UI updated whenever updating your state.

### Built-in router

Many websites relies on a Web server to request for the next page, making the whole page reload in order to send and receive the next page's informations. Others Web application relies on client-side routing thanks to the Web API History in order to manipulate the pages directly from the browser. This has the benefit to prevent the network overhead that the user might face when changing page, hence enhancing the user-experience on your Web application. Arachnide relies on this Web API in order to provide the ability for your users to change page and its built-in to the library. You simply define what elements you want for a given route, and it handle the rest.

### Expressive API and source-code

The goal of this library is to allow you to create Web applications. But not only that, it has also been made so that you can use this as a learning tool to know more about the internals of a JavaScript framework thanks to a declarative source-code. Emphasis has been made to name variables and function in a certain way that speaks to human more than a machine, and loads of comments have been added in order to help you understand the code easily. The API has of course been written in such a way that allow you to easily go back to an Arachnide application and update your application without having to think about its API too much or having to go back to the documentation often.

### Easy testing

As pages are functions, and pages always gets the same arguments, it's easy to test these since they are pure functions. You'll have to provide the arguments for these pages (the state, an update function, etc...) still, but since they are also pure functions, it's easy to mock and easy to run tests against. It is recommended to follow this mindset whenever creating component functions, by keeping things pure, you'll have a easier time debugging and testing them, which can greatly improve the confidence given to any app created using Arachnide!

## Prior art & Inspiration

### Hyperapp

The first framework that comes to my mind right away.

I literally spent years tinkering with this awesome framework, creating cool apps that, for the first time in a long time, gave me joy to create & maintain.

Large inspiration for the API design of the `application` function, equivalent to the Hyperapp's `app` function has been taken here and I often go back to take more inspiration because there is a lot of good things to take from.

Why not participate to Hyperapp's development instead? Well there are some opinion that I've taken over the course of my scolarship since I was a student at the time I learned about Hyperapp and with time I've made my mind on several points.

Like TypeScript. I love TypeScript. Not to the bone since this is not the best tools, nor the perfect one, but this is a hell of a step forward in the direction of a safer and more friendly user experience, despite the fact that TypeScript has its quirks and its drawbacks.

Hyperapp's source-code is entirely written in JavaScript, and even if the `hyperapp` package has a type definition, it is written by hand and is not the best depiction of the reality of how the different functions works, and this can lead to TypeScript errors, that should not be happening in the first place. This can be quite frustrating at best, and sometimes I wish the source-code was written in TypeScript from the ground up.

This is one of the reason I tried other alternatives before coming up here and creating my own framework, and I've always sworn to myself that I would at least try to write it in TypeScript if I ever come up one day with the necessary skills and motivation to create my own JavaScript framework.

Another reason is that the source-code is written in a way that is hard for newcomers to help with the development of the source-code since it can be quite hard to come and try to understand the inner work of the framework itself as the code is written with sometimes one-letter variable names or function. And I think this is a huge drawback, speaking for myself, since I didn't really got a grasp at how a JavaScript framework work by reading the source-code of Hyperapp. And I'm aware this is not the goal of this project and that can act as a barrier for future potential copycats or unfair competition I guess, or for some other reason. But I feel like it puts right away a huge barrier between smart people like the contributors and the small people like me that are simple minded users that are not that smart, but would like to learn more. This is why the source-code of Arachnide is voluntarily explicit, without a single one-letter variable or function name, and loads of comments (or at least I try!).

This is also thanks to this framework that I discovered functional programming & the Elm language.

I'm very grateful to have learned about Hyperapp and you can learn more about it on its [GitHub page](https://github.com/jorgebucaran/hyperapp).

### Elm

This is the pinacle of my research of the perfect language, thanks to its functional paradigm, but also to its very simple and straightforward syntax.

I've built, and still maintain, applications with this language and its framework, `elm/html` and I've got great joy writing using this language apps. It's almost a cheat past a certain threshold and it really give you great confidence about creating applications that last for long and are reliable.

Also, its creator, Evan Czaplicki, has tons of interesting conference that I followed without missing a single one, not all talking about Elm but more on general-purpose development themes, and I've learn so much thanks to him and others such a Richard Feldmann.

I'm really glad to have worked with this framework, and this has also been a huge inspiration, thanks to the TEA (The Elm Architecture) and how it manages the flow of a state in an application.

I've also realised that React (and Redux) were taking some inspiration about how it worked, and it also got me interested in React in the first place.

Elm is a language that is aimed at providing the user the ability to write fully functional code that is then compiled to work on a Web browser, and I absolutely loved the fact that it hides the complex features of the Web to allow you to code in a safe language. And its port feature allowed one to plug in whatever code coming from JavaScript and make it safe by providing decoders to enable validation of state.

I might have gone too far in this rabit hole, and I realised that unfortunately being a simple language with a simple syntax, it has its quirks and complex feature to handle when going really deep, or when the app becomes a little bit more featureful, especially when dealing with complex ports for instance.

The one thing that is awesome, is also the thing that made me progressively go back to JavaScript as it is a language of its own, with an ecosystem of its own, and the project has not taken the traction I though it would take, for obvious reasons, but I keep thinking that it is a trully beautiful project and despite my poor level of knowledge about Haskell, I would have loved being a contributor to the project.

You can learn more about Elm by reading about it directly from their [official website](https://elm-lang.org/).

### React

React has been one of the keystone in my carreer since it is the framework that I choosed to work with my customers and even if I'm not aggreing on some of the direction of the library, this is the framework that I use, and still use today, to create most of my applications.

Overall, I think that the React team has done an incredible job. And I've tinkered with so many frameworks. I've worked with Vue.js for as long as I work with React, I've used others frameworks as well such as Svelte, Solid, Angular. But none of them have the level of developer experience that I searched in a JavaScript framework, but this does not mean that the others are bad, it simply means that React suits my needs more than any other frameworks.

I absolutely love the fact that, despite being written in JavaScript, the TypeScript types are spot on, and really help providing reliability in using the framework. And I value the developer experience more than anything else. I can simply hope that I can create another framework with such level of DX as the one provided by React!

I also love the fact that it has a huge ecosystem of libraries that can help with so much use-cases, thing that is lacking about Hyperapp and Elm.

And of course, I love the fact that it has this functional programming feel, even though it is not of the level of Elm or even Hyperapp, I feel like it has been though with functional programming when built back in the time, even when classes where the go-to solution for creating the virtual DOM elements.

I've been interested about how React works under the hood, especially with its Virtual/Real DOM implementation and its Fibers. So far, I think I've got a pretty good grasp at how the virtual DOM was working, hence why I got curious to know if I could create a framework that was able to provide a way of updating the DOM without recreating everything from the ground up.

Unfortunately, I've not been interested enough to know more about how Fibers really works, even though I got the general idea and that's ok for me. I hope this project has contributors that can help me improve in the future, that's one of the thing I hope for this project!

So why not contributing to the React project instead? Well, I'm really not that smart, at all. I don't really think I have the skills to withstand the complexity of the source-code of React, plus I now have my own view of what a JavaScript framework should look like in its design and that's why I've finally, after many years, decided to create my own.

[Official website](https://react.dev/) for the React documentation.

### Vue.js

Although Vue.js might be the farthest in design from what you can expect from Arachnide, I've actually worked with Vue.js for a long time, and to your surprise, it has been my first JavaScript framework ever back in the time when I worked with Laravel and later on added some JavaScript goodies with Vue.js.

I can say for sure that it has been my number one inspiration to create my own framework, even though at that time, I was in my first year of my computer science degree, and I had no idea how the Web, nor JavaScript really worked under the hood and all my time at school at lead me to this very moment where I could say: that's it, I can build a JavaScript framework now!

I trully think that Vue.js is a work of art of its own, simply because of its so simple and straightforward syntax, allowing you to easily and intuitively create Web UIs without having to think about it too much. There is some complexity behind the simplicity of this framework and I can only ever imagine the trendemous amount of work that has been put all those years to make a framework like Vue.js, and its meta-framework Nuxt.js as well which has been a pleasant experience for myself.

One thing for sure, I'll never be able to create a framework like Vue.js because I'm simply not as smart as Evan You and I'm trully in shock of the amount of work that him and its contributors have put to make the Web what it is today, specially because it was a time where I hated the React syntax, haha!

With maturity and experience, and some sneak peaks at the source-code, I can definitely say that it is hard to make something simple to use, and that is something that we can all learn from.

As you probably guessed, there is not so much inspiration about the way Vue.js works that has inspired Arachnide, although I try to follow this moto of trying to make something as simple as possible to use, without sacrificing on developer experience and simplicity of writing the internal source-code.

You can learn more about Vue.js at their [official website](https://vuejs.org/).

### Others that I probably forget

In my carreer and experience, I've tackled with so many frameworks such as [Solid.js](https://www.solidjs.com/), [Svelte](https://svelte.dev/), [Angular](https://angular.io/), and I am curious by nature, I love exploring new ideas, new paradigms, new ideas in order to forge my own.

This also leads me to tell you about the JavaScript framework war, a war that does not really exist really simply because there is no competition between frameworks, they all have they quirks, their killer features and there are so many framework simply because there isn't one way to think through a problem.

If this was the case, you can imagine that we would think only in a certain way and no others, life would be trully meaningless and there would be no joy in living it so be passionate and go beyond the differences of others (frameworks as well as people) to appreciate what they have to offer!

## License

See [`LICENSE`](./LICENSE).

## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Security

See [`SECURITY.md`](./SECURITY.md).
