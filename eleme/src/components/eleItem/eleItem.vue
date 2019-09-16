<template>
  <div class="eleItem">
    <van-swipe class="include" :loop="false" :show-indicators="false">
        <van-swipe-item>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
        </van-swipe-item>
        <van-swipe-item height="40vw">
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
            <div class="item">
                <img src="../../images/food.jpeg" alt="">
                <p>美食</p>
            </div>
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'eleItem',
  props: {},
  data(){
    return{

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .eleItem{
        padding-top: 23vw;
        margin-bottom: 2vw;
    }
    .van-swipe-item{
        text-align: center;
        display: flex;
        flex-flow: row wrap;
        .item{
            width: 20vw;
            height: 20vw;
            img{
                width: 14vw;
                height: 14vw;
            }
            p{
                margin-top: -2vw;
                font-size: 4vw;
            }
        }
    }
</style>