<template>
  <el-row type="flex" class="row-bg" justify="center">
    <!-- 将页面分割为24份铺满一个位置. -->
    <!-- 小分辨率6，大分辨率1920则7个位置 -->
    <el-col :xl="6" :lg="7">
      <h2>欢迎来到VueAdmin管理系统</h2>
      <el-image
        :src="require('@/assets/MarkerHub.jpg')"
        style="height: 180px; width: 180px"
      ></el-image>

      <p>公众号 MarkerHub</p>
      <p>扫码二维码，回复【 VueAdmin 】获取登录密码...</p>
    </el-col>

    <!-- 竖线 -->
    <el-col :span="1">
      <el-divider direction="vertical"></el-divider>
    </el-col>

    <!-- 表单 -->
    <!-- 修改为70 -->
    <el-col :xl="6" :lg="7">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-width="70px"
      >
        <!-- 380的表单框宽度 -->
        <el-form-item label="用户名" prop="username" style="width: 380px">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 380px">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code" style="width: 380px">
          <!-- 验证码框左偏移 -->
          <el-input
            v-model="loginForm.code"
            style="width: 172px; float: left"
            maxlength="5"
          ></el-input>
          <el-image
            :src="captchaImg"
            class="captchaImg"
            @click="getCaptcha"
          ></el-image>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import qs from "qs";

export default {
  name: "Login",
  data() {
    // 表单数据
    return {
      loginForm: {
        username: "admin",
        password: "111111",
        code: "11111",
        token: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 5, max: 5, message: "长度为 5 个字符", trigger: "blur" },
        ],
      },
      captchaImg: null,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("/login?" + qs.stringify(this.loginForm))
            .then((res) => {
              console.log(res);

              const jwt = res.headers["authorization"];

              this.$store.commit("SET_TOKEN", jwt);
              /* 提交成功后转到index页面 */
              this.$router.push("/index");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCaptcha() {
      this.$axios.get("/captcha").then((res) => {
        console.log("/captcha");
        console.log(res);

        this.loginForm.token = res.data.data.token;
        this.captchaImg = res.data.data.captchaImg;
        this.loginForm.code = "";
      });
    },
  },
  created() {
    this.getCaptcha();
  },
};
</script>

<style scoped>
.el-row {
  /* 设置页面的背景色 */
  background-color: #fafafa;
  height: 100%;

  /* 左右居中 */
  display: flex;

  /* 水平居中 */
  align-items: center;

  /* 微信显示的那段文字居中 */
  text-align: center;
  justify-content: center;
}

/* 设置分割线高度200 */
.el-divider {
  height: 200px;
}

.captchaImg {
  /* 图片需要左偏移使得与验证码同一行显示. */
  float: left;

  /* 与验证码框隔8个像素 */
  margin-left: 8px;

  /* 边框平滑 */
  border-radius: 4px;
}
</style>