import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

let BASE_URL = '';
switch (process.env.VUE_APP_ENV) {
    case 'beta':
        BASE_URL = '/beta';
        break;
    case 'dev':
        BASE_URL = '/dev';
        break;
    case 'production':
        if (process.env.VUE_APP_I18N_LOCALE == 'en') {
            BASE_URL = '/';
            break;
        }
        BASE_URL = '/website';
        break;

    default:
        BASE_URL = '/';
        break;
}

const router = new VueRouter({
    base: BASE_URL,
    mode: 'history',
    routes,
});

export default router;
