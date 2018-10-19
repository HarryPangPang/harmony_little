<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    //  Bmob.User.login('username','password').then(res => {
    //     console.log(res)
    //   }).catch(err => {
    //     console.log(err)
    //   });
    let current = Bmob.User.current()
    console.log(current)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
