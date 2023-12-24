import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import SobrePage from "@/pages/SobrePage.vue";
import ContatoPage from "@/pages/ContatoPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/sobre",
        name: "sobre",
        component: SobrePage,
    },
    {
        path: "/contato",
        name: "contato",
        component: ContatoPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
