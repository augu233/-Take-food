<template>
  <div class="eleGoods">
      <div>
        <!-- <router-link to="/goodsDetail"> -->
          <div class="all-shop" v-for="item in allShop" :key="item.id" @click="routerTo(item.id)">
              <img class="shop-img" src="../../images/shop.webp" alt="">
              <div class="produce">
                <h1>{{item.name}}</h1>
                <p>{{item.address}}</p>
                <div><span>{{item.updated_at}}</span></div>
              </div>
              <h3>{{item.id}}</h3>
          </div>
        <!-- </router-link> -->
      </div>
  </div>
</template>

<script>
import allData from '../../api/data.js';
export default {
  name: 'eleGoods',
  props: {},
  data(){
    return{
        allShop:[],
    }
  },
  methods: {
    routerTo(itemId) {
      console.log(itemId);
      this.$router.push({
        name: 'eleGoodsDetail',
        query: {id:itemId},
      })
    }
  },
  created() {
    allData.getShop().then(result => {
      this.allShop = result;
      // console.log(this.allShop);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.eleGoods{
  padding-bottom:10vw;
}
    .all-shop{
        display: flex;
        flex-flow: row nowrap;
        margin-bottom: 4vw;
        color: black;
        img{
            width: 20vw;
            height: 20vw;
            border:1px rgb(224, 224, 224) solid;
            margin-right: 5vw;
        }
        h1{
            font-size: 5vw;
            margin-top: 1vw;
        }
        p{
            margin-top: -1vw;
            font-size: 3vw;
            margin-bottom: 0vw;
        }
        span{
            margin-top: -1vw;
            font-size: 3vw;
        }
    }
    .produce{
        margin-right: 40vw;
    }
</style>