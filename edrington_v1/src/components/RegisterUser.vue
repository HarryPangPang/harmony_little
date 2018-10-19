<template>
  <div class="register_wrap">
    <!-- :gutter="10"行间隔 -->
    <i class="el-icon-back goback_icon" @click="goback"></i>
    <img src="../assets/edrington.png" class="edrington_logo"/>
    <div class="register_wrap_2">
      <el-form :model="employee_info" :rules="rules" ref="ruleForm">
        <el-row :gutter="10" :span="6" >

            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap">
              <el-form-item prop="rule_name">
                <span>姓名：</span>
                <el-input v-model="employee_info.employee_name" placeholder="请输入姓名" style="width:80%"></el-input>
              </el-form-item>
            </el-col>
            
            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap"> 
              <el-form-item prop="rule_mobile">
              <span>手机：</span>
              <el-input v-model="employee_info.employee_mobile" placeholder="请输入手机号" style="width:80%"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap">
              <el-form-item prop="rule_email">
              <span>邮箱：</span>
              <el-input v-model="employee_info.employee_email" placeholder="请输入邮箱" style="width:80%"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap">
              <el-form-item prop="rule_password">
              <span>密码：</span>
              <el-input v-model="employee_info.employee_password" placeholder="请输入密码" style="width:80%"></el-input>
              </el-form-item>
            </el-col>
        </el-row>
      </el-form>
    <div class="submit_reg">
       <el-button round @click="regist_now">注册</el-button>
    </div>
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
      ruleForm:{
          rule_name:'',
          rule_mobile:'',
          rule_email:'',
          rule_password:''
      },
      employee_info:{
        employee_name: '',
        employee_mobile:'',
        employee_email:'',
        employee_password:''
      },
      rules: {
        rule_name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 2 到 20个字符', trigger: 'blur' }
        ],
        rule_mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' }
        ],
        rule_email: [
          { required: true, message: '请输入邮箱', trigger: 'change' }
        ],
        rule_password: [
           { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods:{
    regist_now(){
      var validateMobilePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('负责人手机号不可为空'));
        } else {
          if (value !== '') { 
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的手机号码'));
            }
          }
          callback();
        }
      };


      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请正确填写邮箱'));
        } else {
          if (value !== '') { 
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
        }
      };


      let employee_info = {
        employee_name: this.employee_info.employee_name,
        employee_mobile:this.employee_info.employee_mobile,
        employee_email:this.employee_info.employee_email,
        employee_password:this.employee_info.employee_password
      }
      axios.post('/api/employee_regist',employee_info).then((res)=>{
        console.log(res)
        this.employee_info = {
        employee_name: '',
        employee_mobile:'',
        employee_email:'',
        employee_password:''
      }
      }).catch((err)=>{
        console.log(err)
      })
    },
    goback(){
      // this.history.go(-1)
       this.$router.go(-1)
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
  margin: 400px 0 300px -50px;
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
.goback_icon{
  color: #fff;
  float: left;
  margin: 50px;
  font-size: 100px;
}
</style>
