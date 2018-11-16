<template>
  <div>
    <el-dialog  :visible.sync="meng3"  width="40%" >
      <div slot="title" class="_title">
        <span class="name">修改地址</span><span class="cupos">请详细填写</span>
      </div>
      <el-form ref="temp" :model="temp" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="联系地址：">
                <div class="block">
                  <el-cascader
                    expand-trigger="hover"
                    :options="options"
                    :placeholder="temp.address"
                    v-model="selectedOptions2"
                    >
                  </el-cascader>
                </div>
            </el-form-item>
          </el-col> 
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="街道地址：" prop="street">
              <el-input  class="_input" v-model="temp.street"  placeholder="街道地址" ></el-input>
            </el-form-item>
          </el-col> 
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="邮政编码：" prop="postalCode">
              <el-input  class="_input"  v-model="temp.postalCode" placeholder="邮政编码" ></el-input>
            </el-form-item>
          </el-col> 
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="收件人姓名：" prop="userName">
              <el-input  class="_input" v-model="temp.userName"  placeholder="收件人姓名" ></el-input>
            </el-form-item>
          </el-col> 
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="手机号码：" prop="phone">
              <el-input  class="_input" v-model="temp.phone"  placeholder="手机号码" ></el-input>
            </el-form-item>
          </el-col> 
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="saveAddress">修改</el-button>
        <el-button size="mini" type="primary" @click="meng3 = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import areaJs from '@/utils/area.js'
  import { getToken } from '@/utils/auth'
  export default {
    props: {
      address: {
        type:String
      },
      street: {
        type:String
      },
      postalCode: {
        type:String
      },
      userName: {
        type:String
      },
      phone: {
        type:String
      },
    } ,
    methods: {  
      saveAddress(){
        this.meng3 = false
        // for (var i = 0; i < options.length; i++) {
        //   if(options[i].id){
        //     for (var m = 0; m < options[i].length; m++) {
        //       for (var n = 0; i < options[i][m].length; n++) {
        //         options[i][m][n]
        //       }
        //     }    
        //   }
        // }
        this.temp.address= this.selectedOptions2 ||  this.temp.address ;
        this.$emit('temp', this.temp)
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
      show(){
        this.meng3 = true
      },
    },
    data() {
      return {
        options: areajson,  //areajson为引入外部js文件的json数组名称
        meng3:false,
        selectedOptions2:"",
      }
    },
    computed: {
      temp() {
        var obj = {
          address:this.address,
          street:this.street,
          postalCode:this.postalCode,
          userName:this.userName,
          phone:this.phone
        }
        return obj
      },
    },

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
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