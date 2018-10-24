<template>
  <div class="header_wrap" >
      <i class="el-icon-back goback_icon" @click="goback"></i>
    </div>
</template>

<script>
export default {
  name: 'EventMheaderember',
  methods:{
      goback(){
      // this.history.go(-1)
       this.$router.go(-1)
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
</style>
