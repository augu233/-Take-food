<template>
  <div class="eleSwipe">
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../../images/swipe1.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../images/swipe2.png" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'eleSwipe',
  props: {},
  data(){
    return{

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .eleSwipe{
      margin-bottom: 2vw;
        img{
            width: 100%;
            height: 25vw;
        }
    }

</style>