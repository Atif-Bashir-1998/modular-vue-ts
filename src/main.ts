import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import all the modules from ./modules
import authModule from "./modules/auth";
import blogModule from "./modules/blogs";

import { registerModules } from "./register-modules";

// register the imported modules
registerModules({
  auth: authModule,
  blog: blogModule
});

createApp(App).use(store).use(router).mount('#app')
