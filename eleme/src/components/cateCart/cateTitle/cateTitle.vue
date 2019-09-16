<template>
  <div>
    <div>
      <van-nav-bar title="发现好物"/>
    </div>
    <div><img class="banner" src="../../../images/summer.webp" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "cateTitle",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.cateTitle {
  padding: 5vw 5vw;
  text-align: center;
  img {
    width: 28vw;
    height: 26vw;
    border: 1px rgb(233, 233, 233) solid;
  }
  h1 {
    font-size: 7vw;
    padding-top: 5vw;
    margin: -3vw 0;
  }
}
.banner{
    width: 100%;
    height:25vw;
    margin-bottom: 2vw;
}
</style>