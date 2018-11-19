<template>
    <el-form ref="temp" :model="temp" label-width="150px" style="margin-top:40px">
        <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="商品名称：" prop="orderNum">
                <el-input  class="_input"  v-model="temp.orderNum" placeholder="商品名称" style="width:250px"></el-input>
              </el-form-item>
            </el-col>  
            <el-col :span="6">
             <el-form-item label="订单号" prop="orderState">
                <el-input  class="_input"  v-model="temp.orderState" placeholder="订单号" style="width:250px"></el-input>
              </el-form-item>
            </el-col>  
             </el-row>
              <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="手机号码：" prop="orderOrign">
                <el-input  class="_input"  v-model="temp.orderOrign" placeholder="请输入手机号" style="width:250px"></el-input>
              </el-form-item>
            </el-col>  
            <el-col :span="6">
              <el-form-item label="状态：">
                <el-select filterable clearable @change="" class="filter-item" v-model="temp.orderTypes" placeholder="请选择">
                  <el-option v-for="item in orderTypes" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
             </el-row>
              <el-row style="margin:0 0 40px 150px">
                 <el-button type="primary">查询</el-button>
                  <el-button @click="resetForm('temp')">重置</el-button>
             </el-row>
              <div style="margin-left:40px">
                <template>
                    <el-table
                    :data="shopList"
                    :row-class-name="tableRowClassName"
                    border
                    style="width: 100%">
                    <el-table-column prop="imgPath" align="center" label="商品信息" width="200">
                       <template slot-scope="scope">
                          <img :src="scope.row.imgPath" alt="" style="width: 100px;height: 50px">
                           <p>个梵蒂冈鸡</p>
                          <p>年龄：1岁</p>
                          <p>性别：男</p>
                       </template>
                    </el-table-column>
                    <el-table-column align="center" prop="date" label="订单编号"></el-table-column>
                    <el-table-column align="center" prop="evaluate" label="商品编号"></el-table-column>
                    <el-table-column align="center" prop="Member" label="会员信息" >
                       <template slot-scope="scope">
                          <img src="src/assets/a.jpg" style="width: 100px;height: 50px">
                         
                          <p>昵称：王大魔王</p>
                          <p>18780012454</p>
                       </template>
                    </el-table-column>
                    <el-table-column align="center" prop="score" label="评分" >
                       <template slot-scope="scope">
                          <p>描述相符：5.0</p>
                          <p>物流服务：4.0</p>
                          <p>服务态度：5.0</p>
                       </template>
                    </el-table-column>
                    <el-table-column align="center" prop="content" label="内容" style="width:300px">
                      <template slot-scope="scope">
                          <img :src="scope.row.content" alt="" style="width: 60px;height: 30px">
                          <img :src="scope.row.content" alt="" style="width: 60px;height: 30px">
                          <img :src="scope.row.content" alt="" style="width: 60px;height: 30px">
                         <p>鸡很有活力</p>
                         <el-button size="mini"style="margin-bottom: 10px;">查看更多</el-button>
                       </template>
                    </el-table-column>
                    <el-table-column align="center" prop="score_time" label="评价时间"></el-table-column>
                    <el-table-column align="center" prop="state" label="显示状态">
                        <template slot-scope="props">
                            <el-switch v-model="value2" active-color="#13ce66"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="300" >
                        <template slot-scope="props">
                        <el-button size="mini" type="primary" style="margin-bottom: 10px;" @click="modifyTheinventory = true">设置分组</el-button>
                        <el-button size="mini" type="primary" style="margin-bottom: 10px;" @click="Reply = true">回复</el-button>
                        </template>
                    </el-table-column>
                    </el-table>
                </template>
             </div>
             <el-dialog title="设置分组" :visible.sync="modifyTheinventory" center>
               <el-form-item label="选择分组：">
                <el-select v-model="temp.options" filterable placeholder="请选择">
                 <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
             </el-form-item>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="modifyTheinventory = false">确 定</el-button>
                <el-button  @click="modifyTheinventory = false">取 消</el-button>
             </div>
         </el-dialog>
          <el-dialog title="评价回复" :visible.sync="Reply" center>
             <el-radio v-model="radio" label="1">选择预设回复</el-radio>
             <el-radio v-model="radio" label="2">自定义</el-radio>
               <div v-if="radio==1">
                 <p>
                   <el-select v-model="temp.Reply_1" placeholder="请选择">
                    <el-option
                      v-for="item in Reply_1"
                     :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                  </el-select>
                </p>
                 <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                  v-model="temp.Reply_1" style="width:70%">
                </el-input>
               </div>
               <div v-if="radio==2">
                 <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                  v-model="textarea" style="width:70%">
                </el-input>
               </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="Reply = false">确 定</el-button>
                <el-button  @click="Reply = false">取 消</el-button>
             </div>
         </el-dialog>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
        Reply:false,
        modifyTheinventory:false,
          value1: true,
          radio: '',
          value2: true,
           shopList: [{
             imgPath:'/src/assets/chicken.jpg',
          info:'fgjgfgjdfgfdgfdg',
          date: '21545555000022',
          evaluate: '12035000145',
          Member:'该法规的',
          score: '5分',
          content:'/src/assets/chicken.jpg',
          score_time: '2018-11-19',
          state:'hgurehgurhg'
        }],
        options:[
           {value: '选项1',label: '分组一'},
           {value: '选项2',label: '分组二'},
           {value: '选项3',label: '分组三'},
           {value: '选项4',label: '分组四'},
        ],
        orderTypes:[
          {id:'1', name:'全部'},
          {id:'2',name:'在线'},
          {id:'3',name:'下架'}
        ],
        Reply_1:[
          {id:'1111111111111111111',name:'111111111111111111111111111111'},
          {id:'2222222222222222222',name:'22222222222222222222222222222'}],
       temp:{
          // shopName:"",
          orderNum:"",
          orderState:"",
          orderOrign:"",
          orderType:"全部"
        }
      }
    },
    methods: {
      resetForm(formName) {
      this.$refs[formName].resetFields()
    }
     
     
     
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