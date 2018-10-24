<template>
  <div class="EventHistory_wrap" >
      <div class="history_card_wrap">
          <el-row :gutter="10" :span="6" >
            <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="item in item_event_history" :key="item.event_num">  -->
                <el-card>
                    <div class="conten_list_wrap"><strong>活动名称：</strong>{{item_event_history.event_name}} </div>
                    <div class="conten_list_wrap"><strong>活动时间：</strong>{{item_event_history.event_time}} </div>
                    <div class="conten_list_wrap"><strong>活动类型：</strong>{{item_event_history.event_type}} </div>
                    <div class="conten_list_wrap"><strong>活动省份：</strong>{{item_event_history.event_shengfen}} </div>
                    <div class="conten_list_wrap"><strong>活动城市：</strong>{{item_event_history.event_city}} </div>
                    <div class="conten_list_wrap"><strong>申请部门：</strong>{{item_event_history.event_apply_part}} </div>
                    <div class="conten_list_wrap"><strong>&nbsp;&nbsp;&nbsp;&nbsp;申请人：</strong>{{item_event_history.event_apply_member}} </div>
                    <div class="conten_list_wrap"><strong>场地名称：</strong>{{item_event_history.event_location}} </div>
                    <div class="conten_list_wrap"><strong>场地类型：</strong>{{item_event_history.event_loaction_type}} </div>
                    <div class="conten_list_wrap"><strong>详细地址：</strong>{{item_event_history.event_address_detail}} </div>
                    <div class="conten_list_wrap"><strong>听众类型：</strong>{{item_event_history.event_listener_type}} </div>
                    <div class="conten_list_wrap"><strong>听众人数：</strong>{{item_event_history.event_listenr_num}} </div>
                    <div class="conten_list_wrap"><strong>&nbsp;&nbsp;&nbsp;&nbsp;组织人：</strong>{{item_event_history.event_host_name}} </div>
                    <div class="fun_button">
                        <el-button type="" icon="el-icon-edit" @click="edit_this_event()">编&nbsp;&nbsp;&nbsp;&nbsp;辑</el-button>
                        <!-- <el-button type="" icon="el-icon-circle-plus-outline"  @click="add_this_event_customer(item)">添加客户</el-button> -->
                    </div>
                </el-card>
            <!-- </el-col> -->
        </el-row>
  
      </div>

  </div>
</template>

<script>
// import {ajaxGet,ajaxPost} from '../public/http.js'
import axios from 'axios';
export default {
  name: 'EventHistoryDetail',
  created() {
    this.load_item_event()
  },
  data () {
    return {
        item_event_history:''
    }
  },
  methods:{
    load_item_event(){ 
     this.item_event_history =  this.$route.query
    },
    edit_this_event(){
        alert('暂不支持编辑')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.history_card_wrap{
    margin: 30px;
    font-size: 60px;
}
.fun_button{
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    margin:50px 15% 0 15%;
}
.el-button{
    padding: 24px 40px;
}
.conten_list_wrap{
    margin-bottom: 30px;
    border-bottom: 2px dashed #E4E7ED
}
</style>
