<template>
  <div class="MainHome_wrap">
    <el-row :gutter="10" :span="16" >
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
           <el-button @click="goSubmitEvent" >提交活动信息</el-button>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <el-button @click="goEventHistory">查看历史活动</el-button>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
           <el-button >修改个人信息</el-button>
        </el-col>           
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MainHome',
  created() {
  },
  data () {
    return {
    }
  },
  methods:{
    goSubmitEvent(){
        this.$router.push('/SubmitEvent')
    },
    goEventHistory(){
        this.$router.push('/EventHistory')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-row{
    display: table-cell;
    height: 100%;
    vertical-align: middle;
   width: 100%;
  }
  .el-col{
    display:flex;justify-content:center;align-items:center;
    margin: 70px 0;
  }
  .MainHome_wrap{
    height: 100%;
    display: table;
    width: 100%;
    background-color: #003366;
    }
</style>
