/*
 * @Author: liludan
 * @Date: 2020-01-02 20:16:14
 * @LastEditTime : 2020-01-02 20:28:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-screen\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/index.vue'),
    },
  ],
});
