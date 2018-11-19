<template>
    <el-form :model="temp" label-width="150px" style="margin-top:40px">
            <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="昵称：" prop="orderNum">
                <el-input  class="_input"  v-model="temp.orderNum" placeholder="请输入昵称" style="width:250px"></el-input>
              </el-form-item>
            </el-col>  
            <el-col :span="6">
             <el-form-item label="手机号码：" prop="orderState">
                <el-input  class="_input"  v-model="temp.orderState" placeholder="请输入手机号码" style="width:250px"></el-input>
              </el-form-item>
            </el-col>  
             <el-col :span="6">
              <el-form-item label="来源" prop="orderType">
                <el-select filterable clearable @change="" class="filter-item" v-model="temp.orderType" placeholder="请选择">
                  <el-option v-for="item in orderTypes" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
             </el-row>
              <el-row :gutter="20">
            <el-row :gutter="20">
          <el-form-item style="display: inline-block; margin-left: 10px;" label="反馈时间：" prop="starTime">
            <el-date-picker
              v-model="temp.starTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"/>
          </el-form-item>
            <div style="display: inline-block; text-align: center; margin: 0px 20px; height: 40px;line-height: 40px;" > 至 </div>
            <el-date-picker
              v-model="temp.endTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"/>
      </el-row>
           
             </el-row>
              <el-row style="margin:0 0 40px 150px">
                 <el-button type="primary">查询</el-button>
                  <el-button>重置</el-button>
             </el-row>
              <div style="margin-left:40px">
                <template>
                    <el-table
                    :data="shopList"
                    :row-class-name="tableRowClassName"
                    border
                    style="width: 100%">
                    <el-table-column align="center" prop="date" label="昵称"></el-table-column>
                    <el-table-column align="center" prop="evaluate" label="手机号码"></el-table-column>
                    <el-table-column align="center" prop="Member" label="微信号码" ></el-table-column>
                    <el-table-column align="center" prop="score" label="邮箱" ></el-table-column>
                    <el-table-column align="center" prop="content" label="来源"></el-table-column>
                    <el-table-column align="center" prop="score_time" label="反馈内容"></el-table-column>
                    <el-table-column align="center" prop="state" label="反馈时间"></el-table-column>
                    
                    </el-table>
                </template>
          </div>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
          value1: true,
          value2: true,
           shopList: [{
          date:'王大魔王',
          evaluate: '18700235647',
          Member: 'zw318212',
          score: '10514521@qq.com',
          content: '呵呵呵呵呵男男男案',
          score_time:'官方就感觉到高低贵贱发动机盖各回各家',
          state:'2018-10124'
        }],
        orderTypes:[{
          name:'全部',
          name:'小程序'
        }],
       temp:{
          // shopName:"",
          orderNum:"",
          orderState:"",
          orderOrign:"",
        }
      }
    },
    methods: {
    
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.img{
      display: inline-block;
      width: 100px;
      height: 60px;
      background-repeat: no-repeat;
      border: 1px solid #999;
   }  
</style>