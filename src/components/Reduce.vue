<template>
  <div>
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click="reduce">-1</button>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    reduce(){
      this.$store.commit('reduce')
    }
  }
}
</script>
<style scoped>

</style>