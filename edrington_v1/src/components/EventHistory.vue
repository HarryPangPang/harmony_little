<template>
  <div class="EventHistory_wrap" >
      <div @click="goback" class="el-icon-back1">
         <i class="el-icon-back goback_icon" ></i>
      </div>
      <div class="history_card_wrap">
          <el-row :gutter="10" :span="6" >
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="item in all_event_history" :key="item.event_num"> 
                <el-card>
                    <div class="conten_list_wrap"><strong>活动名称：</strong>{{item.event_name}} </div>
                    <div class="conten_list_wrap"><strong>活动时间：</strong>{{item.event_time}} </div>
                    <div class="conten_list_wrap"><strong>&nbsp;&nbsp;&nbsp;&nbsp;组织人：</strong>{{item.event_host_name}} </div>
                    <div class="conten_list_wrap"> <strong>场地名称：</strong>{{item.event_location}}</div>
                    <div class="fun_button">
                        <el-button type="" icon="el-icon-view" @click="see_this_event(item)">查&nbsp;&nbsp;&nbsp;&nbsp;看</el-button>
                        <el-button type="" icon="el-icon-circle-plus-outline"  @click="add_this_event_customer(item)">添加客户</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
  
      </div>

  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'EventHistory',
  created() {
    this.load_all_event()
  },
  data () {
    return {
        all_event_history:''
    }
  },
  methods:{
    load_all_event(){ 
      let event_member_id =  JSON.parse(window.localStorage.getItem('login_info')).employee_id;
      axios.get(`/api/event_history/${event_member_id}`).then((res)=>{
            this.all_event_history = res.data
      }).catch((err)=>{
        alert('获取历史数据失败')
        console.log(err)
      })
    },
    see_this_event(item){
        this.$router.push({path: '/EventHistoryDetail', query: item})
        // console.log(item)
    },
    add_this_event_customer(item){
        this.$router.push({path: '/EventMember', query: item})
    },
     goback(){
       this.$router.go(-1)
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
.goback_icon{
  color: #003366;
  float: left;
  margin: 50px;
  font-size: 100px;
}
.el-icon-back1{
    height: 150px;
}
</style>
