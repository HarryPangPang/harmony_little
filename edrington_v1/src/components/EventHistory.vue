<template>
  <div class="EventHistory_wrap" >
      <div v-for="item in all_event_history" :key="item"  class="box-card">
          <el-row :gutter="10" :span="6" >
        
            <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="input_wrap"> 
                <el-card >
                    <div >
                        {{'列表内容 ' + item.event_name }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
  
      </div>

  </div>
</template>

<script>
// import {ajaxGet,ajaxPost} from '../public/http.js'
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
