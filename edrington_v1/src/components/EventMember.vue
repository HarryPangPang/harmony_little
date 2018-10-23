<template>
  <div class="register_wrap" >
    <div :is="item.component" :event_member_form = item.event_member_form v-for="item in items" ref="indexa">
      <memberitem :ref="item.index"></memberitem>
    </div>
    <div class="add_icon"><i class="el-icon-circle-plus-outline" @click="add_member_item"></i></div>
    <div class="add_icon"><i class="el-icon-remove-outline" @click="minus_member_item"></i></div>
    <button @click="addcusmoer">提交</button>
  </div>
</template>

<script>
import memberitem from './memberitem.vue'
import axios from 'axios';
export default {
  name: 'EventMember',
  components:{
    memberitem
  },
  mounted() {
    // this.addcusmoer();
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
      
      for(let i=0;i< this.items.length;i++){
       this.$refs.indexa[i].event_member_form.event_member_employee_id = JSON.parse(window.localStorage.getItem('login_info')).employee_id;
       this.event_member_form_collection.push(this.$refs.indexa[i].event_member_form)
      }
      console.log(this.event_member_form_collection)
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
</style>
