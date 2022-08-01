import Vue from 'vue';
import Router from 'vue-router';
import SimpleLogin from '@/components/SimpleLogin';
import BubbleLogin from '@/components/BubbleLogin';
import ForgetPwd from '@/components/ForgetPwd';
import Register from '@/components/Register';
import Bubble from '@/components/Bubble';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SimpleLogin',
      component: SimpleLogin,
    },
    {
      path: '/bubble-login',
      name: 'BubbleLogin',
      component: BubbleLogin,
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
