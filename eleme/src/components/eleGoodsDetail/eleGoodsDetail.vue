<template>
  <div class="eleGoodsDetail">
    <div class="head">
      <div class="header-top">
        <p @click="back">&lt;</p>
      </div>
      <img src="../../images/button.jpg" alt />
      <div class="back">
        <div class></div>
      </div>
    </div>
    <div class="wrap">
      <div class="slide-left menuWrapper" ref="menuWrapper">
        <div class="content">
          <p
            v-for="(item,index) in goodsDetailType"
            :key="index"
            :class="{'current':currentIndex === index}"
            @click="selectMenu(index, $event)"
          >{{item.name}}</p>
        </div>
      </div>
      <div class="foods foodsWrapper" ref="foodsWrapper">
        <div class="content">
          <div v-for="item in goodsDetail" :key="item.id" class="food-list-hook">
            <van-card
              :price="item.price"
              desc="饱了么"
              :title="item.name"
              thumb="//hbimg.huabanimg.com/6564e14df30a7e3e3eaf67a7a30849ba314fe1dff52f1-WfF8X5_fw658"
            />
            <van-stepper class="stepper" min="0" :value="getGoodsQuantityById(item.id)" step="1" @change="onchange(item,$event)" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="showPopup" />
        <van-goods-action-button type="danger" text="立即购买" @click="buynow" />
      </van-goods-action>
    </div>
    <div class="cart">
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
        <eleCart></eleCart>
      </van-popup>
    </div>
  </div>
</template>

<script>
import api from "../../api/data.js";
import BScroll from "better-scroll";
import eleCart from "../eleCart/eleCart.vue";
import { setTimeout } from 'timers';
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
  name: "eleGoodsDetail",
  components:{
    eleCart,
  },
  props: {},
  data() {
    return {
      showCart: false,
      show: false,
      goodsDetailType: [],
      goodsDetail: [],
      value: 0,
      listHeight: [], // 储存每一个food分类下的Y轴高度坐标值。
      scrollY: 0 // 记录右侧foods列表实时滚动的Y坐标值。
    };
  },
  methods: {
    buynow(){
      console.log(this.$store.state.list.length)              //0的时候就是购物车没有商品
      if(this.$store.state.list.length){
        this.$router.push('/eleBuynow')
      }else{
        Toast('购物车空空如也');
      }
    },
    onchange(item,quantity){
      this.$set(item,'quantity',quantity);
      this.$store.commit('PUT',item)
    },
    showPopup() {
      this.show = !this.show;
    },
    back() {
      this.$router.go(-1);
    },
    selectMenu(index, event) {
      // 发生点击事件时，将被点击菜单栏的索引传递过来，与右侧food列表区域绑定，实现滚动。
      if (!event._constructed) {
        return;
      }
      console.log(index);
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      ); // 获取food列表区间数组集合。
      let el = foodList[index]; // 获取当前点击菜单栏对应的food列表区间，
      console.log(el);
      // this.foodsScroll.scrollToElement(el, 300) // 调动接口函数，使得food列表实时滚动到el所在区间，300表示滚动时间。
      this.foodsScroll.scrollTo(0, -this.listHeight[index], 300);
    },
    _calculateHeight() {
      // 计算food分类中每一个li层的坐标值并放进数组listHeight
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      ); // 获取food-list-hook类的doom元素。
      let height = 0; // 临时变量，用于储存food分类的坐标值。
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        height = height + foodList[i].clientHeight; // 获得每一个food分类的高度数值，将其相加得到每一个food分类的坐标值。
        this.listHeight.push(height); // 将每一个food分类的坐标值推入数组。
      }
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        // 初始化better-scroll
        click: true // better-scroll清除了原来的click，重新添加。
      });

      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3 // probeType: 3表示实时传递滚动位置，相当于探针。用法见better-scroll，还可以为1,2，效果不一样。
      });

      this.foodsScroll.on("scroll", pos => {
        // 实时获得滚动轴的Y坐标。
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    }
  },
  // mounted() {
  //     this.$nextTick(() => {
  //         this.scroll = new Bscroll(this.$refs.wrapper, {})
  //     })
  // },
  computed: {
    getGoodsQuantityById(){
      return this.$store.getters.getGoodsQuantityById;
    },
    currentIndex() {
      // 判断foods列表滚动的坐标Y处于哪个区间，返回对应的下标i。
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          // !height2用于判断i值最大的情况，此时height=undefined,取！值返回i。
          return i;
        }
      }
      return 0; // i=0的情况，什么都没有。
    }
  },
  created() {
    let res = this.$route.query.id;
    api.getGoodsDetailType().then(result => {
      console.log(result);
      this.goodsDetailType = result;
    });
    api.getGoodsDetail().then(result => {
      console.log(result);
      this.goodsDetail = result;
      this.$nextTick(() => {
        // this.scroll = new BScroll(this.$refs.foodsWrapper, {})
        this._initScroll();
        this._calculateHeight(); // 计算food分类中每一个li层的坐标值并放进数组listHeight
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.showCart .van-overlay{
  z-index: 9000;
}
.van-popup{
  padding-bottom: 10vw;
}
.food-list-hook{
  position: relative;
}
.stepper{
  position: absolute;
  top: 7vw;
  right: 3vw;
}
.van-goods-action{
  z-index: 7000;
}
.head {
  width: 100%;
  height: 30vh;
  background-color: rgb(212, 148, 110);
  position: relative;
  overflow: hidden;
  .header-top {
    width: 100%;
    height: 10vw;
    background-color: #fff;
    p {
      margin: 0 0;
      line-height: 10vw;
      font-size: 6vw;
      margin-left: 3vw;
      color: rgb(124, 124, 124);
    }
  }
  .back {
    width: 100%;
    height: 30vh;
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567010983752&di=36300c3fb016c65d2b63ad4d095883f5&imgtype=0&src=http%3A%2F%2Fpic1.nipic.com%2F2008-10-29%2F20081029114413153_2.jpg);
    background-size: cover;
    filter: blur(15px);
  }
  img {
    width: 20vw;
    height: 20vw;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -10vw;
    margin-top: -10vw;
    z-index: 10;
  }
}
.wrap {
  display: flex;
  flex-flow: wrap;
  .slide-left {
    flex-grow: 2;
    overflow: auto;
    height: 60vh;
    p {
      margin: 0 0;
      width: 18vw;
      height: 10vh;
      text-align: center;
      background-color: rgb(247, 247, 247);
      font-size: 3vw;
      line-height: 10vh;
    }
    .current {
      border: 1px #ff6700 solid;
      background-color: white;
    }
  }
  .foods {
    height: 60vh;
    display: inline-block;
    flex-grow: 8;
    overflow: hidden;
  }
}
</style>
