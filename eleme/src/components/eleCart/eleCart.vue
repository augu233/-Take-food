<template>
  <div class="eleCart">
      <div>您一共添加了{{count}}个商品</div>
    <div v-for="goods in list" :key="goods.id" class="food-list-hook">
      <van-card
        :price="goods.price"
        desc="饱了么"
        :title="goods.name"
        thumb="//hbimg.huabanimg.com/6564e14df30a7e3e3eaf67a7a30849ba314fe1dff52f1-WfF8X5_fw658"
      />
      <van-stepper class="stepper" min="0" :value="goods.quantity" step="1" @change="onchange(goods, $event)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "eleCart",
  props: {},
  data() {
    return {
        
    };
  },
  methods: {
       onchange(goods, quantity){
          // goods.quantity = quantity
          this.$set(goods, 'quantity', quantity)
          this.$store.commit('PUT', goods)
        },
  },
  computed: {
        list(){
            return this.$store.state.list
        },
        count(){
          return this.$store.getters.count
        }
    },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.food-list-hook{
  position: relative;
}
.stepper{
  position: absolute;
  top: 7vw;
  right: 3vw;
}
</style>