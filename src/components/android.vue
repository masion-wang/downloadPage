<template>
  <div id="pcDownload">
    <div class="content">
      <div class="a1">正益工作</div>
      <div class="a2">管理随行&nbsp;&nbsp;&nbsp;&nbsp;工作随心</div>
      <img src="../../public/img/QRCode.png" alt class="a0" />
      <i-button shape="circle" class="large" @click.native="downloadAndroid">
        <i class="img iconfont icon-andriod02 andriod"></i>点击安装
      </i-button>
      <div class="a3">或者用手机识别二维码安装</div>
    </div>
  </div>
</template>
<script>
import icon from "../assets/icons/icon.css";
import { arr } from "../downloadAddress";
export default {
  mounted(){
    //this.downloadAndroid()
  },
  data() {
    return {
      // img:require('/static/img/QRCode./png'),
      // android:require('static/icons/andriod.png'),
      arr: arr,
      isMask: false
    };
  },
  methods: {
    downloadAndroid() {
      const link = document.createElement("a");
      link.href = this.arr[2];
      link.click();
    }
  }
};
</script>
<style  scoped>
.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
}
.arrow {
  width: 80px;
  height: 120px;
  position: absolute;
  right: 5%;
  top: 7%;
}
.blue {
  color: #0084ff;
}
.tips {
  /* margin:40% 10% 0% 10%; */
  color: white;
  font-size: 18px;
  position: absolute;
  width: 300px;
  top: 30%;
  left: 50%;
  transform: translateX(-150px);
}
#pcDownload {
  width: 100%;
  height: 100%;
  background: url(../../public/img/mobieBackground.png) no-repeat center;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  margin-top: -15vh;
  width: 85%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.a0 {
  margin-top: 10px;
  margin-bottom: 25px;
  width: 90px;
  height: 90px;
  min-width: 90px;
  min-height: 90px;
}
.a1 {
  font-size: 43px;
  color: #0084ff;
  margin-bottom: 5px;
}
.a2 {
  font-size: 25px;
  color: #919191;
  margin-top: -10px;
}
.a3 {
  margin-top: 10px;
  font-size: 17px;
  color: #b0b0b0;
}
.a4 {
  font-size: 32px;
  margin-bottom: 3px;
}
.img {
  width: 10px;
  height: 10px;
  margin-right: 3px;
}
.andriod {
  font-size: 22px;
}
.large {
  width: 6.6rem;
  font-size: 20px;
  color:#0084ff;
}
</style>