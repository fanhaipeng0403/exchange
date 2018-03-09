<template>
  <div class="login-back">


    <div class="login-main-logo text-center"><a href="/"><img data-v-33a12235=""
                                                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAhCAYAAAAS5W/tAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVDODg2RUQ0QkNCMjExRTc5QjZCREZFQjMzQkYyRjEyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVDODg2RUQ1QkNCMjExRTc5QjZCREZFQjMzQkYyRjEyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM4ODZFRDJCQ0IyMTFFNzlCNkJERkVCMzNCRjJGMTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM4ODZFRDNCQ0IyMTFFNzlCNkJERkVCMzNCRjJGMTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6VFax8AAALEUlEQVR42uxbC3QU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">

    </a>
      <i class="line"></i> <span data-v-33a12235=""> Log in</span></div>

    <div class="login-main login-fish">

      <div class="fishing ts-12 color-666"><i class="iconfont icon-my-exclamation ts-16 mg-r4"></i>Please check that you are visiting <span
        style="color: #659aea;">&nbsp;https://www.bibox.com</span></div>


      <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
               label-position="left">
        <div class="title-container">
        </div>

        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                    autoComplete="on" placeholder="password"/>
          <span class="show-pwd" @click="showPwd">
        </span>


        </el-form-item>

        <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading"
                   @click.native.prevent="handleLogin">Log in
        </el-button>



      </el-form>


    </div>
  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate'
  import LangSelect from '@/components/LangSelect'
  import SocialSign from './socialsignin'

  export default {
    components: {LangSelect, SocialSign},
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          password: '1112222222'
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}]
        },
        passwordType: 'password',
        loading: false,
        showDialog: false
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },


      handleLogin() {

        this.$refs.loginForm.validate(valid => {

          if (valid) {

            this.loading = true

            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {

              this.loading = false

              this.$router.push({path: '/'})

            }).catch(
              () => {
                this.loading = false
              }
            )
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      afterQRScan() {
        // const hash = window.location.hash.slice(1)
        // const hashObj = getQueryObject(hash)
        // const originUrl = window.location.origin
        // history.replaceState({}, '', originUrl)
        // const codeMap = {
        //   wechat: 'code',
        //   tencent: 'code'
        // }
        // const codeName = hashObj[codeMap[this.auth_type]]
        // if (!codeName) {
        //   alert('第三方登录失败')
        // } else {
        //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
        //     this.$router.push({ path: '/' })
        //   })
        // }
      }
    },

    created() {

        if (!this.getSocket)
          if (process.env.NODE_ENV === 'production') {
            this.$store.commit('setGetSocket', io.connect('localhost:9090/'))
          } else {
            this.$store.commit('setGetSocket', io.connect('http://www.qiufengh.com:9090/'))
          }
    },
    destroyed() {
      // window.removeEventListener('hashchange', this.afterQRScan)
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray: #eee;

  .login-fish .fishing i {
    color: #ff9147;
  }

  .ts-16 {
    font-size: 16px;
  }

  .mg-r4 {
    margin-right: 4px !important;
  }

  .iconfont, [class*=" icon-my"]:before, [class^=icon-my]:before {
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* reset element-ui css */
  .login-fish {
    position: relative;
  }

  .fishing {
    padding: 8px 0 8px 10px;
    width: 100%;
    top: -64px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #fff8e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 7px;
    margin-bottom: 17px;

  }

  .ts-12 {
    font-size: 12px;
  }

  .color-666 {
    color: #666;
  }

  .login-back .line {
    width: 1px;
    background-color: #ebeff5;
    margin: 0 16px;
    height: 1.4em;
  }

  .login-main-logo {
    height: 35px;
    padding-top: 100px;
    font-size: 24px;
    color: #333;
    font-weight: 300;
    margin-bottom: 56px;

  }

  .text-center {
    text-align: center;
  }

  .login-back {
    position: relative;
    background-color: #f7f9fc;
    height: 100vh;
    min-height: 730px
  }

  .login-back .login-main {
    box-sizing: border-box;
    max-width: 400px;
    padding: 32px 24px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 4px 12px 1px rgba(31, 49, 77, .1);
    border-radius: 4px
  }

  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
