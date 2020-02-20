<template>
  <div>
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="adda">+1</button>
    <button @click="add2">+2</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['count'])
  },
  methods:{
    ...mapActions(['addAsync2']),
    ...mapMutations(['add']),
    adda(){
      this.$store.dispatch('addAsync',3)
    },
    add2(){
      this.addAsync2(2)
    }
   
  }
}
</script>
<style scoped>

</style>