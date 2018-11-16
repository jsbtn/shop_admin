<template>
  <div>
      <el-dialog  :visible.sync="meng6"  width="40%" >
        <div slot="title" class="_title">
          <span class="name">退款处理——{{bolentext}}</span>
        </div>
        <el-form  label-width="100px">
          <div class="form">
            <div style="height: 60px;line-height: 60px; font-size: 14px; color: #000; padding: 0px 10px;background: #E6A23C; opacity: 0.5;"> 该笔退款申请是处于待发货状态下提出的，同意后退款将自动退回至买家付款账户。</div>
            <div style="height: 60px;line-height: 60px; font-size: 14px; color: #808080; padding: 0px 10px;"> 处理方式：待发货状态下的申请退款</div>
          
            <div style="height: 60px;line-height: 60px; font-size: 14px; color: #808080; padding: 0px 10px;"> 退款金额：30.00元</div>

          </div>
          <div v-if="!bolen" style="padding:0px 10px;">
              <div style="margin-bottom:10px;">退款理由：</div>
             <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入原因" v-model="remark">
              </el-input>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="meng6 = false">取 消</el-button>
          <el-button type="primary" @click="saveRefunds">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>
<script>
  import { getToken } from '@/utils/auth'
  export default {
    data() {
      return {
          meng6:false,
          remark:'',
          bolen:false,
          bolentext:'',
      }
    },
    methods: {  
      saveRefunds(){
        this.meng6 = false
        let obj = {
          obj:this.obj,
          remark:this.remark,
          bolen:this.bolen
        }
        this.$emit('info',obj)
      },
      show(bolen,info){
        this.obj = info
        this.bolen = bolen 
        this.bolentext = bolen ? '同意' : '不同意' 
        this.meng6 = true
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