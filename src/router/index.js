import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from "@/pages/MainPage";
import PersonalPage from "@/pages/PersonalPage";
import InstructionPage from "@/pages/InstructionPage";
import PartnersPage from "@/pages/PartnersPage";
import TariffPage from "@/pages/TariffPage";
import ReviewsPage from "@/pages/ReviewsPage";
import NotFoundPage from "@/pages/NotFoundPage";

Vue.use(VueRouter);

const routes = [
  {name: 'main', component: MainPage, path: '/'},
  {name: 'personal', component: PersonalPage, path: '/personal/'},
  {name: 'instruction', component: InstructionPage, path: '/instruction/'},
  {name: 'partners', component: PartnersPage, path: '/partners/'},
  {name: 'tariff', component: TariffPage, path: '/tariff/'},
  {name: 'reviews', component: ReviewsPage, path: '/reviews/'},
  {name: 'notFound', component: NotFoundPage, path: '*'},
];

const router = new VueRouter({
  routes
});

export default router;
