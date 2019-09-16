<template>
  <div id="app">
    <router-view></router-view>
    <!-- <pageMine/> -->
    <eleTabBar key="mine" v-if="isShow"/>
  </div>
</template>

<script>
  import pageMine from "./components/pageMine.vue";
  import eleTabBar from "./components/eleTabBar/eleTabBar";


  export default {
    name: "app",
    props: {

    },
    data() {
      return {
      }
    },
    components: {
      pageMine,
      eleTabBar,
    },
    computed:{
      isShow(){
          let hideList = ["eleAddressEdit", "eleAddress", "eleBuynow", "eleGoodsDetail"];
          if(hideList.indexOf(this.$route.name)!=-1 ){
               return false;
          }else{
             return true;
          }
      }
  }
  };
</script>

<style>
</style>