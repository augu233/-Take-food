<template>
  <div class="eleHead">
      <div class="address"><van-icon name="location" color="white"/>超级蜂巢</div>
      <div class="search"><van-icon name="search" color="gray"/>搜索饱了吗商家外卖、商品名称</div>
  </div>
</template>

<script>
export default {
  name: 'eleHead',
  props: {},
  data(){
    return{

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .eleHead{
    width: 100%;
    height: 23vw;
    padding: 5vw;
    box-sizing: border-box;
    background-color: #ff6700;
    margin-bottom: 2vw;
    position: fixed;
    z-index: 100;
    .address{
      color: #fff;
      font-weight: bolder;
      font-size: 4vw;
      margin-bottom: 2vw;
    }
    .search{
      width: 100%;
      height: 4vw;
      padding: 2vw 0;
      text-align: center;
      background-color: #fff;
      font-size: 3.5vw;
      color: rgb(150, 150, 150);
    }
  }

</style>