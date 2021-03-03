<template>
  <!-- 姓名
联系方式
获取验证码
公司名
您的职务

您所在的城市
您的营销宣传年度预算
少于10  10-50  50-100  100以上
提交该表格，即表示您同意我们可以使用您提供的联系方式来跟您联系，为您提供跟您的请求/提交资料有关的服务。 -->
  <div class="contentall">
    <!-- 表单 -->
    <div class="content">
      <!-- 表单背景 -->
      <a href="javascript:void(0)">
        <img class="backgroundImg" src="@/assets/img/fromBackground/frombackgroundImg.jpg" />
      </a>

      <div class="fromdateall">
        <div class="newText">
          <div class="button">
            <a href="#GK"> 点击了解详情</a>
          </div>
        </div>
        <div class="fromContent">
          <!-- 用户名 -->
          <van-field v-model="fromdata.name" name="姓名" label="姓名" placeholder="请输入姓名" required />
          <!-- 手机验证码 -->
          <van-field
            v-model="fromdata.phone"
            center
            clearable
            label="手机号"
            type="tel"
            placeholder="请输入手机号"
            required
          >
          </van-field>
          <!-- 倒计时 -->
          <!--
            <template #button>
              <van-button v-if="codeShow" size="small" type="info" class="YZm" @click="getPhoneCode"
                >发送验证码</van-button
              >
              <span v-if="!codeShow" class="DJS">{{ count }}</span>
            </template> -->

          <!-- 验证码 -->
          <!-- <van-field
            v-model="fromdata.code"
            name="验证码"
            label="验证码"
            required
            type="digit"
            placeholder="请输入验证码"
          /> -->
          <!-- 公司名称 -->
          <van-field
            v-model="fromdata.companyname"
            name="公司名"
            label="公司名称"
            required
            placeholder="请输入公司名称"
          />
          <!-- 职务 -->
          <van-field v-model="fromdata.position" name="职务" label="你的职务" required placeholder="请输入职务" />
          <!-- 您所在的城市 -->
          <!-- <van-field
            readonly
            clickable
            is-link
            v-model="fromdata.city"
            name="您所在的城市"
            label="您所在的城市"
            placeholder="请选择城市"
            @click="showCCity = true"
          /> -->

          <!-- 营销预算 -->
          <!-- <van-field
            readonly
            clickable
            is-link
            label="年度营销预算"
            :value="fromdata.budget"
            placeholder="请选择金额"
            @click="showPicker = true"
          /> -->
        </div>
        <!-- 注释 -->
        <div class="font_msg">
          <p class="msg">
            提交该表格，即表示您同意我们可以使用您提供的联系方式来跟您联系，为您提供跟您的提交资料有关的服务。
          </p>
        </div>

        <div>
          <van-button round block type="info" native-type="submit" class="sub" :disabled="!disabled" @click="subButton"
            >立即领取</van-button
          >
        </div>
        <!-- 金额弹窗 -->
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker show-toolbar title="金额" :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
        </van-popup>
        <!-- 地址弹窗 -->
        <!-- <van-popup v-model="showCCity" round position="bottom">
          <van-area
            title="地址"
            :area-list="areaList"
            @confirm="Dzconfirm"
            @cancel="showCCity = false"
          />
        </van-popup> -->
      </div>
    </div>
    <!-- 简介 -->
    <div class="bottom">
      <a href="javascript:void(0)" id="GK">
        <img src="@/assets/img/fromBackground/brief.png" style="width: 100%; margin-top: -4px" />
      </a>
      <!-- 手机号 -->
      <div class="tel_all_1">
        <div class="tel_content">
          <img src="@/assets/img/fromBackground/tel.png" />
          <a href="tel:400-921-0276">400-921-0276</a>
        </div>
        <div class="tel_content">
          <img src="@/assets/img/fromBackground/phone.png" />
          <a href="tel:18917769172">18917769172</a>
        </div>
      </div>
      <div class="tel_all">
        <div class="tel_content">
          <img src="@/assets/img/fromBackground/tel.png" />
          <a href="tel:400-921-0276">400-921-0276</a>
        </div>
        <div class="tel_content">
          <img src="@/assets/img/fromBackground/phone.png" />
          <a href="tel:18917769172">18917769172</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Picker,Toast } from 'vant'
import { getShareInfo } from '@/utils/share.js'
// import { Lazyload } from 'vant'
import { UpFromdata, PhoneCode } from '../../api/fromdata.js'
export default {
  data() {
    return {
      // name	姓名	字符串	是
      // phone	手机号	字符串	是
      // companyname	公司名称	字符串	是
      // city	所在城市	字符串	是
      // position	职位	字符串	是
      // budget	预算	字符串	是
      // code	验证码	字符串	是
      fromdata: {
        name: '', //名字
        phone: '', // 手机号
        position: '', // 职务
        companyname: '', //公司名字
        make_name: '视频号代运营'
      },
      disabled: true,
      brief: require('@/assets/img/fromBackground/brief.png'),
      count: '', //倒计时
      codeShow: true, //验证码按钮
      timer: null,
      // areaList: areaList,
      // 地址列表
      cascaderValue: '',
      showCCity: false, //地址   // 地址弹
      showPicker: false, // 预算弹框
      columns: ['少于10万', '10-50万', '50-100万', '100以上万']
    }
  },
  components: {
    Picker
  },
  mounted() {
    this.ShareInfo()
  },
  methods: {
    ShareInfo() {
      const link=location.href
      let data = {
        link: link,
        title: '视频号代运营',
        desc: '视频号代运营,就选盛视天橙',
        imgUrl: 'http://mfyfile.greatorange.cn/MFY20210303292/logo.jpg'
      }

      getShareInfo(data)
    },
    // 提交表单
    subButton() {
      const a = this.fromdata
      const name = a.name.trim()
      const phone = a.phone.trim()
      const position = a.position.trim()
      const companyname = a.companyname.trim()
      var Reg = /^[1][3456789][0-9]{9}$/
      if (Reg.test(phone)) {
        this.disabled = false
        UpFromdata(this.fromdata).then(res => {
          this.disabled = true
          Toast.success('提交成功!')
        })
      } else {
        Toast.fail('请输入正确手机号')
      }
      position.length > 0 ? '' : Toast.fail('请输入职务')
      companyname.length > 0 ? '' : Toast.fail('请输入公司名称')
      phone.length > 0 ? '' : Toast.fail('请输入手机号')
      name.length > 0 ? '' : Toast.fail('请输入姓名')
    },

    // 获取验证码
    getPhoneCode() {
      var Reg = /^[1][3456789][0-9]{9}$/
      let phone = this.fromdata.phone
      if (Reg.test(phone)) {
        const TIME_COUNT = 60
        if (!this.timer) {
          PhoneCode({ phone }).then(res => {
            console.log(res)
            if (res.status === 200) {
              Toast.success('验证码发送成功')
              this.count = TIME_COUNT
              this.codeShow = false
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--
                } else {
                  this.codeShow = true
                  clearInterval(this.timer)
                  this.timer = null
                }
              }, 1000)
            } else {
              Toast.fail(res.message)
            }
          })
        }
      } else {
        Toast.fail('手机号码格式不正确')
      }
    },

    // 金额选择
    onConfirm(value) {
      this.fromdata.budget = value
      this.showPicker = false
    },
    Dzconfirm(value) {
      this.fromdata.city = value
        .map(item => {
          return item.name
        })
        .join('/')
      this.showCCity = false
    },
    onFinish({ selectedOptions }) {
      this.show = false
      this.fromdata.city = selectedOptions.map(option => option.text).join('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  .backgroundImg {
    width: 100%;
  }
  .fromdateall {
    position: absolute;
    top: 190px;
    background-size: 100% 100%;
    padding: 0 20px;
    .newText {
      margin-top: 0.7rem;
      color: #fff;

      p {
        text-align: center;
        font-size: 0.3rem;
        line-height: 0.52rem;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 500;
        margin-top: 20px;
        span {
          font-size: 24px;
        }
      }
      .button {
        text-align: center;
        border-radius: 20px;
        background: #333;
        padding: 6px 4px;
        margin: 0 auto;
        width: 2.7rem;
        animation: scaleDrew 2.5s ease-in-out infinite;
        a {
          color: #fff;
          font-size: 12px;
        }
      }
    }

    .fromContent {
      background: #fff;
      width: 85%;
      margin: 1rem auto;
      // margin-bottom: 1rem;
      padding: 0.3rem 10px;
      border-radius: 10px;
    }
    .from {
      border-radius: 20px;
    }
    .font_msg {
      margin-top: 8px;
      padding: 0 4px;
      margin-bottom: 8px;

      .msg {
        letter-spacing: 1px;
        text-indent: 1em;
        font-size: 0.2rem;
        color: #fff;
        line-height: 18px;
      }
    }
    .DJS {
      background: #ccc;
      padding: 6px 20px;
      border-radius: 5px;
      color: #fff;
    }
    .van-button--info {
      background: #333;

      border: none;
    }

    .sub {
      width: 60%;
      margin: 0 auto;
      margin-top:0.4rem;
      font-size: 0.5rem;
      animation: scaleDrew 2.5s ease-in-out infinite;
    }
  }
}
.bottom {
  position: relative;
  .tel_all_1 {
    animation: scaleDrew 2.5s ease-in-out infinite;
    position: absolute;
    top: 10.53333rem;
    right: 0;
    left: 0;
    width: 9rem;
    margin: 0 auto;
    background: #f55d65;
    padding: 4px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    .tel_content {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
      }
      a {
        padding-left: 4px;
        font-size: 18px;
        color: #fff;
      }
    }
  }
  .tel_all {
    animation: scaleDrew 2.5s ease-in-out infinite;
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    width: 9rem;
    margin: 0 auto;
    background: #f55d65;
    padding: 4px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    .tel_content {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
      }
      a {
        padding-left: 4px;
        font-size: 18px;
        color: #fff;
      }
    }
  }
}

@keyframes scaleDrew {
  // /* 定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称 */
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.05);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.05);
  }
}
</style>
