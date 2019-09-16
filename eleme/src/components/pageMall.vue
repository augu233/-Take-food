<template>
  <div>
    <eleHead/>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <eleItem/>
        <eleBanner/>
        <eleSwipe/>
        <eleTab :value="this.allheight"/>
        <eleGoods/>
        </van-pull-refresh>
  </div>
</template>

<script>
import eleHead from './eleHead/eleHead';
import eleItem from './eleItem/eleItem';
import eleBanner from './eleBanner/eleBanner';
import eleSwipe from './eleSwipe/eleSwipe';
import eleTab from './eleTab/eleTab';
import eleGoods from './eleGoods/eleGoods';
import eleTabBar from './eleTabBar/eleTabBar';
export default {
  name: 'pageMall',
  data(){
    return{
      isLoading: false,
      allheight: 0,
    }
  },
  props: {
    
  },
  
  mounted() {
    this.height();
    window.onresize = this.height;
    // window.addEventListener('offsetHeight', this.height, true)
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    height(){

      let eleHead = document.querySelector('.eleHead').offsetHeight;
      let eleItem = document.querySelector('.eleItem').offsetHeight;
      let eleBanner = document.querySelector('.eleBanner').offsetHeight;
      let eleSwipe = document.querySelector('.eleSwipe').offsetHeight;
      console.log(eleHead,eleItem,eleBanner,eleSwipe)
      this.allheight = eleItem + eleBanner + eleSwipe - eleHead;
      console.log(this.allheight)
    }
  },
  created(){
    // this.$router.push({name: 'eleGoodsDetail', params:{id:123}})

  },
  components: {
    eleHead,
    eleItem,
    eleBanner,
    eleSwipe,
    eleTab,
    eleGoods,
    eleTabBar
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
