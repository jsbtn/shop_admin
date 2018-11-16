<template>
    <div class="_contenter">
      <div class="head">
        <niceTab ref="niceTab" :tablist="tabs" v-on:tabid="watch_niceTab" ></niceTab>
        <div style="padding: 10px;border: 1px solid #f1f1f1;margin-top:-3px;" >
          <refundSerch ref="refundSerch" v-on:child-say="watch_serchTab">  </refundSerch>
       </div>
      </div>
      <div class="body">
          <refundsTable v-on:operation="watch_tableClick" ref="ordertable" :datalist="orderList" ></refundsTable>
      </div>
      <div class="footer">
          
      </div>
    </div>
</template>

<script>
  // import store from '../../../store'
  import { getToken } from '@/utils/auth'
  import refundSerch from './components/refundSerch'
  import refundsTable from './components/refundsTable'
  import {getRefundsList} from './components/datajson'
  import niceTab from '@/components/niceTabs'
  export default {
    components: { refundSerch , niceTab , refundsTable },
    name: 'refunds',
    data() {
      return { 
        //本页面按钮
        tabs:[
          {id:1,name:"全部",bolen:true},
          {id:2,name:"待卖家处理",bolen:false},
          {id:3,name:"待买家处理",bolen:false},
          {id:4,name:"同意退款",bolen:false},
          {id:5,name:"已取消",bolen:false}, 
        ],
        // 订单类型
        orderTypelist:[
          {id:1,name:"普通"},
          {id:2,name:"拼单"},
        ],
        //订单状态  根据订单状态 显示 对应的按钮  注： 这里bolen是没用的 显示用的是table组件中的数组 
        orderStates:[
          {id:1,name:"待付款",bolen:false},
          {id:2,name:"待发货",bolen:false},
          {id:3,name:"代收货",bolen:false},
          {id:4,name:"待评价",bolen:false},
          {id:5,name:"买家取消",bolen:false},
          {id:6,name:"自动取消",bolen:false},
          {id:7,name:"已完成",bolen:false},
          {id:8,name:"退款中",bolen:false}, 
        ],
      }
    },
    created() { 
      this.gitTableList();
    },
    methods: {
      //watch
      watch_niceTab(data){
        console.log(data) 
      },
      watch_serchTab(data){
        console.log(data)
      },
      watch_tableClick(data){
        console.log(data)
      },  
      gitTableList(){
        var arr =  getRefundsList();
        var orderStates = this.orderStates
        var orderTypelist  = this.orderTypelist
        for (var i = 0; i < arr.length; i++) {
          arr[i].refundsTypeName = arr[i].refundsType==1 ? '仅退款' : '退货退款' ;
          arr[i].refundsStateName = arr[i].refundsState==1 ? '待卖家处理' : '待买家处理' ;  
          for (var m = 0; m < orderTypelist.length; m++) {
            if(arr[i].orderType == orderTypelist[m].id ){
               arr[i].orderTypeName = orderTypelist[m].name 
            }
          }
        }
        this.orderList = arr 
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
    .info{
      font-size: 13px;
      color: red;
      height: 40px;
      line-height: 40px;
    }
    .tabbox {
      display: inline-block;
      border:1px solid #E4E4FF;
      border-bottom: 0px;
      overflow: hidden;
      border-radius: 10px 10px 0px 0px;
    }
    .tabbox .tab{
      display: inline-block;
      float: left;
      height: 50px;
      line-height: 50px;
      padding: 0px 30px;
      font-size: 15px;
      border-bottom: 1px solid #E4E4FF;
      color: #333;
      background: #F2F6FC;
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