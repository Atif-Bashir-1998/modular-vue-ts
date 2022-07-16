import Blogs from "./Blogs.vue";

export default {
  routes: [
    {
      path: "/blogs",
      name: "Blogs",
      component: Blogs,
    },
    {
      path: "/create-blog",
      name: "CreateBlog",
      // also works with dynamic imports for code splitting
      component: () => import("./CreateBlog.vue"),
    },
  ],
};
