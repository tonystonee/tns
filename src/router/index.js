import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MyPlaylists from  "../views/MyPlaylists.vue";
Vue.use(VueRouter);
console.log('ruo')
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/me",
    name: "MyPlaylists",
    component: MyPlaylists
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
