<template>
    <div class="login">
        <div class="login-content">
            <section class="form_container">
                <div class="manage_tip">
                    <span class="title">后台管理系统</span>
                    <NvForm
                        class="loginForm"
                        :items="items"
                        :action="action"
                        position="left"
                        :labelwidth="80"
                    />
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        const self = this;
        return {
            // loginUser: {
            //     userName: 'admin',
            //     password: '123456'
            // },
            // rules: {
            //     userName: [
            //     { required: true, message: '用户名不能为空', trigger: 'blur' },
            //     { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
            //     ],
            //     password: [
            //     { required: true, message: '密码不能为空', trigger: 'blur' },
            //     { min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur' }
            //     ]
            // },
            items: [
                {
                    name: 'username',
                    title: '用户名',
                    type: 'input',
                    placeholder: '请输入用户名',
                    required: true,
                    width: '300px'
                },
                {
                    name: 'password',
                    title: '密码',
                    type: 'input',
                    types: "password",
                    placeholder: '请输入密码',
                    required: true,
                    width: '300px'
                }
            ],
            action: [
                {
                    name: 'reset',
                    type: 'warning',
                    title: '清空',
                    callback() {
                        
                    }
                },
                {
                    name: 'submit',
                    type: 'primary',
                    title: '提交',
                    // submitUrl: '/api/demo/form/submit',
                    args: {},
                    callback() {
                        self.$Message.success('登录成功');
                        self.login()
                    },
                }
            ]
        };
    },
    methods: {
        login(){
            sessionStorage.setItem('isLogin', true)
            this.$store.dispatch('setUserName', 'admin');
            // 添加sidebar
            this.$router.push('/');
        },
        submitForm (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                localStorage.setItem('eleToken', 'Basic qwerdf')
                
                // 下面是通过后台服务器请求，返回token方法，请自行编写后台代码，或者继续关注作者后面关于Node.js后台Chat
                // this.$axios
                //   .get(
                //     '/api/login/login?userName=' +
                //       this.loginUser.userName +
                //       '&password=' +
                //       this.loginUser.password
                //   )
                //   .then(res => {
                //     // 登录成功，储存token
                //     const { token } = res
                //     localStorage.setItem('eleToken', 'Basic ' + token)
                    this.$router.push('/index')
                //   })
                } else {
                console.log('error submit!!')
                return false
                }
            })
        }
    }
};
</script>


<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url("../assets/img/test3.jpeg");
  background-repeat: no-repeat;
  background-size:100% 100%;
  align-items: center; /*定义父元素的元素垂直居中*/
  justify-content: center; /*定义子元素的里的元素水平居中*/
}
.login-content {
  width: 430px;
  height: 300px;
  border: 1px solid #ebebeb;
  box-shadow: 0 12px 14px rgba(0,0,0,.08);
  /* border-radius: 3px; */
}
.form_container {
  height: 100%;
  /* border: 1px solid red; */
  padding: 25px;
  /* border-radius: 5px; */
  text-align: center;
  background-color: #e6edeb;
  /* background-color: #f6fdfb; */
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #000000;
}
.loginForm {
  margin-top: 30px;
}

</style>