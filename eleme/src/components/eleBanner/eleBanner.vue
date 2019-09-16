<template>
  <div class="eleBanner">
    <div class="left">
        <h2>品质套餐</h2>
        <h3>搭配齐全吃的好</h3>
        <h4>立即抢购></h4>
    </div>
    <div class="right"><img src="../../images/meat.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'eleBanner',
  props: {},
  data(){
    return{

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .eleBanner{
        display: flex;
        flex-flow: row nowrap;
        padding: 3vw;
        background-color: rgb(247, 247, 247);
        margin-bottom: 2vw;
        .left{
            flex-grow: 5;
            h2{
                font-size: 5vw;
                margin: 0 0;
                margin-bottom: 1vw;
            }
            h3{
                font-size: 4.5vw;
                font-weight: normal;
                color: rgb(151, 151, 151);
                margin: 0 0;
                margin-bottom: 2vw;

            }
            h4{
                font-size: 5vw;
                color: rgb(179, 147, 88);
                margin: 0 0;
            }
        }
        .right{
            flex-grow: 5;
            text-align: center;
            img{
                width: 40vw;
                height: 28vw;
            }
        }
    }

</style>