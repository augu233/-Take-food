<template>
  <div>
    <van-tabs v-model="activea">
      <van-tab title="待处理订单">待处理订单</van-tab>
      <van-tab title="进行中订单">进行中订单</van-tab>
      <van-tab title="历史订单">
          <div class="wrap clearfix" v-for="item in edit" :key="item.id">
              <div class="pic fl"><img src="" alt=""></div>
              <div class="mes fl">
                  <p class="name">{{item.user.name}}</p>
                  <p class="phone">{{item.user.phone}}</p>
                  <p class="address">{{item.user.address}}</p>
              </div>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from '../api/data';
import eleTabBar from "./eleTabBar/eleTabBar";
export default {
  name: "pageOrder",
  data() {
    return {
      edit: [],
      activea: 0
    };
  },
  props: {},

  mounted() {},
  methods: {},
  created() {
      api.getEdit().then(result=>{
          this.edit = result;
          console.log(this.edit);
      })
  },
  components: {
    eleTabBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix::after{
    content: '';
    clear: both;
    display: block;
}
.fl{
    float: left;
}
.pic{
    padding: 5vw;
    width: 20vw;
    height: 20vw;
}
.wrap{
    border-bottom: 1px solid #ccc;
}
</style>
