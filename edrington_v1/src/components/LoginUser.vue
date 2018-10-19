<template>
  <div class="register_wrap">
    <!-- :gutter="10"行间隔 -->
    <img src="../assets/edrington.png" class="edrington_logo"/>
    <div class="register_wrap_2">
        <el-row :gutter="10" :span="6" >
        
            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap"> 
              <span>手机：</span>
              <el-input v-model="employee_info.employee_mobile" placeholder="请输入手机号" style="width:80%"></el-input>
            </el-col>

            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap">
              <span>密码：</span>
              <el-input v-model="employee_info.employee_password" placeholder="请输入密码" style="width:80%"></el-input>
            </el-col>
        </el-row>
    <div class="submit_reg">
       <el-button round @click="login_now">登陆</el-button>
    </div>
    
    <div class="reg_text" ><router-link to="/RegisterUser">马上注册</router-link></div>
    </div>
  </div>
</template>

<script>
// import {ajaxGet,ajaxPost} from '../public/http.js'
import axios from 'axios';
export default {
  name: 'RegisterUser',
  created() {
  },
  data () {
    return {
      employee_info:{
        employee_mobile:'',
        employee_password:''
      }
    }
  },
  methods:{
    login_now(){
      let employee_info = {
        employee_mobile:this.employee_info.employee_mobile,
        employee_password:this.employee_info.employee_password
      }
      axios.post('/api/employee_login',employee_info).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    },
    register_now: ()=>{
      this.$ro
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input_wrap{
  margin: 20px 0;
}
.edrington_logo{
  width: 50%;
  margin: 400px 0 300px 0;
}
.register_wrap{
  width: 100%;
  background-color: #003366;
  overflow: hidden;
  text-align: center;
  height: 100%;
}
.register_wrap_2{
  color: #fff;
}
.submit_reg{
  text-align: center;
  margin-top: 136px;
}
.register_wrap_2{
  margin: 35px;
}
.el-button {
  width: 50%;
}
a{
  color: #fff;
}
.reg_text{
  margin: 50px 0;
}
</style>
