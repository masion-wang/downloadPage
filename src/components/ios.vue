<template>
  <div id="pcDownload">
    <div v-if="this.isMask==true" class="mask">
      <img src="../../public/img/arrow.png" class="arrow" />
      <div class="tips">
        微信扫描无法下载，请点击
        <span class="blue">“箭头”</span> 指向按钮处，并选择在
        <span class="blue">浏览器</span>打开
      </div>
    </div>
    <div class="content">
      <div class="a1">正益工作</div>
      <div class="a2">管理随行&nbsp;&nbsp;&nbsp;&nbsp;工作随心</div>
      <img src="../../public/img/QRCode.png" class="a0" />
      <div class="a4">1、点击下载后，iPhone手机将自动在后台安装，请返回桌面查看</div>
      <div class="a4">2、打开应用时，若提示未受信任，请点击 “信任”按钮，返回后重新进入</div>
      <div class="a4">3、若无信任按钮，请到手机的设置“设置” -> “通用” -> “描述文件或设备管理” 中，并选择信任相应证书，返回后重新进入</div>
      <!-- <i-button shape="circle" class="large" @click.native="downloadiPhone">
        <i class="img iconfont icon-IOS ios"></i> 点击安装
      </i-button> -->
      <x-button type="primary" style="height:40px;">Top</x-button>
      <x-button type="primary">Top</x-button>
      <div class="a3">或者用手机识别二维码安装</div>
    </div>
  </div>
</template>
<script>
import { XButton } from 'vux'
import icon from "../assets/icons/icon.css";
import { arr } from "../downloadAddress";
export default {
  data() {
    return {
      // img:require('/static/img/QRCode.png'),
      // ios:require('/static/icons/ios.png')
      arr: arr,
      isMask: false
    };
  },
  methods: {
    downloadiPhone() {
      const link = document.createElement("a");
      link.href = this.arr[1];
      link.click();
    }
  },
  components: {
    XButton
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
  margin-top: -5%;
  width: 85%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.a0 {
  margin-top: 20px;
  margin-bottom: 15px;
  width: 90px;
  height: 90px;
  min-width: 90px;
  min-height: 90px;
}
.a1 {
  font-size: 35px;
  color: #0084ff;
  margin-bottom: 5px;
}
.a2 {
  font-size: 21px;
  color: #919191;
  margin-top: -3px;
}
.a3 {
  margin-top: 10px;
  font-size: 15px;
  color: #b0b0b0;
}
.a4 {
  font-size: 17px;
  margin-bottom: 7px;
}
.img {
  width: 10px;
  height: 10px;
  margin-right: 3px;
}
.ios {
 font-size:23px;
 color:#0084ff;
}
.large {
  margin-top: 20px;
  width: 6.6rem;
  font-size: 21px;
  color:#0084ff;
}
</style>