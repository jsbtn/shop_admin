<template>
  <div class="app-container">
    <div class="likename">
      <div class="likeimg"></div>基础信息
    </div>
    <el-form :rules="rules" ref="form" :model="form" label-width="138px" >
      <el-form-item label="商品类别：">
          <el-cascader
            :options="category"
            :show-all-levels="false"
            v-model="selectedOptions2">
          </el-cascader>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="18">
          <el-form-item label="商品属性：">
            <el-col :span="8">
              <el-form-item label="属性名称：" prop="provinceCardType" >
                <el-input maxlength="18" v-model="form.provinceCardNumber" placeholder="请输入商品名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="属性值：" prop="provinceCardType">
                <el-input maxlength="18" v-model="form.provinceCardNumber" placeholder="请输入商品名称"></el-input>
              </el-form-item>
            </el-col>
            <el-button @click="addDomain">新增</el-button>
          </el-form-item>

          <el-form-item>
            <el-col :span="8">
              <el-form-item v-for="domain in dynamicValidateForm.domains"
                            label="属性名称："
                            :key="domain.key"
                            :prop="'domains.' + '.value'">
                <el-input maxlength="18" v-model="form.value" placeholder="请输入商品名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item v-for="domain in dynamicValidateForm.domains"
                            label="属性值："
                            :key="domain.key"
                            :prop="'domains.' + '.value'">
                <el-input maxlength="18" v-model="form.value" placeholder="请输入商品名称"></el-input>
                <el-button @click.prevent="removeDomain(domain)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-form-item>

        </el-col>
      </el-row>
      <el-form-item label="商品名称：" prop="provinceCardNumber" style="width: 30%;">
        <el-input maxlength="18" v-model="form.provinceCardNumber" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="展示图片：" prop="corporateAptitude">
        <el-upload
          :action="urlAvatar"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item label="服务标签：" prop="checkList" style="width: 30%;">
        <template>
          <el-checkbox-group v-model="form.checkList">
            <el-checkbox :label="1">xx</el-checkbox>
            <el-checkbox :label="2">xx</el-checkbox>
            <el-checkbox :label="3">xxx</el-checkbox>
            <el-checkbox :label="3">xxx</el-checkbox>
          </el-checkbox-group>
        </template>
      </el-form-item>
      <el-form-item label="原产地：" style="width: 60%;">
          <el-cascader
            expand-trigger="hover"
            :options="options"
            :placeholder="form.address"
            v-model="selectedOptions2">
          </el-cascader>
      </el-form-item>
      <!--库存规格-->
      <div class="likename">
        <div class="likeimg"></div>库存规格
      </div>
      <div style="width: 100%;display: flex;flex-direction: column;">
        <el-form-item label="购买方式：" prop="checkList" style="width: 60%;">
          <template>
            <el-checkbox-group v-model="form.checkList">
              <el-checkbox :label="1">单独购买</el-checkbox>
              <el-checkbox :label="2">自由拼团</el-checkbox>
              <el-checkbox :label="3">官方拼团</el-checkbox>
              <div style="font-size:14px;color: #999999;display:inline-flex;margin-left: 30px;">官方拼团不允许用户自己发起，自由拼团和官方拼团二选一</div>
            </el-checkbox-group>
          </template>
        </el-form-item>
      </div>

      <el-form-item label="商品规格：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">统一规格</el-radio>
          <el-radio :label="0">多规格</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="销售价：" prop="oldaddress" style="width: 30%;">
        <el-input v-model="form.oldaddress"></el-input>
      </el-form-item>
      <el-form-item label="原价：" prop="oldaddress" style="width: 30%;">
        <el-input v-model="form.oldaddress"></el-input>
      </el-form-item>
      <el-form-item label="库存：" prop="oldaddress" style="width: 30%;">
        <el-input v-model="form.oldaddress"></el-input>
      </el-form-item>
      <el-form-item label="商品编码：" prop="oldaddress" style="width: 30%;">
        <el-input v-model="form.oldaddress"></el-input>
      </el-form-item>
      <el-form-item label="拼团人数：" prop="oldaddress" style="width: 30%;">
        <el-input v-model="form.oldaddress"></el-input>
      </el-form-item>
      <el-form-item label="拼团价格：" prop="oldaddress" style="width: 30%;">
        <el-input v-model="form.oldaddress"></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="缴费日期：">
            <el-col :span="9">
              <el-form-item prop="startTime">
                <el-date-picker
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  type="date" placeholder="选择时间"
                  v-model="form.startTime"
                  @change="selectStatime"
                  :picker-options="pickerOptions1"
                  style="width: 160px; left: -10px;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">至</el-col>
            <el-col :span="6">
              <el-form-item prop="endTime">
                <el-date-picker
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  type="date" placeholder="选择时间"
                  v-model="form.endTime"
                  :picker-options="pickerOptions"
                  style="width: 160px;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="是否使用优惠券：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否使用积分抵扣：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <!--物流 / 其他-->
      <div class="likename">
        <div class="likeimg"></div>物流 / 其他
      </div>
      <el-form-item label="运费设置：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">统一运费</el-radio>
          <el-radio :label="0">运费模板（预留)</el-radio>
        </el-radio-group>
        <div>运费：<input v-model="form.oldaddress"/> 元</div>
      </el-form-item>
      <el-form-item label="是否支持溯源：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">统一规格</el-radio>
          <el-radio :label="0">多规格</el-radio>
        </el-radio-group>
        <div>关联溯源：
          <el-select v-model="form.provinceCardType" placeholder="请选择">
          <el-option
            v-for="item in cardTypeList"
            :key="item.id"
            :label="item.typeName"
            :value="item.id">
          </el-option>
        </el-select> </div>
      </el-form-item>
      <el-form-item label="排序：" prop="oldaddress" style="width: 30%;">
        <el-input v-model="form.oldaddress"></el-input>
      </el-form-item>
      <el-form-item label="每人限购：" prop="oldaddress" style="width: 30%;">
        <el-input v-model="form.oldaddress"></el-input>
      </el-form-item>
      <el-form-item label="是否支持积分抵扣：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否支持退换货：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <!--商品详情/-->
      <div class="likename">
        <div class="likeimg"></div>商品详情
      </div>
      <el-form-item label="商品简介：" >
        <el-input type="textarea" style="width: 30%;" placeholder="不超过200字" maxlength="200" :autosize="{ minRows: 12, maxRows: 20}" v-model="form.about"></el-input>
      </el-form-item>
      <el-form-item label="商品详情：" prop="sex" style="width: 80%;">
        <tinymce :height="300" v-model="content"></tinymce>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="width: 100px" @click="addOutsider" :disabled="disabled">发 布</el-button>
        <el-button type="info" style="width: 100px" @click="handBack">返 回</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import store from '../../store'
  import Tinymce from '@/components/Tinymce'
  import areaJs from '@/utils/area.js'
  export default {
    components: { Tinymce },
    data() {
      return {
        disabled: false,
        urlAvatar: process.env.UPLOAD_URL + '/fileUpload/imglogo',
        form: {
          userNameOut: '',
          tel: '',
          oldaddress: ''
        },
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
        category: [{
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],  //商品类别二级的json数组名称
        options: areajson,  //areajson为引入外部js文件的json数组名称
        selectedOptions2:"",
        rules: {

        }
      }
    },
    mounted() {
    },
    created() {
      this.getCardTypeList()
    },
    methods: {
      handBack() {
        this.$router.go(-1)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      addDomain() {// 新增
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      removeDomain(item) {// 删除
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .likeimg{margin-bottom:10px;width: 15px;height: 15px;border-radius: 50px;background-color: #30B08F;display: inline-flex;margin-right: 10px;vertical-align: center;}
  .likename{margin-bottom:10px;border-bottom: 2px solid #000;}
</style>
<style>
  .line {
    text-align: center;
  }

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
