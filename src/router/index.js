import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Chat from '../components/Chat.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
