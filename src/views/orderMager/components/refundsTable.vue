    <template >
      <div>
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
                    <div class="len">退款原因：{{props.row.reason}}</div>
                    <div style="margin-top: 30px;"><span style="vertical-align: top;">上传凭证：</span>
                        <img  v-for="( item, index ) in props.row.imgArr" :key="index" @click="showimg(props.row.imgArr,index)" style=" cursor: pointer; display: inline-block; margin-left: 10px; width:70px; height:70px; " :src="item"/>
                    </div>
                </div>
            </template>
          </el-table-column>
          <el-table-column  align="center" label="售后服务号"  prop="shopWaterNum"></el-table-column>
          <el-table-column  align="center" label="买家账号"  prop="customerNum"></el-table-column>
          <el-table-column  align="center" label="关联订单号"  prop="refundsNum"> </el-table-column>
          <el-table-column  align="center" label="订单类型" width=120px; prop="orderTypeName"> </el-table-column>
          <el-table-column  align="center" label="申请退款时间"  prop="refundsTime"></el-table-column>
          <el-table-column  align="center" label="类型"  width=120px; prop="refundsTypeName"></el-table-column>
          <el-table-column  align="center" label="退款状态" width=120px; prop="refundsStateName"> </el-table-column>
          <el-table-column  align="center" label="退款金额" width=80px; > 
              <template slot-scope="props" >
                  <div class="red fontbuid">
                      {{props.row.refundsPrice}}
                  </div>
              </template>
          </el-table-column>
          <el-table-column  align="center"  width=350px; label="操作">
            <template slot-scope="props">
              <div >
                <el-button v-if="btnauth[props.row.refundsType-1][props.row.refundsState-1][0]" size="mini" @click="clickbtn(1,props.row)" type="primary" >同意退货</el-button>
                <el-button v-if="btnauth[props.row.refundsType-1][props.row.refundsState-1][1]" size="mini" @click="clickbtn(2,props.row)" type="primary" >同意退款</el-button>
                <el-button v-if="btnauth[props.row.refundsType-1][props.row.refundsState-1][2]" size="mini" @click="clickbtn(3,props.row)" type="primary" >取消退款</el-button>
                <el-button v-if="btnauth[props.row.refundsType-1][props.row.refundsState-1][3]" size="mini" @click="clickbtn(4,props.row)" type="primary" >取消退货</el-button>
                <el-button v-if="btnauth[props.row.refundsType-1][props.row.refundsState-1][4]" size="mini" @click="clickbtn(5,props.row)" type="primary" >详情</el-button>

              </div>
            </template>
          </el-table-column>
        </el-table>
        <imgDialog ref="imgDialog"> </imgDialog>
      </div>
    </template> 
<script>
  // import store from '../../../store'
  import { getToken } from '@/utils/auth'
  import imgDialog from '@/components/myCompoents/imgDialog'
  export default {
    name: 'ordertable',
    components: { imgDialog },
    props: {
      datalist: {
        type:Array,
        required: true
      }
    } ,
    data() {
      return { 
        getRowKeys(row) {
          return row.id;
        },
        expands: [],
        btnauth:[
          [[0,1,1,0,1],
           [1,0,0,1,1],],   
          [[0,1,1,0,1], 
           [0,1,1,0,1],],
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
      // out
      clickbtn(type,row){
        this.$emit('operation',arguments)
      },
      // in
      showimg(arr,index){
        this.$refs.imgDialog.show(arr,index);
      }
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
      background: #f9f9f9;
    }
    .orderlen .button{
      position: absolute;
      top: 50%;
      margin-top: -20px;
      right: 20px;
    }
    .orderlen .len{
      margin-top: 20px;
      line-height: 30px;
      height: 30px;
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