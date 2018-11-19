<template>
    <div class="_contenter">
      <div class="body">
          <div class="tabel">
            <div class="card-panel">
              <el-tabs :value="tabsName" @tab-click="handleClick" type="border-card">
                <el-tab-pane name="one" label="等级设置">
                    <el-button type="primary" @click="addGarde" plain>新增等级</el-button>
                    <div style="margin:20px 0px;" >
                      <template>
                        <el-table  ref="multipleTable" tooltip-effect="dark"  :data="tableData"  stripe border style="width: 100%">
                          <el-table-column align="center" prop="name" width="100px;" label="等级logo" > </el-table-column>
                          <el-table-column align="center" prop="phone" label="等级名称" > </el-table-column>
                          <el-table-column align="center" prop="sendTime"  label="升级条件（销售额累计）" > </el-table-column>
                          <el-table-column align="center" prop="sendTime"  label="佣金提成" > </el-table-column>

                          <el-table-column align="center" prop="salePrice" label="操作"   width="200px;">
                            <template slot-scope="props">
                                <el-button class="bthseach" size="mini" type="primary" @click="editeClick(props.row)">编辑</el-button>
                                <el-button class="bthseach" size="mini" type="primary" @click="delClick(props.row)"> 删除</el-button>
                            </template>
                          </el-table-column>
                        </el-table>
                      </template>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="two" label="提现设置">
                    <el-form  width="50%;" label-position="left" ref="form"  :model="form" label-width="140px">
                      <el-form-item label="最低提现金额：" prop="minMoney">
                        <el-input class="width" placeholder="最低提现金额" v-model="form.minMoney"></el-input> 元
                      </el-form-item>
                      <el-form-item label="提现手续费：" prop="fee">
                        <el-input class="width" type='Number' placeholder="提现手续费" v-model="form.fee"></el-input> %
                      </el-form-item>
                      <el-form-item label="单日提现不超过：" prop="maxMoney">
                        <el-input class="width" placeholder="单日提现不超过" v-model="form.maxMoney"></el-input> 元
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                      </el-form-item>
                    </el-form>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
      </div>
      <div class="meng">
        <el-dialog :visible.sync="meng" width="30%" > 
          <div slot="title" class="_title">
            <span class="name">添加等级</span><span class="cupos"></span>
          </div>
          <el-form style="padding-top:0px;" :ref="mengForm" :model="mengForm" label-width="120px">
              <el-form-item  label="等级名称："  prop="name">
                <el-input  v-model="mengForm.name" style="width:100%;"  placeholder="不超过50个字" maxlength="50" ></el-input>
              </el-form-item>
              <el-form-item  label="等级logo："  prop="logo" >
                <el-upload
                  class="avatar-uploader"
                  id="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="mengForm.logo" :src="mengForm.logo" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="升级条件：" prop="condition">
                   累计销售额达到<input style="margin:0px 10px; width:80px; color:#666;" type="text" v-model="mengForm.condition"/>元
              </el-form-item>
              <el-form-item  label="佣金提成："  prop="extract">
                <input type="text" style="margin:0px 10px 0px 0px; width:60px;color:#666;" v-model="mengForm.extract"/>%
              </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer" style="text-align:center">
            <el-button size="mini" type="primary" @click="save">确定</el-button>
            <el-button size="mini" @click="meng=false">取消</el-button>
          </span> 
        </el-dialog>
      </div>
    </div>
</template>

<script>
  import store from '../../store'
  export default {
    name: 'refunds',
    data() {      
      return { 
        tabsName:"one",
        meng:false,
        tableData:[1,1],
        mengForm:{
          name:"",
          logo:"",
          condition:"",
          extract:"",
        },
        form: {
          minMoney:"",
          fee:"",
          maxMoney:"",
        },
      }
    },
    created() { 

    },
    methods: {
      handleClick(tab){
        this.tabsName = tab.name
      },
      editeClick(row){
        console.log(row)
      },
      delClick(row){
          console.log(row)
      },
      addGarde(){
        this.mengForm ={ name:"", logo:"", condition:"", extract:"" }
        this.meng = true
      },
      save(){
        this.meng = false
      },
      // logo上传
      handleAvatarSuccess(res, file) {
        this.mengForm.logo = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      onSubmit(){
        console.log("sss")
      }, 
    },
    computed: {

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .width{
      width: 200px;
    }
    *{
      box-sizing: border-box;
    }
    ._contenter{
      padding:20px 40px;
    }
    .body{
      margin-top: 20px;
    }
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

    body .meng #avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 18px;
      color: #8c939d;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .avatar {
      width: 50px;
      height: 50px;
      display: block;
    }
</style>
