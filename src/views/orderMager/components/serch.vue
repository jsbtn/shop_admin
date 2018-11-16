<template>
 	<div class="serch-info">
      <el-form ref="temp" :model="temp" label-width="150px">
        <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="订单号：" prop="orderNum">
                <el-input  class="_input"  v-model="temp.orderNum" placeholder="订单号" ></el-input>
              </el-form-item>
            </el-col>  
            <el-col :span="6">
              <el-form-item label="订单状态 ：" prop="orderState">
                <el-select
                  filterable
                  clearable
                  class="filter-item" v-model="temp.orderState" placeholder="请选择">
                  <el-option v-for="(item,index) in orderStates" :key="item.id" :label="item.name"
                             :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>  
            <el-col :span="6">
              <el-form-item label="订单来源 ：" prop="orderOrign">
                <el-select
                  filterable
                  clearable 
                  @change=""
                  class="filter-item" v-model="temp.orderOrign" placeholder="请选择">
                  <el-option v-for="item in orderOrigns" :key="item.id" :label="item.name"
                             :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>  
            <el-col :span="6">
              <el-form-item label="订单类型：" prop="orderType">
                <el-select
                  filterable
                  clearable
                  @change=""
                  class="filter-item" v-model="temp.orderType" placeholder="请选择">
                  <el-option v-for="item in orderTypes" :key="item.id" :label="item.name"
                             :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col> 
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="会员账号：" prop="vipVumber">
                <el-input  class="_input"  v-model="temp.vipVumber" placeholder="账号" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="会员手机：" prop="vipPhone"">
                <el-input  class="_input"  v-model="temp.vipPhone" placeholder="手机号" ></el-input>
              </el-form-item>
            </el-col>  
            <el-col :span="6">
              <el-form-item label="下单时间：" prop="orderTime">
                <el-date-picker
                  v-model="temp.orderTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>  
            <el-col :span="6">
              <el-form-item label="支付时间：" prop="payTime">
                <el-date-picker
                  v-model="temp.payTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>  
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="收货人姓名：" prop="collectName">
                <el-input  class="_input"  v-model="temp.collectName" placeholder="收货人姓名" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="收货人手机：" prop="collectPhone">
                <el-input  class="_input"  v-model="temp.collectPhone" placeholder="收货人手机" ></el-input>
              </el-form-item>
            </el-col>   
        </el-row>
        <el-row>
            <el-button style="margin-left: 50px;" @click="serch" type="primary">搜索</el-button>
            <el-button style="margin-left: 10px;" @click="resetForm('temp')" type="primary">重置</el-button>
        </el-row>
      </el-form>
    </div>
</template>
<style type="text/css" scoped></style>
	 
<script>
  import { getToken } from '@/utils/auth'
  export default {
    name: 'serchinfo',
    data() {
      return {  
        orderStates:[
          {name:"全部",id:1,bolen:true},
          {name:"待付款",id:2,bolen:false},
          {name:"已付款",id:3,bolen:false},
          {name:"已发货",id:4,bolen:false},
          {name:"待发货",id:5,bolen:false},
          {name:"待评价",id:6,bolen:false},
          {name:"已完成",id:7,bolen:false},
          {name:"退款中",id:8,bolen:false},
          {name:"退款完成/取消",id:9,bolen:false},
          {name:"已取消",id:10,bolen:false},
        ],
        orderOrigns:[
          {name:"全部",id:1},
          {name:"小程序",id:2},
          {name:"WEB商城",id:3},
        ],
        orderTypes:[
          {name:"全部",id:1},
          {name:"拼单",id:2},
          {name:"普通",id:3},
        ],
        // addressList:[],
        temp:{
          // shopName:"",
          orderNum:"",
          orderState:"",
          orderOrign:"",
          vipVumber:"",
          vipPhone:'',
          orderTime:"",
          payTime:"",
          collectName:"",
          collectPhone:"",
          orderType:""
        }
      }
    },
    created() { 

    },
    methods: {
      serch(){
        this.$emit('child-say', JSON.stringify(this.temp))
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
    },
    computed: {

    },

  }
</script>