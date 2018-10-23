<template>
  <div class="register_wrap" >
    <!-- :rules="rules"  -->
    <el-form :model="event_member_form" ref="event_member_form" label-width="100px">
      <el-form-item label="客户名称" prop="event_member_name">
        <el-input v-model="event_member_form.event_member_name"></el-input>
      </el-form-item>
      <el-form-item label="客户性别" prop="event_member_sex">
        <el-select v-model="event_member_form.event_member_sex" placeholder="请选择性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系类型" prop="event_member_contact_type">
        <el-select v-model="event_member_form.event_member_contact_type" placeholder="请选择联系类型">
          <el-option label="手机" value="手机"></el-option>
          <el-option label="邮箱" value="邮箱"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系信息" prop="event_member_contact_info">
        <el-input v-model="event_member_form.event_member_contact_info"></el-input>
      </el-form-item>
      <el-form-item label="联系类型" prop="event_member_contact_type2">
        <el-select v-model="event_member_form.event_member_contact_type2" placeholder="请选择联系类型">
          <el-option label="手机" value="手机"></el-option>
          <el-option label="邮箱" value="邮箱"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系信息2" prop="event_member_contact_info2">
        <el-input v-model="event_member_form.event_member_contact_info2"></el-input>
      </el-form-item>
      <!-- <div class="add_icon"><i class="el-icon-circle-plus-outline" @click="add_member_item"></i></div> -->

    </el-form>
      
    </div>
</template>

<script>
// import {ajaxGet,ajaxPost} from '../public/http.js'
import axios from 'axios';
export default {
  // props:['event_member_form'],
  name: 'EventMember',
  data(){
    return{
      event_member_form:{
        event_member_employee_id:'',
        event_member_event_num:'',
        event_member_name:'',
        event_member_sex:'',
        event_member_contact_type:'',
        event_member_contact_info:'',
        event_member_contact_type2:'',
        event_member_contact_info2:''
      }
    }
  },
  methods:{
    add_member_item(){
      console.log(this.event_member_form)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-form{
    padding:100px 100px 60px 0;
    border-bottom: 10px solid #dedede;
  }
  .el-select{
    width: 100%;
  }
    .add_icon{
    font-size: 150px;
    text-align: center;
    width: 100%;
    margin-bottom: 100px;
  }
</style>
