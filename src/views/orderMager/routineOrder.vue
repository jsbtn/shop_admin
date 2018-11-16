<template>
    <div class="_contenter">
      <div class="head">
        <div class="info">默认显示7天订单,若需查询更多订单,请按条件搜索</div>
        <niceTab ref="niceTab" :tablist="tabs" v-on:tabid="watch_niceTab" ></niceTab>
        <div style="padding: 10px;border: 1px solid #f1f1f1;margin-top:-3px;" >
          <serch ref="serch" v-on:child-say="watch_serchTab"></serch>
       </div>
      </div>
      <div class="body">
          <ordertable v-on:operation="watch_tableClick" ref="ordertable" :datalist="orderList" ></ordertable>
      </div>
      <div class="footer">
      </div>
      <div class="meng">
        <el-dialog :visible.sync="meng1" width="30%" center> 
          <div slot="title" class="_title">
            <span class="name">卖家备注</span><span class="cupos"></span>
          </div>
          <el-form style="padding-top:0px;"  label-width="120px">
              <el-input type="textarea" v-model="remark" style="width:100%;"  placeholder="不超过50个字" maxlength="50" ></el-input>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="saveRemark">确定</el-button>
            <el-button  @click="meng1=false">取消</el-button>
          </span> 
        </el-dialog>
        <upAddress  ref="upAddress"   v-on:temp="watch_saveAddress"  
            :address="form.address" 
            :street="form.street" 
            :postalCode="form.code" 
            :userName="form.name" 
            :phone="form.phone" 
          ></upAddress>
        <upPrice ref="upPrice" v-on:upObj="watch_savePrice" :dataList="tableData" ></upPrice>
        <refunds ref="refunds" v-on:info="watch_refuns"  ></refunds>
        <driGoods ref="driGoods" v-on:info="watch_driGoods"  ></driGoods>
      </div>
    </div>
</template>

<script>
  // import store from '../../../store'
  import serch from './components/serch'
  import ordertable from './components/ordertable'
  import upAddress from './components/upAddress'
  import upPrice from './components/upPrice'
  import refunds from './components/refunds'
  import driGoods from './components/driGoods'
  import niceTab from '@/components/niceTabs'
  import { getToken } from '@/utils/auth'
  import {getorderlist} from './components/datajson'
  export default {
    components: { serch ,ordertable,niceTab,upAddress,upPrice,refunds,driGoods},
    name: 'allList',
    data() {
      return { 
        meng1:false,
        meng4:false,
        meng7:false,
        meng8:false,
        meng9:false,
        shopid:'',
        remark:"",
        //修改地址
        form: {
          address:"浙江温州市瑞安市",
          name:'小明',
          phone:"13388582938",
          code:"330201",
          street:"海安街道"
        },
        //修改价格列表
        tableData:[
          {date:"1212"},
          {date:"1212"},
          {date:"1212"},
          {date:"1212"},
          {date:"1212"},
          {date:"1212"},
          {date:"1212"},
          {date:"1212"},
          
        ],
        //订单列表
        orderList: [],
        // 订单类型
        orderTypelist:[
          {id:1,name:"普通"},
          {id:2,name:"拼单"},
        ],
        //本页面按钮
        tabs:[
          {id:1,name:"全部",bolen:true},
          {id:2,name:"待付款",bolen:false},
          {id:3,name:"待发货",bolen:false},
          {id:4,name:"已发货",bolen:false},
          {id:5,name:"待评价",bolen:false},
          {id:6,name:"已款中",bolen:false},
          {id:8,name:"退完成",bolen:false},
          {id:7,name:"退款完成/取消",bolen:false},
          {id:9,name:"已取消",bolen:false}, 
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
    mounted() {
    },
    methods: {
      saveRemark(){
        this.meng1=false
        this.alert(this.remark)
      },
      //监听
      watch_driGoods(data){
        console.log(data)
      },
      watch_refuns(data){
        console.log(data)
      },
      watch_serchTab(data){
        console.log(data)
      },
      watch_niceTab(data){
        console.log(data)
      },
      watch_saveAddress(data){
        console.log(data)
      },
      watch_savePrice(data){
        console.log(data)
      },
      watch_tableClick(data){
        this.shopid = data[1].id
        console.log(data[1])
        switch (data[0]) {
          case 1:
            this.meng1=true
            break;
          case 2:
            this.$refs.upPrice.show();
            break;
          case 3:
            this.$refs.upAddress.show();
            break;
          case 4:
            this.meng4=true
            break;
          case 5:
            this.$refs.refunds.show(true,{});          
            break;
          case 6:
            this.$refs.refunds.show(false,{});
            break;
          case 7:
            this.meng7=true
            break;
          case 8:
            this.meng8=true
            break;
          case 9:
            this.meng9=true
            break;
          case 10:
            this.$refs.driGoods.show();
            break;
          default:
            // statements_def
            break;
        }
      },
      //api
      gitTableList(){
        var arr =  getorderlist();
        var orderStates = this.orderStates
        var orderTypelist  = this.orderTypelist
        for (var i = 0; i < arr.length; i++) {
          for (var m = 0; m < orderStates.length; m++) {
            if(arr[i].orderState == orderStates[m].id ){
               arr[i].orderStateName = orderStates[m].name 
            }
          }
          for (var m = 0; m < orderTypelist.length; m++) {
            if(arr[i].orderType == orderTypelist[m].id ){
               arr[i].orderTypeName = orderTypelist[m].name 
            }
          }
          
        }
        this.orderList = arr 
      },
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    *{
      box-sizing: border-box;
    }
    .dlalogfooter{
      
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
    .body{
      margin-top: 20px;
    }
    ._contenter{
      padding: 20px 40px;
    }
    .info{
      font-size: 13px;
      color: red;
      height: 40px;
      line-height: 40px;
    }
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
</style>