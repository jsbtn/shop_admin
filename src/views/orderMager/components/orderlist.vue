<template>
    <div class="_box">
      <div class="_row _title">
        <div class="len minw">商品</div>
        <div class="len maxw">单价</div>
        <div class="len maxw">数量</div>
        <div class="len">卖家账号</div>
        <div class="len">订单来源</div>
        <div class="len">下单时间</div>
        <div class="len">支付时间</div>
        <div class="len">订单类型</div>
        <div class="len">售后状态</div>
        <div class="len">订单状态</div>
        <div class="len">合计优惠</div>
        <div class="len">实付金额</div>
      </div>
      <div v-for="item in list" class="list">
          <div class="order leninfo">
              <div >订单号：232232321231</div>
              <div >
                <el-button size="mini" @click="serchbtn(item.id)" type="primary" >备注</el-button>
                <el-button size="mini" @click="serchbtn(item.id)" type="primary" >查看详情</el-button>
                <el-button size="mini" @click="serchbtn(item.id)" type="primary" >查看评论</el-button>
              </div>
          </div>
          <div class="data">
              <div class="_row">
                <div class="len minw">
                  <div class="lenbox " >
                      <div style="background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=618052011,155537526&fm=27&gp=0.jpg');" class="img"></div>
                      <div class="headinfo column_center">
                        <div class="name s_line1">商品名字</div>
                        <div class="relue s_line1">商品规格</div>
                      </div>
                  </div>                          
                </div>
                <div style="color: red;" class="len maxw center">
                  20
                </div>
                <div  style="color: red;" class="len maxw center">1</div>
                <div class="len">
                  <div class="column_center">
                    <div class="name s_line1">yoyo</div>
                    <div style="margin-top: 5px;">19983159093</div>
                  </div>
                </div>
                <div class="len">小程序</div>
                <div class="len">2013.11.25</div>
                <div class="len">0.0.</div>
                <div class="len center">普通</div>
                <div class="len center">无</div>
                <div class="len center">
                    <div>代付款</div>
                    <el-button  style='margin-top: 5px;' size="mini" type="primary">催付</el-button>
                </div>
                <div class="len" >
                  <div class="len_num center">5</div>
                </div>
                <div class="len">
                  <div class="len_num center">35</div>
                </div>
              </div>
          </div>
          <div class="textinfo s_line1">收货信息:  张胜兰,19983159093,四川省.成都市.高新区剑南大道1533号</div>
          <div class="textinfo danger s_line1">卖家备注:重要订单,优先处理哦</div>
      </div>

    </div>
</template>

<script>
  // import store from '../../../store'
  import { getToken } from '@/utils/auth'
  export default {
    name: 'orderlist',
    props: {
      datalist: {
        required: true
      }
    } ,
    created() { 
      // console.log(this.datalist)
    },
    methods: {  

    },
    computed: {
      list() {
        console.log('sdfdsfds',this.datalist)
        return this.datalist
      },
    },

  }
</script>
<style type="text/css" scoped>
      
    .s_line1{
      overflow:hidden;
      white-space:nowrap;
      text-overflow:ellipsis; 
    }
    .s_line2 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
    .s_line3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
    }
    *{
      box-sizing: border-box;
    }
    .el-input__inner{
        height: 35px;
        line-height: 35px;
     }
    ._input{
      line-height: 35px;
      height: 35px;
      width: 280px;
    }
    ._row {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
    }
    ._box ._title {
      font-size: 15px;
      font-weight: 600;
      color: #333;  
      margin-top: 10px;
      background: #f1f1f1;
    }
    .len{
      width: 8.33%;
      border-top: 1px solid #eee;
      padding: 20px 10px;
    }
    .len:first-child{
      border-left: 1px solid #eee;
    }
    .len:last-child{
      border-right: 1px solid #eee;
    }
    .leninfo{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0px 10px;
        margin: 5px 0px;
        font-size: 14px;
        color:#444;
    }
    .textinfo{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0px 10px;
        margin: 5px 0px;
        font-size: 14px;
        color:#444;   
    }
    .lenbox{
      /*display: flex;*/
      position:relative;
      padding-left: 95px;
    }
    .lenbox .img{
        position: absolute;
        top: 0px;
        left:0px;
        margin:5px;
        padding: 3px;
        border: 1px solid #eee;
        min-width: 80px;
        min-height: 80px;
        max-width: 80px;
        max-height: 80px;
        background-position: center;
        background-size: 100% ;
        background-repeat: no-repeat;
    } 
    .column_center{
        display: flex; 
        flex-direction: column;
        justify-content: space-between; 
    }
    .lenbox .headinfo{
        height: 80px;
        padding: 20px 0px;
    }  
    .lenbox .headinfo .name{
      font-size: 14px;
      color: #333;
    }
    .lenbox .headinfo .relue{
      font-size: 14px;
      color: #333; 
    }
    .list{
      border: 1px solid #E4E4FF;
      margin-top: 10px;
    }
    .list:nth-child(2n){
      background: #f3f3f3;
    }
    .data .len{
      padding: 20px 10px;
      font-size: 15px;
      color: #333;
    }
    .data .len{
        border-left: 1px solid #eee;
    }
    .data .len:first-child{
      padding: 0px;
    } 
    .len_num{
      font-weight: 600;
      color: red;
    }
    .minw{
      min-width: 240px;
    }
    .maxw{
        max-width: 80px;
    }
    .danger{
      color: #f56c6c;
    }
    .center{
      text-align: center;
    }
</style>