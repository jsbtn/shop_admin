<template>
  <div class="_contenter">
    <div class="head">
      <el-button icon="el-icon-plus" @click="AddshopSend" type="primary" style="margin-bottom: 10px;"> 发布商品</el-button>
      <div style="margin: 20px 0;">
        <el-form ref="temp" :model="temp" label-width="90px">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="商品名称：" prop="orderNum">
                <el-input v-model="temp.orderNum" placeholder="请输入商品名称" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="商品分类：" prop="orderState">
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
              <el-form-item label="状态：" prop="orderOrign">
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
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="购买方式：" prop="checkList">
                <template>
                  <el-checkbox-group v-model="temp.checkList">
                    <el-checkbox :label="1">单独购买</el-checkbox>
                    <el-checkbox :label="2">自由拼团</el-checkbox>
                    <el-checkbox :label="3">官方拼团</el-checkbox>
                  </el-checkbox-group>
                </template>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button class="bthseach" @click="serch" type="primary">搜索</el-button>
          <el-button class="bthseach" @click="resetForm('temp')" type="primary" >重置</el-button>
        </el-form>
      </div>
      <niceTab ref="niceTab" :tablist="tabs" @tabid="watch_niceTab" />
    </div>
    <div style="padding: 10px;border: 1px solid #f1f1f1;margin-top:-3px;" class="body">
      <template>
        <el-table
          :data="shopList"
          :row-class-name="tableRowClassName"
          border
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            align="center"
            width="55"/>
          <el-table-column align="center" prop="id" label="商品图片" width="200">
            <template slot-scope="props">
              <div :style="{backgroundImage: 'url(' + props.row.imgurl + ')'}" class="img imgCenter fillHeight"/>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="shopname" label="商品名称"/>
          <el-table-column align="center" prop="shopNumCode" label="购买方式"/>
          <el-table-column align="center" prop="index" sortable label="序号" width="100"/>
          <el-table-column align="center" prop="shopPrice" sortable label="销售价" width="100"/>
          <el-table-column align="center" prop="stock" sortable label="库存" width="100"/>
          <el-table-column align="center" prop="sales" sortable label="销量" width="100"/>
          <el-table-column align="center" prop="taxonomy" label="所属分类"/>
          <el-table-column align="center" prop="sendtime" label="发布时间"/>
          <el-table-column align="center" prop="browse" sortable label="浏览量" width="100"/>
          <el-table-column align="center" prop="state" label="状态"/>
          <el-table-column align="center" label="操作" width="500" >
            <template slot-scope="props">
              <el-button size="mini" type="primary" style="margin-bottom: 10px;">编辑</el-button>
              <el-button size="mini" type="primary">上架</el-button>
              <el-button size="mini" type="primary">下架</el-button>
              <el-button size="mini" type="primary" @click="modifyTheinventory = true">修改库存</el-button>
              <el-button size="mini" type="primary">查看评论</el-button>
              <el-button size="mini" type="primary">拼团订单</el-button>
              <el-button size="mini" type="primary">常规订单</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-checkbox v-model="checked">全选</el-checkbox>
          <!--<el-button >全选</el-button>-->
          <el-button style="margin-left: 20px">批量下架</el-button>
        </div>
      </template>
    </div>
    <div class="footer"/>
    <el-dialog title="修改库存" :visible.sync="modifyTheinventory" center>
      <el-form :model="form">
        <el-table
          :data="shopList"
          :row-class-name="tableRowClassName"
          border>
          <el-table-column align="center" prop="shopname" label="规格"/>
          <el-table-column align="center" prop="stock" label="当前库存"/>
          <el-table-column align="center" prop="name" label="增加 / 减少">
            <template slot-scope="scope">
              <el-form-item prop="name">
                <el-input v-model="form.name" placeholder="" ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="modifyTheinventory = false">保 存</el-button>
        <el-button  @click="modifyTheinventory = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { getToken } from '@/utils/auth'
import { getShopList } from './components/datajson'
import niceTab from '@/components/niceTabs'
export default {
  name: 'Refunds',
  components: { niceTab },
  data() {
    return {
      modifyTheinventory: false, // 修改库存
      // 本页面按钮
      tabs: [
        { id: 1, name: '在售商品', bolen: true },
        { id: 2, name: '库存紧张商品', bolen: false },
        { id: 3, name: '仓库中商品', bolen: false },
        { id: 4, name: '售罄商品', bolen: false }
      ],
      // 商品列表
      shopList: [],
      checked: false,
      temp:{
        orderNum:'',
        checkList:[],
        orderOrign:[],
      },
      form:{
        name:'',
        region:'',
      },
      orderOrigns:[
        {id:1,name:"在售"},
        {id:2,name:"下架"},
      ]
    }
  },
  created() {
    this.getlistt()
  },
  methods: {
    // watch
    watch_niceTab(data) {
      console.log(data)
    },
    // api
    getlistt() {
      console.log('12123123')
      var arr = getShopList()
      this.shopList = arr
    },
    // 组件函数
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
      return ''
    },
    AddshopSend() {
        this.$router.push({
          path: '/magerShop/shopSend/',
        })
    },
    resetForm(formName){
      this.$refs[formName].resetFields();
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .body{
      margin-top: 20px;
    }
    ._contenter{
      padding:20px 40px;
    }
    .el-table .warning-row {
      background: oldlace;
    }
   .img{
      display: inline-block;
      width: 100px;
      height: 60px;
      background-repeat: no-repeat;
      border: 1px solid #999;
   }
   /*是否居中*/
   .imgCenter{
      background-position: center ;
   }
  /*宽度适应  高度裁剪 高度居中 */
  .fillWtith{
      background-size: 100% auto;
  }
  /*高度适应  宽度裁剪 高度居中 */
  .fillHeight{
      background-size: auto 100% ;
  }
  /*缩放裁剪*/
  /*填充到原来的两倍*/
  /*裁剪中心部位*/
  .cutCenter{
    background-size: 200%;
    background-position: center;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
