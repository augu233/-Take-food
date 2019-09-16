import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant);
Vue.use(VueRouter);
Vue.config.productionTip = false

import pageMall from './components/pageMall';
import pageSearch from './components/pageSearch';
import pageMine from './components/pageMine';
import pageOrder from './components/pageOrder';
import eleAddress from './components/eleAddress/eleAddress.vue';
import eleBuynow from './components/eleBuynow/eleBuynow.vue';
import eleAddressEdit from './components/eleAddressEdit/eleAddressEdit.vue';
import eleGoodsDetail from './components/eleGoodsDetail/eleGoodsDetail.vue';

var vm = new Vue({
  el:"#app",
  store,
  render: h => h(App),
  router:new VueRouter({
    routes:[
      {path:'/', name: 'pageMall', component:pageMall},
      {path:'/pageSearch', name: 'pageSearch', component:pageSearch},
      //{path: '*', redirect: pageMall},   /*默认跳转路由*/
      {path: '/goodsDetail', name: 'eleGoodsDetail', component: eleGoodsDetail, params:{id:111}},
      {path: '/pageMine', name: 'pageMine', component: pageMine},
      {path: '/pageOrder', name: 'pageOrder', component: pageOrder},
      {path: '/eleBuynow', name: 'eleBuynow', component: eleBuynow},
      {path: '/eleAddress', name: 'eleAddress', component: eleAddress},
      {path: '/eleAddressEdit', name: 'eleAddressEdit', component: eleAddressEdit},
    ]
  })
})
