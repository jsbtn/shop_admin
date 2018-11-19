<template>
    <div class="_contenter">
      <div class="head">
          <el-button type="primary" @click="clickButton" icon="el-icon-edit" >新增代理商</el-button>
          <serch style="margin-top:20px;" ref="serch" v-on:serch="watch_tableClick" ></serch>
      </div>
      <div class="body">
        <template>
          <el-table  :data="tableData"  stripe border style="width: 100%">
            <el-table-column prop="name" label="姓名" > </el-table-column>
            <el-table-column prop="phone" width="150px;" label="手机号" > </el-table-column>
            <el-table-column prop="firmName" label="公司名称" > </el-table-column>
            <el-table-column prop="gardeName" label="等级" > </el-table-column>
            <el-table-column prop="teamNum" label="团队数量" > </el-table-column>
            <el-table-column prop="sendTime" width="180px;" label="创建时间" > </el-table-column>
            <el-table-column prop="validityTime" width="220px;" label="有效期" > </el-table-column>
            <el-table-column prop="balance" label="余额" > </el-table-column>
            <el-table-column prop="selfSelling" label="自销交易额" > </el-table-column>
            <el-table-column prop="subordinate" label="下级交易额" > </el-table-column>
            <el-table-column prop="stateName" label="状态" > </el-table-column>
            <el-table-column prop="address" width="220px;" label="操作" > 
                <template slot-scope="props">
                    <el-button size='mini' type="primary" @click="">编辑</el-button>
                    <el-button size='mini' type="primary" @click="">禁用</el-button>
                    <el-button size='mini' type="primary" @click="gotoRow">详情</el-button>
                </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="footer">
          
      </div>
    </div>
</template>

<script>
  import store from '../../store'
  // import { getToken } from '@/utils/auth'
  import serch from './components/serch'

  export default {
    components: { serch },
    name: 'refunds',
    data() {      
      return { 
        tableData: [
          {
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            phone:"13388582938",
            firmName:"无法",
            gardeName:"一级",
            garde:1,
            teamNum:"20",
            sendTime:"2018.11.12",
            validityTime:"2018-10-01至2019-10-01",
            balance:"100",
            selfSelling:"1000",
            subordinate:"2000",
            stateName:"正常",
            state:1,
          }
        ]  
      }
    },
    created() { 

    },
    methods: {
      watch_tableClick(data){
        console.log(data)
      },  
      clickButton(){
        this.$router.push({
          path:"/magerSale/sendAgent/",
        })
      },
      gotoRow(row){
        this.$router.push({
          path:"/magerSale/agentDetail/",
        })
      },

    },
    computed: {

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .body{
      margin-top: 20px;
    }
    ._contenter{
      padding:20px 40px;
    }
    
</style>