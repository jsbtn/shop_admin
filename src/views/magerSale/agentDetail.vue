<template>
    <div class="_contenter">
      <div class="head">
        <div class="_box">
          <div class="len">姓名：张三</div>
          <div class="len">手机号：18959658958</div>
          <div class="len">等级：一级</div>
          <div class="len">公司名称：某某公司</div>
          <div class="len">公司地址：成都市XXXXX</div>
          <div class="len">有效期：2018-10-01至2019-10-01</div>
          <div class="len">创建时间：2018-10-01 16:00:20</div>
          <div class="len">团队数量：20</div>
          <div class="len">自销交易额：500.00</div>
          <div class="len">下级交易额：10000.00</div>
          <div class="len">可提现余额：5000.00</div>
          <div class="len">已提现：200.00</div>
          <div class="len">累计收益：1000.04</div>
          <div class="len">自销收益：100.00</div>
          <div class="len">分销收益：100.23</div>
          <div class="len">提现账户类型：银行卡</div>
          <div class="len">开户银行：中国银行</div>
          <div class="len">开户姓名：张三</div>
          <div class="len">银行账号：555515114544145111</div>
          <div class="len">备注：这是代理商的备注信息第三方水电费的水电费收到时代发生的</div>
        </div>
      </div>
      <div class="body">
          <div class="tabel">
            <div class="card-panel">
              <el-tabs :value="tabsName" @tab-click="handleClick" type="border-card">
                <el-tab-pane name="one" label="团队成员">

                  <template>
                    <el-table  :data="tableData"  stripe border style="width: 60%">
                      <el-table-column align="center" prop="gardeName" width="220px;" label="头像" >
                        <template slot-scope="props">
                            <img style="width: 60px;height: 60px; border:1px solid #f1f1f1;" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3839527043,3300320047&fm=58&bpow=400&bpoh=648"/>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" prop="name" label="昵称" > </el-table-column>
                      <el-table-column align="center" prop="phone" label="手机号" > </el-table-column>
                      <el-table-column align="center" prop="sendTime"  label="注册时间" > </el-table-column>
                      <el-table-column align="center" prop="salePrice" label="交易额" ></el-table-column>
                    </el-table>
                  </template>
                  <div style="display:flex; justify-content: space-between;">
                    <div style="margin-top:40px;padding:0px;height:0px; font-size:14px;color:#333;">
                      总人数：<span style="color:red;">{{ownerCount}}</span>（人），
                      总金额：<span style="color:red;"></span>（元）
                    </div>
                    <div class="pagination-container">
                      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                     :current-page="listQuery.pageNow" :page-sizes="[15]" :page-size="listQuery.rowNum"
                                     layout="total, sizes, prev, pager, next, jumper" :total="dataCount">
                      </el-pagination>
                    </div>
                  </div>

                </el-tab-pane>
                <el-tab-pane name="two" label="已提现记录">

                  <template>
                    <el-table  :data="tableData"  stripe border style="width: 100%">
                      <el-table-column align="center" prop="name" width="180px;" label="提现编号" > </el-table-column>
                      <el-table-column align="center" prop="phone" width="150px;" label="提现金额" > </el-table-column>
                      <el-table-column align="center" prop="firmName" width="120px;" label="手续费" > </el-table-column>
                      <el-table-column align="center" prop="gardeName" width="120px;" label="提现状态" > </el-table-column>
                      <el-table-column align="center" prop="teamNum" width="200px;" label="申请时间" > </el-table-column>
                      <el-table-column align="center" prop="sendTime" width="200px;" label="审核时间" > </el-table-column>
                      <el-table-column align="center" prop="validityTime" width="200px;" label="打款时间" > </el-table-column>
                    </el-table>
                  </template>
                  <div style="display:flex; justify-content: space-between;">
                    <div style="margin-top:40px;padding:0px;height:0px; font-size:14px;color:#333;">
                      总人数：<span style="color:red;">{{ownerCount}}</span>（人），
                      总金额：<span style="color:red;"></span>（元）
                    </div>
                    <div class="pagination-container">
                      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                     :current-page="listQuery.pageNow" :page-sizes="[15]" :page-size="listQuery.rowNum"
                                     layout="total, sizes, prev, pager, next, jumper" :total="dataCount">
                      </el-pagination>
                    </div>
                  </div>

                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
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
        tabsName:"one",
        // 
        tableData:['1',2],
        ownerCount:0,
        dataCount:0,
        listQuery:{
          rowNum:10,
          pageNow:1,
        }
      }
    },
    created() { 

    },
    methods: {
      handleClick(tab) {
        this.tabsName =tab.name
      },
      handleSizeChange(val) {
        this.listQuery.rowNum = val
      },
      handleCurrentChange(val) {
        this.listQuery.pageNow = val
      },
    },
    computed: {

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    *{
      box-sizing: border-box;
    }
    .body{
      margin-top: 20px;
    }
    ._contenter{
      padding:20px 40px;
    }
    ._box{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      border: 1px solid #f1f1f1;
      padding: 20px;
    }
    ._box .len{
        width: 20%;
        font-size: 14px;
        line-height: 30px;
        color: #444;
    }
</style>