import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import RegisterComponent from '../components/Register.vue';
import LoginComponent from '../components/Login.vue';
import ChatComponent from '../components/Chat.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/register',
        name: 'RegisterComponent',
        component: RegisterComponent
    },
    {
        path: '/login',
        name: 'LoginComponent',
        component: LoginComponent
    },
    {
        path: '/chat',
        name: 'ChatComponent',
        component: ChatComponent
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
