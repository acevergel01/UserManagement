const routes = [
  {
    path: "/",
    component: () => import("src/layouts/DrawerLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Home.vue") },
      {
        path: "/usermanagement",
        component: () => import("pages/UserManagement.vue"),
      },
      { path: "/userinfo", component: () => import("pages/UserInfo.vue") },
      { path: "/todo", component: () => import("pages/ToDo.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("pages/Login.vue"),
      },
      {
        path: "/signup",
        component: () => import("pages/Signup.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
