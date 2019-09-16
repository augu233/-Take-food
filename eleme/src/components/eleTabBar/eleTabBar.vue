<template>
  <div class="eleTabBar">
    <van-tabbar @change="onChange" active-color="#ff6700" v-model="active">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/pageSearch">发现</van-tabbar-item>
        <van-tabbar-item icon="balance-list-o" to="/pageOrder">订单</van-tabbar-item>
        <van-tabbar-item icon="friends-o"  to="/pageMine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'eleTabBar',
  props: {},
  data(){
    return{
      active: 0,
    }
  },
  methods:{
    onChange(index) {
      this.active = index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.eleTabBar{
  z-index: 1000;
  position: relative;
}
</style>