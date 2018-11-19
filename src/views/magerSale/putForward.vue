<template>
    <div class="_contenter">
      <div style="overflow: hidden;" class="head">
        <div class="boxRow bg1">
            <div class="rowName">可提现</div>
            <div class="rowCont">52000.00元</div>
        </div>
        <div class="boxRow bg2">
            <div class="rowName">提现待审核</div>
            <div class="rowCont">52000.00元</div>
        </div>
        <div class="boxRow bg3">
            <div class="rowName">待打款</div>
            <div class="rowCont">52000.00元</div>
        </div>
      </div>
      <div class="body">
          <div class="tabel">
            <div class="card-panel">
              <el-tabs :value="tabsName" @tab-click="handleClick" type="border-card">
                <el-tab-pane name="one" label="待审核">
                  <examineTable ></examineTable>
                </el-tab-pane>
                <el-tab-pane name="two" label="待打款">
                  <makeMoney ></makeMoney>
                </el-tab-pane>
                <el-tab-pane name="three" label="全部">
                  <alltab ></alltab>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
  import store from '../../store'
  import examineTable from './components/examineTable'
  import makeMoney from './components/makeMoney'
  import alltab from './components/alltab'
  export default {
    components: { makeMoney,examineTable ,alltab},
    name: 'refunds',
    data() {      
      return { 
        tabsName:"one",
        // 
        tableData:[],
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
    ._contenter{
      padding:20px 40px;
    }
    .body{
      margin-top: 20px;
    }
    .boxRow{
        display: flex;
        justify-content: space-between;
        float: left;
        height: 100px;
        width: 200px;
        padding: 0px 15px;
        line-height: 100px;
        border-radius: 10px;
        font-size: 14px;
        color: #FFF;
        margin-right: 30px;
    }
    .boxRow{

    }
    .bg1{
        background: #67C23A;
    }
    .bg2{
        background: #E6A23C;
    }
    .bg3{
        background: #409EFF;
    }
</style>