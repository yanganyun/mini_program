import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;


//引入公共样式
import './assets/css/base.scss';
// import './assets/js/stori-js-bridge.js';

new Vue({
  render: h => h(App),
}).$mount('#app')
