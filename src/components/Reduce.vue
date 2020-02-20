<template>
  <div>
    <h3>{{showNum}}</h3>
    <button @click="reduce">-1</button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{

    }
  },
  methods:{
    reduce(){
      this.$store.commit('reduce',4)
    }
  },
  computed:{
    ...mapGetters(['showNum'])
  }
}
</script>
<style scoped>

</style>