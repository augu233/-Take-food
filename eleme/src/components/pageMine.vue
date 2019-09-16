<template>
  <div>
    <div class="all wrapper" res="wrapper">
      <div class="content">
        <div class="header-top"></div>
        <van-pull-refresh
          v-model="isLoading"
          @refresh="onRefresh"
          loosing-text="松开~~~~"
          pulling-text="恭喜你喜提彩蛋"
        >
          <header>
            <div class="user">
              <h3>练习时长两年半</h3>
              <p>再忙，也要记得吃饭呢~</p>
              <i>签到领十元红包</i>
            </div>
            <div class="head-pic">
              <div class="img"></div>
            </div>
          </header>
          <div class="super-vip clearfix">
            <span class="left">
              <van-icon name="gem" color="#977b46" />
              <h4>超级会员</h4>
            </span>
            <span class="right">两个奖励金即将清空</span>
          </div>
          <div class="wallet">
            <div class="red-bag">
              红包
              <br />
              <b>8</b>
              <i>个未使用</i>
            </div>
            <div class="money">
              钱包
              <br />
              <i>金币、福利、借钱</i>
            </div>
          </div>
          <div class="list">
            <van-cell-group>
              <van-cell title="我的收藏" icon="like" />
              <van-cell title="我的客服" icon="phone" />
              <van-cell title="推荐有奖" icon="gift" />
              <van-cell title="商务合作" icon="smile-comment" />
              <van-cell title="设置" icon="setting" />
            </van-cell-group>
          </div>
          <div class="footer">
            <p>3小时公益</p>
            <span>========自己做着玩的=========</span>
          </div>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import eleTabBar from "./eleTabBar/eleTabBar";
export default {
  name: "pageMine",
  data() {
    return {
      isLoading: false
    };
  },
  props: {},
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  components: {
    eleTabBar
  },
//   mounted() { 
//         this.$nextTick(() => { 
//             this.scroll = new BScroll(this.$refs.wrapper, {}) 
//         }) 
//     },
  create() { 
        this.data = res.data 
        this.$nextTick(() => { 
        this.scroll = new BScroll(this.$refs.wrapper, {}) 
        })  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  height: 100vh;
}
.all {
  padding: 0 3vw;
}
.header-top {
  width: 100%;
  height: 15vw;
}
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 6vw;
  .user {
    h3 {
      color: #977b46;
      font-size: 8vw;
      margin: 0 0;
      margin-bottom: 1vw;
    }
    p {
      color: rgb(153, 153, 153);
      margin-bottom: 1vw;
      font-size: 4vw;
    }
    i {
      padding: 1vw 1vw;
      font-size: 1vw;
      color: rgb(117, 117, 117);
      border: 1px rgb(151, 151, 151) solid;
      border-radius: 3vw;
    }
  }
  .head-pic {
    .img {
      width: 22vw;
      height: 22vw;
      border-radius: 50%;
      background: linear-gradient(
        to bottom right,
        rgb(236, 199, 168),
        rgb(236, 182, 119),
        rgb(236, 199, 168)
      );
    }
  }
}
.super-vip {
  padding: 2vw 2vw;
  background: linear-gradient(to right, rgb(236, 199, 168), rgb(236, 170, 94));
  border-radius: 2vw;
  margin-bottom: 6vw;
  .left {
    float: left;
    h4 {
      margin-left: 2vw;
      display: inline-block;
      font-size: 4.5vw;
      color: #4b3b1e;
    }
  }
  .right {
    font-size: 3vw;
    color: #74541a;
    float: right;
  }
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.wallet {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 6vw;
  .red-bag {
    width: 40vw;
    background-color: rgb(248, 248, 248);
    padding: 2vw 2vw;
    border-radius: 3vw;
    b {
      color: red;
    }
    i {
      color: #a1a1a1;
      font-size: 3vw;
    }
  }

  .money {
    background-color: rgb(248, 248, 248);
    width: 40vw;
    border-radius: 3vw;
    padding: 2vw 2vw;
    i {
      font-size: 3vw;
      color: #a1a1a1;
    }
  }
}
.footer {
  margin-top: 5vw;
  text-align: center;
  margin-bottom: 20vw;
  p {
    color: #ff6700;
    font-size: 3vw;
  }
  span {
    color: #ccc;
    font-size: 3vw;
  }
}
</style>
