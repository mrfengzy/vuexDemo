<template>
  <div>
    <a-input
    style="width: 400px"
    :value="inputValue"
    @change="handelInputChange"
    >
    </a-input>
    <a-button @click="addItemToList">添加事项</a-button>
    <a-list
        itemLayout="horizontal"
        :dataSource="getList"
        style="width: 400px"
        bordered
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-checkbox :checked="item.done" @change="(e)=>{checkboxChanged(e,item.id)}">{{item.title}}</a-checkbox>
        <a slot="actions" @click="removeById(item.id)">删除</a>
      </a-list-item>

      <div slot="footer" class="footer">
        <span>{{getDoneNum}}条剩余</span>
        <a-button-group>
          <a-button :type="type == 'all' ? 'primary' : 'default'" @click="changeList('all')">全部</a-button>
          <a-button :type="type == 'unDone' ? 'primary' : 'default'" @click="changeList('unDone')">未完成</a-button>
          <a-button :type="type == 'done' ? 'primary' : 'default'" @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <a slot="remove" @click="removeFinished">清除已完成</a>
      </div>
  </a-list>
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
  data(){
    return{
      
    }
  },
  created(){
    this.$store.dispatch('getList')
  },
  computed:{
    ...mapState(['list','inputValue','type']),
    ...mapGetters(['getDoneNum','getList'])
  },
  methods:{
    handelInputChange(e){
      console.log(e.target.value)
      this.$store.commit('setInputValue',e.target.value)
    },
    //新增item
    addItemToList(){
      console.log(this.inputValue)
      if(this.inputValue.trim().length <= 0){
        return this.$message.warning('文本框内容不能为空')
      }
      this.$store.commit('addItem')
    },
    removeById(id){
      this.$store.commit('removeItem',id)
    },
    checkboxChanged(e,id){
      console.log(id)
      console.log(e.target.checked)
      const param={
        id:id,
        status:e.target.checked
      }
      this.$store.commit('changeStatus',param)
    },
    removeFinished(){
      this.$store.commit('clearFinish')
    },
    changeList(type){
      this.$store.commit('saveKey',type)
      // this.$store.commit('clearFinish',type)
    }
  }
}
</script>
<style scoped>
.footer{
  /* margin-top: 200px; */
}
</style>