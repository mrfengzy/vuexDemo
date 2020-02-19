<template>
  <div>
    <my-add></my-add>
    <p>---</p>
    <my-reduce></my-reduce>
  </div>
</template>
<script>
import Add from './components/Add.vue'
import Reduce from './components/Reduce.vue'
export default {
  data() {
    return {}
  },
  components: {
    'my-add': Add,
    'my-reduce': Reduce
  }
}
</script>
<style scoped>
</style>