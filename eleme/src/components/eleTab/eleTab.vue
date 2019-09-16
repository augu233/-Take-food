<template>
  <div class="eleTab">
      <div class="slidedown">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <dir class="tab">
        <van-tabs v-model="active">
          <van-tab title="距离最近"></van-tab>
          <van-tab title="会员领红包"></van-tab>
          <van-tab title="筛选"></van-tab>
        </van-tabs>
      </dir>
  </div>
</template>

<script>
export default {
  name: 'eleTab',
  props: {
    value: Number,
  },
  data(){
    return{
      value1: 0,
      active: 0,
      option1: [
        { text: '综合排序', value: 0 },
        { text: '好评优先', value: 1 },
        { text: '销量最高', value: 2 },
        { text: '起送价最低', value: 3 },
        { text: '配送最快', value: 4 },
        { text: '配送费最低', value: 5 },
        { text: '人均从低到高', value: 6 },
        { text: '人均从高到低', value: 7 },
        { text: '通用排序', value: 8 },
      ],
    }
  },
  mounted() {
        window.addEventListener('scroll', this.handleScroll, true)
  },
  methods:{
    onClick(name, title) {
      if(name === 0){
        this.flag = !this.flag;
      }
      console.log(this.flag);
    },
    handleScroll(){
      console.log(this.value)
      // console.log(scrollY);
        let eleTab = document.querySelector('.eleTab');
        // console.log(eleTab.offsetTop)
      if(scrollY >= this.value){
        eleTab.style.position = "fixed";
        eleTab.style.top = "22vw";
      }else{
        eleTab.style.position = "relative";
        eleTab.style.top = "0";

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.eleTab{
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
}
.slidedown{
  width: 20vw;
}
.tab{
  width: 78vw;
  margin-top: 0.5vw;

}
</style>