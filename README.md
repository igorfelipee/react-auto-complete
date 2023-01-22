# React Auto Complete

This project was created to resolve deel's front-end challenge.

## Commands

|                      | ASCII                  |
| -------------------- | ---------------------- |
| Run Project          | `yarn dev`             |
| Build Project        | `yarn build`           |
| Run Jest Tests       | `yarn test`            |
| Run Components Tests | `yarn test:components` |

## Annotations

As the challenged asked to not use any external libraries, I decided to make some notes about what I'd change if I could use it.

### Styles

In this project I decided to use pure CSS with BEM pattern. In a real life sittuation, I would prefer to use CSS-in-JS instead.

### Http Requests

I would use axios because it brings native response type support. So it wouldn't be necessary to infer that the API response is a Todo[]. And it also brings a lot of configurations that could help us in production enviroment. Such as httpAgent, timeout, baseURL, etc.
