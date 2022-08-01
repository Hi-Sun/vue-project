
<template>
  <div id="login">
    <div class="mylogin" align="center">
      <h4>登录</h4>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item label="" prop="account" style="margin-top: 10px">
          <el-row>
            <el-col :span="2">
              <span class="el-icon-s-custom"></span>
            </el-col>
            <el-col :span="22">
              <el-input
                class="inps"
                placeholder="账号"
                v-model="loginForm.account"
              >
              </el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="" prop="passWord">
          <el-row>
            <el-col :span="2">
              <span class="el-icon-lock"></span>
            </el-col>
            <el-col :span="22">
              <el-input
                class="inps"
                type="password"
                placeholder="密码"
                v-model="loginForm.passWord"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="margin-top: 55px">
          <el-button type="primary" round class="submitBtn" @click="submitForm"
            >登录
          </el-button>
        </el-form-item>
        <div class="unlogin">
          <router-link :to="{ path: '/forgetpwd' }"> 忘记密码? </router-link>
          |
          <router-link :to="{ path: '/register' }">
            <a href="register.vue" target="_blank" align="right">注册新账号</a>
          </router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SimpleLogin',
  data() {
    return {
      loginForm: {
        account: '',
        passWord: '',
      },
      loginRules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    ...mapMutations(['changeLogin']),
    submitForm() {
      const userAccount = this.loginForm.account;
      const userPassword = this.loginForm.passWord;
      if (!userAccount) {
        this.$message({
          type: 'error',
          message: '账号不能为空！',
        });
        return;
      }
      if (!userPassword) {
        this.$message({
          type: 'error',
          message: '密码不能为空！',
        });
        return;
      }
      this.$message({
        type: 'info',
        message: `您输入的账号为${userAccount}，密码为${userPassword}`,
      });
      // const userForm = new FormData();
      // userForm.append("userAccount", userAccount);
      // userForm.append("userPassword", userPassword);
      // this.axios.post("URL1", userForm).then((res) => {
      //   if (res.data == 0) {
      //     this.$message({
      //       type: "error",
      //       message: "密码错误，登陆失败！",
      //     });
      //   }
      //   //token
      //   this.sessiontoken = res.headers["sessiontoken"];
      //   this.PageToken = Math.random().toString(36).substr(2);
      //   sessionStorage.setItem("PageToken", this.PageToken);
      //   this.changeLogin({ sessiontoken: this.sessiontoken });
      //   //登录成功
      //   if (res.data == 1) {
      //     this.axios
      //       .get("URL2")
      //       .then((res) => {
      //         if (res.data == null) {
      //           this.$message({
      //             type: "error",
      //             message: "查询失败！",
      //           });
      //         } else {
      //           if (res.data.userType == 0) {
      //             this.$router.push({ path: "/supermana", replace: true });
      //           } else if (res.data.userType == 1) {
      //             this.$router.push({ path: "/manauser", replace: true });
      //           } else if (res.data.userType == 2) {
      //             this.$router.push({ path: "/ordinauser", replace: true });
      //           }
      //         }
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       });
      //   }
      // });
    },
  },
};
</script>

<style scoped>
#login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  position: relative;
}

.mylogin {
  width: 240px;
  height: 280px;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 50px 40px 40px 40px;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  opacity: 1;
  background: linear-gradient(
    230deg,
    rgba(53, 57, 74, 0) 0%,
    rgb(0, 0, 0) 100%
  );
}

.inps input {
  border: none;
  color: #fff;
  background-color: transparent;
  font-size: 12px;
}

.submitBtn {
  background-color: transparent;
  color: #39f;
  width: 200px;
}
</style>

