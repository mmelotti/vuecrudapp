import Router from "vue-router";

import Home from "@pages/Home.vue";
import Login from "@pages/Login.vue";
import Register from "@pages/Register.vue";
import WorkerList from "@pages/WorkerList.vue";
import WorkerCreate from "@pages/WorkerCreate.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/auth/login",
      component: Login
    },
    {
      path: "/auth/register",
      component: Register
    },
    {
      path: "/worker/list",
      component: WorkerList
    },
    {
      path: "/worker/create",
      component: WorkerCreate
    },
    {
      path: "/",
      component: Home
    }
  ]
});
