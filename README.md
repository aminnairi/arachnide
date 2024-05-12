# arachnide

Library for building Web applications

## Installation

Coming soon...

## Usage

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Arachnide Demo">
    <title>Arachnide | Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./index.ts" type="module"></script>
  </body>
</html>
```

```typescript
import { application } from "@arachnide/core";
import { div, button, span } from "@arachnide/html";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

application({
  root,
  state: () => ({
    counter: 15
  }),
  update: ({ state, event }) => {
    if (event.type === "INCREMENT") {
      return {
        ...state,
        counter: state.counter + 1
      };
    }

    if (event.type === "DECREMENT") {
      return {
        ...state,
        counter: state.counter - 1
      };
    }

    return state;
  },
  views: {
    "/": ({ state, emit }) => {
      return div({
        children: [
          button({
            attributes: {
              onclick: () => {
                emit({
                  type: "DECREMENT",
                  payload: null
                });
              }
            },
            children: ["Decrement"]
          }),
          span({
            children: [state.counter]
          }),
          button({
            attributes: {
              onclick: () => {
                emit({
                  type: "INCREMENT",
                  payload: null
                });
              }
            },
            children: ["Increment"]
          })
        ]
      });
    }
  }
});
```

## Features

- Build web application in JavaScript without directly manipulating the DOM yourself
- Handle and share state between elements without using an external Library
- Easily add routing without having to install anything more
- Lots of helpers for adding html, css and events to your Web applications
- Functional style to keep things simple and expressive

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
