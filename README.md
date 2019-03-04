# react-starter
Universal React / Redux Starter App

## Features
- Universal React rendering with [universal-webpack](https://github.com/catamphetamine/universal-webpack)
- Universal routing with [redux-first-router](https://github.com/faceyspacey/redux-first-router)
- Universal API client and express proxy with support for multiple api/auth sources with [axios](https://github.com/axios/axios)
- Universal CSS-in-JS styling with [Emotion](https://github.com/emotion-js/emotion)
- HMR dev flow with [react-hot-loader](https://github.com/gaearon/react-hot-loader)


## Install

```
yarn
```

## Development

```
yarn dev
```


## Roadmap
- [x] Basic SSR setup
- [x] Routing (RFR)
- [x] Styling (Emotion)
- [x] source-mapping
- [x] Universal API client
- [x] api proxy
- [ ] auth proxy
- [ ] Dev Flow
- [ ] Prod Build
- [ ] code splitting with universal react component
- [ ] Jest unit testing
- [ ] Cypress functional testing

File Structure:
```
/
webpack/
  dev.config.js
  dev.client.config.babel.js
  dev.server.config.babel.js
  devServer.js
  prod.config.js
  prod.client.config.babel.js
  prod.server.config.js
  universal-webpack-settings.json
src/
  client.js
  server.js
  startServer.js
  App.js
  Html.js
  components/
    index.js
  pages/
    App.js
  state/
    createStore.js
    reducer.js
static/
```
