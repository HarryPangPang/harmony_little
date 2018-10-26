<template>
  <div class="MainHome_wrap">
    <div @click="goback" class="el-icon-back1">
         <i class="el-icon-back goback_icon" ></i>
      </div>
    <el-row :gutter="10" :span="16" >
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
           <el-button @click="goSubmitEvent" >提交活动信息</el-button>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <el-button @click="goEventHistory">查看历史活动</el-button>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
           <el-button @click="changeuserinfo">修改个人信息</el-button>
        </el-col>           
    </el-row>
  </div>
</template>

<script>
import headerback from '../public/header.vue'
export default {
  name: 'MainHome',
  components:{
    headerback
  },
  methods:{
     goback(){
      //  this.$router.go(-1)
      this.$router.push('/')
    },
    goSubmitEvent(){
        this.$router.push('/SubmitEvent')
    },
    goEventHistory(){
        this.$router.push('/EventHistory')
    },
    changeuserinfo(){
      alert('暂不支持')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goback_icon{
  color: #fff;
  float: left;
  margin: 50px;
  font-size: 100px;
}
.el-icon-back1{
    height: 150px;
}
  .el-row{
    /* display: table-cell; */
    height: 100%;
    padding-top: 50%;
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
