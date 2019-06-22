import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Project from "@/components/Project";
import notFound from "@/components/notFound";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "*", name: "NotFound", component: notFound },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/projects/:projectName",
      name: "Project",
      component: Project
    }
  ]
});
