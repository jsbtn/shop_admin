<template>
  <div class="fircenter">
    <div class="head">
      <el-button @click="AddClassify = true" icon="el-icon-plus" type="primary" style="margin-bottom: 10px;"> 发布商品</el-button>
    </div>
    <div class="body">
      <template>
        <el-table
          :data="shopList"
          :row-class-name="tableRowClassName"
          border
          style="width: 60%">
          <el-table-column align="center" prop="shopname" label="分类名称" width="200"/>
          <el-table-column align="center" prop="id" label="分类图标" >
            <template slot-scope="props">
              <div :style="{backgroundImage: 'url(' + props.row.imgurl + ')'}" class="img imgCenter fillHeight"/>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="browse" label="排序" width="100"/>
          <el-table-column align="center" label="操作" width="300" >
            <template slot-scope="props">
              <el-button size="mini" type="primary" style="margin-bottom: 10px;">编 辑</el-button>
              <el-button size="mini" type="primary">删 除</el-button>
              <el-button size="mini" type="primary" @click="modifyTheinventory = true">添加二级分类</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="footer"/>
    <!--一级分类-->
    <el-dialog title="一级分类" :visible.sync="AddClassify" center  width="50%">
      <el-form ref="temp" :model="temp" label-width="90px" style="width: 60%">
        <el-form-item label="分类名称：" prop="orderNum" >
          <el-input v-model="temp.orderNum" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="排序：" prop="orderNum">
          <el-input v-model="temp.orderNum" placeholder="请输入商品名称" ></el-input>
        </el-form-item>
        <el-form-item label="分类图标：" prop="corporateAptitude">
          <el-upload
            class="avatar-uploader"
            name="file"
            list-type="picture"
            :action="urlAvatar"
            :show-file-list="false"
            :on-success="handleAptitudeSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.corporateAptitude" :src="form.corporateAptitude" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="AddClassify = false">保 存</el-button>
        <el-button  @click="AddClassify = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--二级分类-->
    <el-dialog title="二级分类" :visible.sync="modifyTheinventory" center  width="50%">
      <el-form ref="temp" :model="temp" label-width="90px" style="width: 60%">
        <el-form-item label="所属分类：" prop="orderState">
          <el-select
            filterable
            clearable
            class="filter-item" v-model="temp.orderState" placeholder="请选择">
            <el-option v-for="item in orderStates" :key="item.id" :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称：" prop="orderNum" >
          <el-input v-model="temp.orderNum" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="排序：" prop="orderNum">
          <el-input v-model="temp.orderNum" placeholder="请输入商品名称" ></el-input>
        </el-form-item>
        <el-form-item label="分类图标：" prop="corporateAptitude">
          <el-upload
            class="avatar-uploader"
            name="file"
            list-type="picture"
            :action="urlAvatar"
            :show-file-list="false"
            :on-success="handleAptitudeSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.corporateAptitude" :src="form.corporateAptitude" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
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
  export default {
    name: 'Refunds',
    data() {
      return {
        // urlAvatar: process.env.UPLOAD_URL + '/',
        AddClassify: false, // 添加一级分类
        modifyTheinventory: false, // 添加二级分类
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
        orderStates:[
          {id:1,name:"个护清洁"},
          {id:2,name:"居家清洁"},
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
      handleAptitudeSuccess(res, file) {
        this.form.corporateAptitude = res.data
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isLt2M
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .fircenter{
    padding: 20px;
  }
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
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
