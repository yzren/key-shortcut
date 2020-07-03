import Vue from 'vue'
import App from './App.vue'
import {Shortcuts} from 'shortcuts';

Vue.prototype.$shortcuts = new Shortcuts();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
