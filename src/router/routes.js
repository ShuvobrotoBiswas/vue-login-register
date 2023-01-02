const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/new-login.vue") },
    ],
  },
  {
    path: "/register",
    component: () => import("layouts/RegisterLayout.vue"),
    children: [
      {
        path: "/register",
        component: () => import("src/pages/new-registration.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
