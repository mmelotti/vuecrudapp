import Router from "vue-router";

import Home from "@pages/Home.vue";
import Login from "@pages/Login.vue";
import Register from "@pages/Register.vue";
import WorkerList from "@pages/WorkerList.vue";
import WorkerCreate from "@pages/WorkerCreate.vue";

const check = () => {
  console.log("hihi22");
  const token = localStorage.getItem("auth");
  console.log(!!token);
  return !!token; //get token from localStorage
};

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
      beforeEnter: !check(),
      component: WorkerList
    },
    {
      path: "/worker/create",
      beforeEnter: !check(),
      component: WorkerCreate
    },
    {
      path: "/",
      component: Home
    }
  ]
});
