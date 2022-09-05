import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/homePage.vue";
import About from "@/views/aboutUs.vue";
import LoginPage from "@/views/loginPage.vue";
import CreateAcc from "@/views/createAcc.vue";
import RecentBlog from "@/views/recentBlog.vue";
const routes = [
  {
    path: "/",
    name: "homePage",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "CreateAcc",
    component: CreateAcc,
  },
  {
    path: "/blogs",
    name: "RecentBlog",
    component: RecentBlog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
