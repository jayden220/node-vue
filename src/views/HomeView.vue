<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   {{ this.$store.state.user }}
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  },
  computed:{
    getHome(){
      return this.$store.dispatch('getUsers')
  },

},
mounted(){
    this.getHome
  }
}
</script>
