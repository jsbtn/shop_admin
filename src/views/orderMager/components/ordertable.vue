    <template >
      <el-table
        :data="list"
        border
        align="center"
        :row-key="getRowKeys"
        :expand-row-keys="expands"
        style="width: 100%;margin-top: -4px;">
        <el-table-column  align="center" type="expand">
          <template slot-scope="props">
              <div v-for="(item,index) in props.row.shopList" :key="index" class="shop_row">
                <div class="shop_len minw">
                  <div class="lenbox " >
                      <div class="img">
                        <img style="width:100%; height:auto;" :src="item.imgurl">
                      </div>
                      <div class="headinfo column_center">
                        <div class="name s_line1">{{item.shopName}}</div>
                        <div >
                          <span class="price">￥{{item.price}}</span>
                          <span class="pass">￥{{item.passPrice}}</span>
                        </div>
                      </div>
                  </div>   
                </div>
                <div class="shop_len">
                    <div class="info_box column_center">
                      <div class="shop_tab">
                          <span class="tabName">数量：</span> <span class="red fontbuid">{{item.num}}</span>
                      </div>
                      <div class="shop_tab">
                          <span class="tabName">商品规格：</span>{{item.relue}}
                      </div>
                    </div>
                </div>
                <div class="shop_len">
                    <div class="info_box column_center">
                      <div class="shop_tab">
                          <span class="tabName">合计优惠：</span><span class="red fontbuid">￥{{item.sprice}}</span>
                      </div>
                      <div class="shop_tab">
                          <span class="tabName">实付金额：</span><span class="red fontbuid">￥{{item.cupons}}</span>
                      </div>
                    </div>
                </div>
                 <div class="shop_len" v-if="props.row.orderState==6">
                      <div class="info_box column_center">
                        <div class="shop_tab">
                            <span class="tabName">售后状态：</span><span class="bule fontbuid">退款中/退款成功/已取消/退款失败</span>
                        </div>
                       <div class="shop_tab">
                            <span class="tabName">关联服务单：</span><span class="bule fontbuid">20180915</span>
                        </div>
                      </div>
                  </div>
              </div>
                <div class="orderlen">
                  <div class="len">收货信息：{{props.row.customer}},{{props.row.phone}},{{props.row.address}}</div>
                  <div class="len">买家备注：{{props.row.cusRemark}}</div>
                  <div class="len red">卖家备注：{{props.row.remark}}</div>
              </div>
          </template>
        </el-table-column>
        <el-table-column  align="center" label="订单号" width=120px; prop="orderNum"></el-table-column>
        <el-table-column  align="center" label="买家账号" width=120px; prop="customerNum"></el-table-column>
        <el-table-column  align="center" label="订单来源" width=120px; prop="orderOrign"> </el-table-column>
        <el-table-column  align="center" label="订单类型" width=120px; prop="orderTypeName"> </el-table-column>
        <el-table-column  align="center" label="下单时间"  prop="selectTime"></el-table-column>
        <el-table-column  align="center" label="支付时间"  prop="payTime"></el-table-column>
        <el-table-column  align="center" label="订单状态" width=120px; prop="orderStateName"> </el-table-column>
        <el-table-column  align="center" label="合计优惠" width=120px; prop="aCupons">
            <template slot-scope="props" >
                <div class="red fontbuid">
                    {{props.row.aCupons}}
                </div>
            </template>
        </el-table-column>
        <el-table-column  align="center" label="运费" width=80px; prop="freight">
            <template slot-scope="props" >
                <div class="red fontbuid">
                    {{props.row.freight}}
                </div>
            </template>
        </el-table-column>
        <el-table-column  align="center" label="实付金额" width=80px; prop="aSprice"> 
            <template slot-scope="props" >
                <div class="red fontbuid">
                    {{props.row.aSprice}}
                </div>
            </template>
        </el-table-column>
        <el-table-column  align="center"  width=350px; label="操作">
          <template slot-scope="props">
            <div >
              <el-button v-if="btnauth[props.row.orderState-1][0]" size="mini" @click="clickbtn(1,props.row)" type="primary" >备注</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][1]" size="mini" @click="clickbtn(2,props.row)" type="primary" >改价格</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][2]" size="mini" @click="clickbtn(3,props.row)" type="primary" >改地址</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][3]" size="mini" @click="clickbtn(4,props.row)" type="primary" >查看详情</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][4]" size="mini" @click="clickbtn(5,props.row)" type="primary" >同意</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][5]" size="mini" @click="clickbtn(6,props.row)" type="primary" >不同意</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][6]" size="mini" @click="clickbtn(7,props.row)" type="primary" >发货</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][7]" size="mini" @click="clickbtn(8,props.row)" type="primary" >改物流</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][8]" size="mini" @click="clickbtn(9,props.row)" type="primary" >查看物流</el-button>
              <el-button v-if="btnauth[props.row.orderState-1][9]" size="mini" @click="clickbtn(10,props.row)" type="primary" >发货</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template> 
<script>
  // import store from '../../../store'
  import { getToken } from '@/utils/auth'
  export default {
    name: 'ordertable',
    props: {
      datalist: {
        type:Array,
        required: true
      }
    } ,
    data() {
      return { 
        // 获取row的key值
        getRowKeys(row) {
            return row.id;
        },
        // 要展开的行，数值的元素是row的key值
        expands: [],
        //state对应 状态
        //列 已经列出  
        //行对应上面的按钮
        btnauth:[
          [1,1,1,1,0,0,0,0,0,0], //代付款
          [1,0,1,1,0,0,0,0,0,1], //待发货
          [0,0,0,1,0,0,0,1,1,0], //待收货
          [1,0,0,1,0,0,0,0,0,0], //待评价
          [1,0,0,1,0,0,0,0,0,0], //买家取消
          [1,0,0,1,0,0,0,0,0,0], //自动取消
          [1,0,0,1,0,0,0,0,0,0], //已完成
          [1,0,0,1,1,1,0,0,0,0], //退款中
        ]
      }
    },
    created() { 
        
    },
    mounted() {
      var that = this 
      that.list.forEach(function(item,index,array) {
        that.expands.push(item.id);
      }); 
    },
    methods: {  
      clickbtn(type,row){
        this.$emit('operation',arguments)
      },
    },
    computed: {
      list() {
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
    .shop_row{
      padding: 5px;
      background: #f5f7fa;
      display: flex;
      margin-top: 10px;
      border: 1px solid #f1f1f1;

    }
    .info_box{
      height: 100px;
      padding: 20px 0px;
    }
    .orderlen {
      position: relative;
      margin-top: 20px;
    }
    .orderlen .button{
      position: absolute;
      top: 50%;
      margin-top: -20px;
      right: 20px;
    }
    .orderlen .len{
      line-height: 30px;
      height: 30px;
      background: #f9f9f9;
      font-size: 14px;
      padding: 0px 10px;
    }
    .red{
      color:red;
    }
    .bule{
      color:#409EFF;
    }
    .fontbuid{
      font-weight:600;
    }
    .shop_row:first-child{
      margin-top: 0px;
    }
    .shop_row:nth-child(2n){
      background: #fff;
    }
    .shop_row:nth-child(2n):hover{
      background: #f5f7fa;
    }
    .shop_row:nth-child(2n-1):hover{
      background: #fff;
    }
    .shop_row:hover{
      cursor: pointer;
      transition: 0.3s;
    }
    .shop_len{
      padding: 0px 50px 0px 0px;
    }
    .lenbox{
      position:relative;
      padding-left: 120px;
    }
    .lenbox .img{
        position: absolute;
        top: 0px;
        left:5px;
        padding: 3px;
        border: 1px solid #eee;
        min-width: 100px;
        min-height: 100px;
        max-width: 100px;
        max-height: 100px;
        background-position: center;
        background-size: 100% ;
        background-repeat: no-repeat;
    } 
    .minw{
        width: 280px;
    }
    .column_center{
        display: flex; 
        flex-direction: column;
        justify-content: space-between; 
    }
    .lenbox .headinfo{
        height: 100px;
        padding: 20px 0px;
    }  
    .lenbox .headinfo .name{
      font-size: 14px;
      color: #333;
    }
    .lenbox .headinfo .relue{
      font-size: 14px;
      color: #808080; 
    }
    .lenbox .headinfo .price{
      color: red;
      font-weight: 600;
    }
    .lenbox .headinfo .pass{
      color:#808080;
      text-decoration:line-through;
    }
</style>