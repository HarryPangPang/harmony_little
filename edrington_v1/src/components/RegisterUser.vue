<template>
  <div class="register_wrap">
    <!-- :gutter="10"行间隔 -->
    <headerback/>
    <img src="../assets/edrington.png" class="edrington_logo"/>
    <div class="register_wrap_2">
      <el-form :model="employee_info" :rules="rules" ref="employee_info">
        <el-row :gutter="10" :span="6" >

            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap">
              <el-form-item prop="employee_name">
                  <span>姓名：</span>
                  <el-input v-model="employee_info.employee_name" placeholder="请输入姓名" style="width:80%"></el-input>
              </el-form-item>
            </el-col>
            
            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap"> 
              <el-form-item prop="employee_mobile">
                <span>手机：</span>
                <el-input v-model="employee_info.employee_mobile" placeholder="请输入手机号" style="width:80%"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap">
              <el-form-item prop="employee_email">
                <span>邮箱：</span>
                <el-input v-model="employee_info.employee_email" placeholder="请输入邮箱" style="width:80%"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap">
              <el-form-item prop="employee_password">
                <span>密码：</span>
                <el-input v-model="employee_info.employee_password" placeholder="请输入密码" style="width:80%"></el-input>
              </el-form-item>
            </el-col>
        </el-row>
      </el-form>
    <div class="submit_reg">
        <el-button round @click="regist_now('employee_info')" >注册</el-button>    
    </div>
    </div>
  </div>
</template>

<script>
// import {ajaxGet,ajaxPost} from '../public/http.js'
import axios from 'axios';
import headerback from '../public/header.vue'
export default {
  name: 'RegisterUser',
  created() {
  },
  components:{
    headerback
  },
  data () {
    var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
    return {
      employee_info:{
        employee_name: '',
        employee_mobile:'',
        employee_email:'',
        employee_password:''
      },
      rules: {
        employee_name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        employee_mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          {validator: checkPhone, trigger: 'change'}
        ],
        employee_email: [
          { required: true, message: '请输入邮箱地址', trigger: 'change' },
          { type: 'email', message: '请输入正确的邮箱地址',trigger: 'change' } 
        ],
        employee_password: [
           { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods:{
    regist_now(employee_info){
        this.$refs[employee_info].validate((valid) => {
          if (valid) {
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
              alert('注册成功')
              }).catch((err)=>{
                alert('注册失败')
                console.log(err)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message_wrap{
  width: 50%;
}
.el-message{
  width: 50%;
}
.input_wrap{
  margin: 20px 0;
}
.edrington_logo{
  width: 50%;
  margin: 300px 0 250px -50px;
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
</style>
