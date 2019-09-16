<template>
  <div>
      <cateTitle/>
      <div class="include">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="categroy in cateGroup" :title="categroy.name" :key="categroy.id"  v-on:click="findlist(categroy.id)" />
        </van-sidebar>
        <div class="wrap">
          <div class="list" v-for="item in cateItem" :key="item.id">{{item.name}}</div>
        </div>
      </div>
  </div>
</template>

<script>
import eleTabBar from '../components/cateCart/eleTabBar/eleTabBar';
import api from '../api/data';
import cateTitle from '../components/cateCart/cateTitle/cateTitle';
export default {
  name: 'pageSearch',
  data(){
    return{
        cateGroup:[],
        activeKey:0,
        cateItem:[],
        defaultId: 1,
    }
  },
  props: {
    
  },
  components: {
    eleTabBar,
    cateTitle
  },
  methods:{
      findlist(id){
          api.getCateItem(id)
          .then(result => {
              console.log(result);
              this.cateItem = result;
          })
      }
  },
  created(){
      api.getCate().then(result=>{
          this.cateGroup = result;
          // console.log(this.cateGroup);
      })
      api.getCateItem(this.defaultId).then(result => {
          console.log(result);
          this.cateItem = result;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .include{
    display: flex;
    flex-flow: row nowrap;
  }
  .wrap{
    display: flex;
    margin-left: 3vw;
    height: 20vw;
    flex-flow: row wrap;
  }
  .list{
    height: 7vw;
    margin-right: 3vw;
    font-size: 5vw;
    border: 1px #ff6700 solid;
  }
</style>
