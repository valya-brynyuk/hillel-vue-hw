import {createRouter, createWebHistory} from "vue-router";
import ArticleList from "./pages/ArticleList.vue";
import AddArticle from "./pages/AddArticle.vue";
import ArticleDetail from "./pages/ArticleDetail.vue";
import NotFound from "./pages/NotFound.vue";

export const router = createRouter({
  routes: [
    {path: '/', component: ArticleList, name: 'home'},
    {path: '/new-post', component: AddArticle, name: 'new-post'},
    {path: '/:id(\\d+)', component: ArticleDetail, name: 'single-post'},
    {path: '/:pathMatch(.*)*', component: NotFound, name: 'not-found'},
  ],
  history: createWebHistory(),
})