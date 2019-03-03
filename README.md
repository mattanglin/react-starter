# react-starter
Universal React / Redux Starter App

## Roadmap
- [x] Basic SSR setup
- [x] Routing (RFR)
- [x] Styling (Emotion)
- [ ] @babel/register for dev server build instead of babel-loader
- [ ] Universal API client
- [ ] api proxy
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
