<template>
  <div class="register_wrap" >
    <div :is="item.component" :event_member_form = item.event_member_form v-for="item in items" ref="indexa">
      <memberitem :ref="item.index"></memberitem>
    </div>
    <div class="member_item">
    <div class="add_icon"><i class="el-icon-circle-plus-outline" @click="add_member_item"></i></div>
    <div class="add_icon"><i class="el-icon-remove-outline" @click="minus_member_item"></i></div>
    </div>
     <div class="submit_ico">
       <el-button @click="addcusmoer">提交</el-button>
     </div>
  </div>
</template>

<script>
import memberitem from '../public/memberitem.vue'
import axios from 'axios';
export default {
  name: 'EventMember',
  components:{
    memberitem
  },
  mounted() {
  },
  data(){
    return{
      count:0,
      items: [],
      event_member_form_collection:[]
    }
  },
  methods:{
    add_member_item(){
      this.items.push({
        'component': memberitem,
      })
    },
    minus_member_item(){
    this.items.pop({
        'component': memberitem,
      })
    },
    // 提交信息
    addcusmoer(){
      this.$router.push('/MainHome')
      this.event_member_form_collection = [];
      for(let i=0;i< this.items.length;i++){
       this.$refs.indexa[i].event_member_form.event_member_employee_id = JSON.parse(window.localStorage.getItem('login_info')).employee_id;
       this.$refs.indexa[i].event_member_form.event_member_event_num =  this.$route.query.event_num
       this.event_member_form_collection.push(this.$refs.indexa[i].event_member_form)
      }

      let cuu2 = []
      for (let m in this.event_member_form_collection){
          let cuur = []
          for (let n in this.event_member_form_collection[m]){
              cuur.push(this.event_member_form_collection[m][n])
          }
          cuu2.push(cuur)
        }
        axios.post('/api/add_event_member',cuu2).then((res)=>{
              console.log(res)
              this.$router.push('/MainHome')
          }).catch((err)=>{
              console.log(err)
           alert('错误！')
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-form{
    margin:100px 100px 60px 0;
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
  .submit_ico{
    text-align: center;
    margin-bottom: 50px;
  }
  .member_item{
    display: flex;
    justify-content: space-between;
    margin: 50px;
    /* color: aqua */
  }
  .el-button{
    width: 50%;
  }
</style>
