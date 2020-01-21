import Router from "vue-router";

import Home from "@pages/Home.vue";
import Login from "@pages/Login.vue";
import Register from "@pages/Register.vue";
import WorkerList from "@pages/WorkerList.vue";
import WorkerCreate from "@pages/WorkerCreate.vue";
import WorkerEdit from "@pages/WorkerEdit.vue";

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
      name: "/auth/login",
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
      name: "/worker/edit",
      path: "/worker/edit",
      beforeEnter: !check(),
      component: WorkerEdit
    },
    {
      path: "/",
      component: Home
    }
  ]
});
