import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Element from 'element-ui';
import '@/assets/styles/element-variables.scss';

import '@/assets/styles/index.scss'; // global css
import '@/assets/styles/ruoyi.scss'; // ruoyi css

import './assets/icons' // icon

Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
