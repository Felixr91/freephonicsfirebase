import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import AllCategories from '@/components/AllCategories.vue'
import CardCategory from '@/components/CardCategory.vue'


Vue.component('CardCategory', CardCategory)

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
