# modular-vue-ts

This is a boiler plate project which provides a vue project in modular folder structure.

`./modules` - contains all the modules of the app

**each module should have the following files**
1. `{ViewName}.vue` - A vue file which represents a View (i.e Register.vue, Login.vue)
2. `router.ts` - a router file containing path to all the module related routes
3. `store.ts` - a store file containing a local store for the module
4. `index.ts` - it only exports the router.ts and store.ts files
5. `/components` - an optional directory which has components which are local to module

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
