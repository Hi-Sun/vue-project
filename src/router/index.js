import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import ForgetPwd from '@/components/ForgetPwd';
import Register from '@/components/Register';
import Bubble from '@/components/Bubble';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/forgetpwd',
      name: 'ForgetPwd',
      component: ForgetPwd,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/bubble',
      name: 'Bubble',
      component: Bubble,
    },
  ],
});
