<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click="adda">+1</button>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['count'])
  },
  methods:{
    ...mapMutations(['add']),
    adda(){
      this.add(3)
    }
   
  }
}
</script>
<style scoped>

</style>