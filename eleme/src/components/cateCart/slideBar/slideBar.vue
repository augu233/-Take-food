<template>
  <div class="slideBar">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(categroy,index) in cateGroup" :title="categroy.name" :key="index" />
      </van-sidebar>
  </div>
</template>

<script>
import api from '../../../api/data';
export default {
  name: 'slideBar',
  props: {},
  data(){
    return{
        cateGroup:[],
        activeKey:0
    }
  },
  methods:{

  },
  created(){
      api.getCate().then(result=>{
          this.cateGroup = result;
          // console.log(this.cateGroup);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>