<template>
  <div>
      <el-dialog  :visible.sync="meng2"  width="40%" >
        <div slot="title" class="_title">
          <span class="name">修改商品价格</span>
        </div>
        <template>
          <el-table :span-method="objectSpanMethod" :data="list" border style="width: 100%">
            <el-table-column prop="date" label="商品" > </el-table-column>
            <el-table-column prop="date" label="单价" > </el-table-column>
            <el-table-column prop="date" label="数量" > </el-table-column>
            <el-table-column prop="date" label="优惠" > </el-table-column>
            <el-table-column prop="date" label="小计" > </el-table-column>
            <el-table-column prop="date" label="涨价或减价" > </el-table-column>
            <el-table-column prop="date" label="运费" > </el-table-column>
          </el-table>
        </template>
        <div class="dlalogfooter"> 
          <div class="name1">计算价格</div>
          <div  class="_box">
            <div style="font-size: 13px; color: #808080;"  class="_len"><span style="color: #333;font-weight: 600;">收获地址</span>四川省 成都市 </div>
            <div style="font-size: 13px; color: #808080;"  class="_len"><span style="color: #333;font-weight: 600;">买家实付</span>四川省 成都市 </div>
            <div style="font-size: 13px; color: #808080;"  class="_len"><span style="color: #333;font-weight: 600;">买家==信息**f4ds5 </span></div>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" @click="meng2 = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="saveCalculation">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>
<script>
  import { getToken } from '@/utils/auth'
  export default {
    props: {
      //计算的数组
      dataList: {
        type:Array
      },
      // 计算规则
      obj:{
        type:Object
      }
    },
    data() {
      return {
          price:"0",
          meng2:false,
      }
    },
    methods: {  
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        let list = this.list
        if (columnIndex === 0) {
          if (rowIndex % list.length === 0) {
            return {
              rowspan: list.length,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      saveCalculation(){
        this.meng2 = false
        let obj = {
          price:this.price,
          data:this.dataList
        }
        this.$emit('upObj', obj)
      },
      show(){
        this.meng2 = true
      },
    },
    computed: {
      list() {
        return this.dataList
      },
    },

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    ._title{
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #f1f1f1;
      padding-bottom: 20px;
    }
    ._title > span{
      height: 100%;
    }
    ._title .name{
      font-size: 14px;
      color: #333;
    }
    ._title .cupos{
      font-size: 13px;
      color: #808080;
      vertical-align: middle;
      margin-left: 20px;
    }
    .dlalogfooter .name1{
      color:#409EFF; 
      line-height: 35px;
      height: 35px;  
    }
    .dlalogfooter ._box ._len{
      height: 20px;
      line-height: 20px;
    }
    .dlalogfooter ._box ._len span{
      margin-right: 10px;
    }
</style>