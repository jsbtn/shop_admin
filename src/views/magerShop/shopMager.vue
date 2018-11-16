<template>
  <div class="_contenter">
    <div class="head">
      <el-button icon="el-icon-plus" type="primary" style="margin-bottom: 10px;"> 发布商品</el-button>
      <niceTab ref="niceTab" :tablist="tabs" @tabid="watch_niceTab" />
    </div>
    <div style="padding: 10px;border: 1px solid #f1f1f1;margin-top:-3px;" class="body">
      <template>
        <el-table
          :data="shopList"
          :row-class-name="tableRowClassName"
          border
          style="width: 100%">
          <el-table-column prop="id" label="商品图片" width="200">
            <template slot-scope="props">
              <div :style="{backgroundImage: 'url(' + props.row.imgurl + ')'}" class="img imgCenter fillHeight"/>
            </template>
          </el-table-column>
          <el-table-column prop="shopname" label="商品名称"/>
          <el-table-column prop="shopNumCode" label="商品编号"/>
          <el-table-column prop="index" sortable label="序号" width="100"/>
          <el-table-column prop="shopPrice" sortable label="销售价" width="100"/>
          <el-table-column prop="stock" sortable label="库存" width="100"/>
          <el-table-column prop="sales" sortable label="销量" width="100"/>
          <el-table-column prop="taxonomy" label="所属分类"/>
          <el-table-column prop="sendtime" label="发布时间"/>
          <el-table-column prop="browse" sortable label="浏览量" width="100"/>
          <el-table-column prop="state" label="状态"/>
          <el-table-column label="操作" width="300" >
            <template slot-scope="props">
              <el-button size="mini" type="primary" style="margin-bottom: 10px;">编辑</el-button>
              <el-button size="mini" type="primary" style="margin-bottom: 10px;">上架</el-button>
              <el-button size="mini" type="primary" style="margin-bottom: 10px;">下架</el-button>
              <el-button size="mini" type="primary" style="margin-bottom: 10px;">修改库存</el-button>
              <el-button size="mini" type="primary" style="margin-bottom: 10px;">查看评论</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="footer"/>
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
      // 本页面按钮
      tabs: [
        { id: 1, name: '在售商品', bolen: true },
        { id: 2, name: '库存紧张商品', bolen: false },
        { id: 3, name: '仓库中商品', bolen: false },
        { id: 4, name: '售罄商品', bolen: false }
      ],
      // 商品列表
      shopList: []
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
    }
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
