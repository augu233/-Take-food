<template>
  <div>
    <div class="page" >
      <span class="back" @click="back">&lt;</span>
      <p class="page-p">确认订单</p>
      <div class="title">
        <div class="address">
          <van-cell title="地址选择" is-link value="内容" label="描述信息" @click="toChooseAddress" />
        </div>
        <div class="time">
          <van-cell title="立即送出" is-link value="大约多久送达" />
        </div>
        <div class="pay">
          <van-cell title="支付方式" is-link value="支付宝" />
        </div>
      </div>
      <div class="cartlist clearfix">
        <div v-for="goods in list" :key="goods.id" class="food-list-hook">
          <van-card class="goodslist"
            :price="goods.price"
            desc="饱了么"
            :title="goods.name"
            thumb="//hbimg.huabanimg.com/6564e14df30a7e3e3eaf67a7a30849ba314fe1dff52f1-WfF8X5_fw658"
          />
          <input type="button" class="stepper" min="0" :value="`X${goods.quantity}`"/>
        </div>
        <div class="total">小计 <b>￥{{total}}</b></div>
      </div>
      <div class="footer">
          <div class="ordertext">
          <van-cell title="订单备注" is-link value="口味、偏好" />
        </div>
        <div class="person">
          <van-cell title="餐具份数" is-link value="未选择" />
        </div>
        <div class="date">
          <van-cell title="发票信息" is-link value="未选择" />
        </div>
      </div>
    </div>
    <div class="all-total">
        <div class="price">
        ￥{{total}}

        </div>
        <div class="pay-ok">
            <span>确认支付</span>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "buynow",
  data() {
    return {};
  },
  props: {},

  computed: {
        list(){
            return this.$store.state.list
        },
        total(){
          return this.$store.getters.total
        }
    },
  methods: {
    back() {
      this.$router.go(-1);
    },
      toChooseAddress(){
          this.$router.push('/eleAddress')
      }
  },
  created() {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.page {
  padding: 0 3vw;
  background: linear-gradient(to bottom, #ff6700 20%, rgb(245, 245, 245));
}
.page-p{
    display: inline-block;
    margin-left: 38vw;
  text-align: center;
    line-height: 50px;
    font-size: 4vw;
    color: white;
}
.back{
    color: white;
    font-size: 4vw;
}
.cartlist input{
    background:none;  
    outline:none;  
    border:none;
}
.title{
    margin-bottom: 5vw;
}
.address{
    background-color: #fff;
    padding: 2vw 0;
}
.pay{
    background-color: #fff;
    padding: 2vw 0;
}
.time{
    background-color: #fff;
    padding: 2vw 0;
}
.ordertext{
    background-color: #fff;
    padding: 2vw 0;
}
.person{
    background-color: #fff;
    padding: 2vw 0;
}
.date{
    background-color: #fff;
    padding: 2vw 0;
}
.total{
    margin: 3vw 0;
}
.goodslist{
    margin-bottom: 2vw;
  padding:1vw 0;
  box-sizing: border-box;
}
.food-list-hook{
  position: relative;
}
.stepper{
  position: absolute;
  top: 7vw;
  right: 3vw;
}

.clearfix::after{
    content: "";
    clear: both;
}
.all-total{
    height:40px;
    width: 100%;
    background-color: rgb(49, 49, 49);
    display: flex;
    flex-flow: row nowrap;
    position: fixed;
    bottom: 0;
}
.price{
    color: white;
    flex-grow: 8;
}
.pay-ok{
    flex-grow: 2;
    background-color: rgb(68, 193, 202);
}
.pay-ok span{
    color: white
}
.footer{
    margin-bottom: 50px;
}
</style>
