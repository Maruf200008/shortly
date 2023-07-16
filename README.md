# Project Name : Shortly

Uses technology : [Tailwind Css](https://tailwindcss.com/), [React](https://react.dev/), [Redux](https://redux.js.org/), [rtk query](https://redux-toolkit.js.org/rtk-query/overview/), [TypeScript](https://www.typescriptlang.org/) and [Pure Css Loader](https://loading.io/css/).

```sh
npm run dev
```

## I faced some problems in this project

- Here the api I used can only make GET/POST requests
- Here using rtk query base url shows cross origin error. Because of which I had to specify
  the url on each endpoint.
- When I first check with the useUrlCheck hook if there is any data in my localStore I
  dispatch addUrl. But here my value was getting duplicate so here I

```sh
const existingUrl = state.url.find(
        (url) => url.longUrl == action.payload.longUrl,
      )
      if (!existingUrl) {
        state.url.push(action.payload)
      }
```
