<template>
  <div>
    <el-form :model="event_form" :rules="rules" ref="event_form" label-width="100px">
      <el-form-item label="活动名称" prop="event_name">
        <el-input v-model="event_form.event_name"></el-input>
      </el-form-item>

      <el-form-item label="活动时间" prop="event_time">
        <el-col :span="11">
         <el-date-picker  v-model="event_form.event_time" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"  placeholder="选择日期"> </el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="活动类型" prop="event_type">
        <el-select v-model="event_form.event_type" placeholder="请选择活动类型">
          <el-option label="课堂" value="课堂"></el-option>
          <el-option label="沙龙" value="沙龙"></el-option>
          <el-option label="晚宴" value="晚宴"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动城市">
          <el-select
          v-model="sheng"
          @change="choseProvince"
          placeholder="省级地区">
          <el-option
            v-for="item in province"
            :key="item.id"
            :label="item.value"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select
          v-model="shi"
          @change="choseCity"
          placeholder="市级地区">
          <el-option
            v-for="item in shi1"
            :key="item.id"
            :label="item.value"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select
          v-model="qu"
          @change="choseBlock"
          placeholder="区级地区">
          <el-option
            v-for="item in qu1"
            :key="item.id"
            :label="item.value"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请部门" prop="event_apply_part">
        <el-select v-model="event_form.event_apply_part" placeholder="请选择申请部门">
          <el-option label="Training" value="Training"></el-option>
          <el-option label="Sales" value="Sales"></el-option>
          <el-option label="DTC" value="DTC"></el-option>
          <el-option label="MKT" value="MKT"></el-option>
          <el-option label="ATR" value="ATR"></el-option>
          <el-option label="BackOffice" value="BackOffice"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请人" prop="event_apply_member">
        <el-input v-model="event_form.event_apply_member"></el-input>
      </el-form-item>
      <el-form-item label="场地名称" prop="event_location">
        <el-input v-model="event_form.event_location"></el-input>
      </el-form-item>
      <el-form-item label="场地类型" prop="event_loaction_type">
        <el-select v-model="event_form.event_loaction_type" placeholder="请选择场地类型">
          <el-option label="Training" value="Training"></el-option>
          <el-option label="Sales" value="Sales"></el-option>
          <el-option label="DTC" value="DTC"></el-option>
          <el-option label="MKT" value="MKT"></el-option>
          <el-option label="ATR" value="ATR"></el-option>
          <el-option label="BackOffice" value="BackOffice"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详细地址" prop="event_address_detail">
        <el-input v-model="event_form.event_address_detail"></el-input>
      </el-form-item>
     <el-form-item label="听众类型" prop="event_listener_type">
        <el-select v-model="event_form.event_listener_type" placeholder="请选择听众类型">
          <el-option label="Customer" value="Customer"></el-option>
          <el-option label="Trade" value="Trade"></el-option>
          <el-option label="Internal-Staff" value="Internal-Staff"></el-option>
          <el-option label="ATR" value="ATR"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="听众人数" prop="event_listenr_num">
        <el-input v-model.number="event_form.event_listenr_num"></el-input>
      </el-form-item>
      <el-form-item label="组织人姓名" prop="event_host_name">
        <el-input v-model="event_form.event_host_name"></el-input>
      </el-form-item>

        <!-- <div class="add_icon"><i class="el-icon-circle-plus-outline" @click="add_member_item"></i></div> -->

      <div class="submit_icon">
        <el-button type="primary" @click="submitForm('event_form')">提交活动信息</el-button>
        <el-button @click="resetForm('event_form')">重&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</el-button>
      </div>
    </el-form> 
  </div>
</template>

<script>
import axios from 'axios'
// import EventMember from './EventMember.vue'
  export default {
    // name: 'SubmitEvent',
    components:{
      // EventMember
    },
    
    created() {
      this.getCityData()
    },
    data() {
      return {
      mapJson:'../../static/map.json',
      province:'',
      sheng: '',
      shi: '',
      shi1: [],
      qu: '',
      qu1: [],
      city:'',
      block:'',
      event_form: {
          event_member_id: '',
          event_name: '',
          event_time: '',
          event_type: '',
          // 
          event_shengfen: '',
          event_shengfen2: '',
          event_city: '',
          // 
          event_apply_part: '',
          event_apply_member: '',
          event_location:'',
          event_loaction_type:'',
          event_address_detail:'',
          event_listener_type:'',
          event_listenr_num:'',
          event_host_name:''
        },
        rules: {
          event_name: [
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          event_time: [
            { type: 'string',required: true, message: '请选择日期', trigger: 'change' }
          ],
          event_type: [
            { required: true, message: '请选择活动类型', trigger: 'change' }
          ],
          event_apply_part: [
            { required: true, message: '请输入申请部门', trigger: 'change' }
          ],
          event_apply_member: [
            {  required: true, message: '请输入申请人', trigger: 'change' }
          ],
          event_loaction_type:[
            { required: true, message: '请选择场地类型', trigger: 'change' }
          ],
          event_location: [
            { required: true, message: '请输入场地', trigger: 'change' }
          ],
          event_address_detail: [
            { required: true, message: '请输入详细地址', trigger: 'change' }
          ],
          event_listener_type: [
            { required: true, message: '请选择听众类型', trigger: 'change' }
          ],
          event_listenr_num: [
            { required: true, message: '请输入听众人数'},
            { type: 'number', message: '人数必须为数字值'}
          ],
          event_host_name:[
            { required: true, message: '请输入组织者姓名', trigger: 'change' }  
          ]
        }
      };
    },
    methods: {
          // 加载china地点数据，三级
      getCityData:function(){
        var that = this
        axios.get(this.mapJson).then(function(response){
          if (response.status==200) {
            var data = response.data
            that.province = []
            that.city = []
            that.block = []
            // 省市区数据分类
            for (var item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
              } else {//区
                that.block.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }
            // 分类区级
            for(var item1 in that.city) {
              for(var item2 in that.block) {
                if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                  that.city[item1].children.push(that.block[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
            // 选省
      choseProvince:function(e) {
        for (var index2 in this.province) {
          if (e === this.province[index2].id) {
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 =this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            this.E = this.qu1[0].id
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (var index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            // console.log(this.E)
          }
        }
      },
      // 选区
      choseBlock:function(e) {
        this.E=e;
        // console.log(this.E)
      },

      submitForm(event_form) {
         this.$router.push('/EventMember')
        // this.$refs[event_form].validate((valid) => {
        //   if (valid) {
        //    let event_form = {
        //       event_member_id: '',
        //       event_name: this.event_form.event_name,
        //       event_time: this.event_form.event_time,
        //       event_type:this.event_form.event_type,
        //       event_shengfen:'',
        //       event_shengfen2:this.shi,
        //       event_city: this.qu, 
        //       event_apply_part:this.event_form.event_apply_part,
        //       event_apply_member:this.event_form.event_apply_member,
        //       event_location:this.event_form.event_location,
        //       event_loaction_type:this.event_form.event_loaction_type,
        //       event_address_detail:this.event_form.event_address_detail,
        //       event_listener_type:this.event_form.event_listener_type,
        //       event_listenr_num:this.event_form.event_listenr_num,
        //       event_host_name:this.event_form.event_host_name
        //     }
 
        //     event_form.event_member_id = JSON.parse(window.localStorage.getItem('login_info')).employee_id;
        //     console.log(event_form.event_member_id)
        //     for(let v of this.province ){
        //       if (this.sheng == v.id){
        //          event_form.event_shengfen = v.value
        //       }
        //     }  
        //     console.log(event_form)
        //     if(event_form.event_member_id == '' || event_form.event_member_id == null || event_form.event_member_id == undefined){
        //       alert('内部出错')
        //     }
        //     else{
        //     axios.post('/api/event_submit',event_form).then((res)=>{
        //         this.$router.push('/EventHistory')
        //       }).catch((err)=>{
        //         console.log(err)
        //       })
        //     }
         
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(event_form) {
        this.shi='';
        this.sheng='';
        this.qu='';
        this.$refs[event_form].resetFields();

      },
      add_member_item(){
          console.log('a')
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submit_icon{
  width: 100%;
  text-align: center;
}
  .el-form{
    margin:100px 100px 60px 0;
  }
  .el-select{
    width: 100%;
  }
  .add_icon_wrap{
margin: 0 !important;
  }
  .add_icon{
    font-size: 150px;
    text-align: center;
    width: 100%;
    margin-bottom: 100px;
  }
</style>
