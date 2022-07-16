import Login from "./Login.vue";

export default {
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      // also works with dynamic imports for code splitting
      component: () => import("./Register.vue"),
    },
  ],
};
