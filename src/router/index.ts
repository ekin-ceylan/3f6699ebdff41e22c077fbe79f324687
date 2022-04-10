import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
export const paths = {
    HOME: '/',
    PRODUCT: '/product-details/:id',
};
export const routeNames = {
    HOME: 'Products',
    PRODUCT: 'Product Details',
};

const routes: Array<RouteConfig> = [
    {
        path: paths.HOME,
        name: routeNames.HOME,
        component: Home,
    },
    {
        path: paths.PRODUCT,
        name: routeNames.PRODUCT,
        component: () => import('../views/ProductDetails.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
