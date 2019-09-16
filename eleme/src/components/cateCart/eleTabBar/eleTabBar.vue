<template>
  <div class="eleTabBar">
    <van-tabbar active-color="#ff6700" v-model="active">
        <van-tabbar-item icon="home-o"><router-link to="/">首页</router-link></van-tabbar-item>
        <van-tabbar-item icon="search">发现</van-tabbar-item>
        <van-tabbar-item icon="balance-list-o">订单</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'eleTabBar',
  props: {},
  data(){
    return{
      active: 1,
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>