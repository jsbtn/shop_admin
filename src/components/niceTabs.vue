<template>
  <el-row>
    <div class="tabbox">
      <div v-for="item in list" :key="item.id" :class=" item.bolen ? 'tab act' : 'tab' " @click="serchbtn(item.id)">{{ item.name }}</div>
    </div>
  </el-row>
</template>
<script>
import { getToken } from '@/utils/auth'
export default {
  name: 'NiceTab',
  props: {
    tablist: {
      type: Array,
      required: true
    }
  },
  computed: {
    list() {
      return this.tablist
    }
  },
  methods: {
    serchbtn(id) {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].bolen = this.list[i].id == id
      }
      this.$emit('tabid', id)
    }
  }

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .tabbox {
      display: inline-block;
      border:1px solid #E4E4FF;
      border-bottom: 0px;
      overflow: hidden;
    }
    .tabbox .tab{
      display: inline-block;
      float: left;
      height: 40px;
      line-height: 40px;
      padding: 0px 20px;
      font-size: 14px;
      border-bottom: 1px solid #E4E4FF;
      color: #555;
      background: #f5f7fa;
      cursor: pointer;
    }
    .tabbox .tab:hover{
      opacity: 0.9;
      transition: 0.2s;
      background: #fff;
      border-bottom: none;
    }
    .tabbox .act{
      background: #fff;
      border-bottom: none;
    }
</style>
