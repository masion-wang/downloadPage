<template>
  <div id="pcDownload">
    <div class="content">
      <div class="a1">正益工作</div>
      <div class="a2">管理随行&nbsp;&nbsp;&nbsp;&nbsp;工作随心</div>
      <img :src="img" class="a0" />
      <Row class="row">
        <i-col span="6">
          <i-button shape="circle" @click="downloadAndroid" class="buttonMinWidth">
            <i class="img iconfont icon-andriod02"></i>Android
          </i-button>
        </i-col>
        <i-col span="6" class="col2">
          <i-button shape="circle" @click="downloadiPhone" class="buttonMinWidth">
            <i class="img iconfont icon-IOS"></i>iPhone
          </i-button>
        </i-col>
        <i-col span="6">
          <i-button shape="circle" @click="downloadWindows" class="buttonMinWidth3">
            <i class="img iconfont icon-do-windows"></i>Windows
          </i-button>
        </i-col>
        <i-col span="6">
          <i-button shape="circle" @click="downloadWindows" class="buttonMinWidth4">
            <i class="img iconfont icon-mac1"></i>MAC
          </i-button>
        </i-col>
      </Row>
      <div class="a3">用手机扫描二维码安装，或点击按钮下载安装包</div>
    </div>
  </div>
</template>
<script>
import icon from "../assets/icons/icon.css";
import { arr } from "../downloadAddress";
export default {
  data() {
    return {
      img: require("../../public/img/QRCode.png"),
      android: require("../../public/icons/andriod.png"),
      iphone: require("../../public/icons/ios.png"),
      windows: require("../../public/icons/Microsoft.png"),
      arr: arr
    };
  },
  methods: {
    downloadAndroid() {
      const link = document.createElement("a");
      link.href = this.arr[2];
      link.click();
    },
    downloadiPhone() {
      const link = document.createElement("a");
      //link.href = this.arr[0];
      link.click();
    },
    downloadWindows() {
      const link = document.createElement("a");
      link.href = this.arr[1];
      link.click();
    }
  }
};
</script>
<style  scoped>
#pcDownload {
  width: 100%;
  height: 100%;
  background: url(../assets/img/pcBackground.png) no-repeat center;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  margin-top: -10%;
  width: 85%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.a0 {
  margin-top: 10px;
  margin-bottom: 15px;
  width: 90px;
  height: 90px;
  min-width: 90px;
  min-height: 90px;
}
.a1 {
  font-size: 50px;
  color: #0084ff;
  margin-bottom: 5px;
}
.a2 {
  font-size: 28px;
  color: #919191;
  margin-top: -10px;
}
.a3 {
  margin-top: 10px;
  font-size: 20px;
  color: #b0b0b0;
}
.img {
  width: 10px;
  height: 10px;
  margin-right: 3px;
}
.row {
  width: 400px;
  min-width: 400px;
}
.col2 {
  position: relative;
  left: 4px;
}
.buttonMinWidth {
  width: 98px;
  min-width: 90px;
}
.buttonMinWidth3 {
  width: 98px;
  margin-left: 8px;
}
.buttonMinWidth4{
  width: 98px;
  margin-left: 12px;
}
</style>