<template>
    <div >
      <div style="margin:10px 0px;" class="serch">
        <el-form ref="temp" label-position="left" :model="temp" label-width="90px">
          <el-row :gutter="20">
            <el-col :span="5">
              <el-form-item label="姓名：" prop="code">
                <el-input v-model="temp.code" class="_input" type="number" placeholder="姓名" />
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="手机号：" prop="phone">
                <el-input v-model="temp.phone" class="_input" placeholder="手机号" />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item style="display: inline-block; margin-left: 10px;" label="有效期：" prop="starTime">
                <el-date-picker v-model="temp.starTime" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"/>
              </el-form-item>
              <div style="display: inline-block; text-align: center; margin: 0px 20px; height: 40px;line-height: 40px;" > 至 </div>
              <el-date-picker v-model="temp.endTime" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"/> </el-date-picker>
            </el-col>
            <el-col :span="4">
              <el-button class="bthseach" style="margin-left: 50px;" type="primary" @click="serch">搜索</el-button>
              <el-button class="bthseach" style="margin-left: 10px;" type="primary" @click="resetForm('temp')">重置</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="table">
        <template>
          <el-table  ref="multipleTable" tooltip-effect="dark"  @selection-change="handleSelectionChange" :data="tableData"  stripe border style="width: 100%">
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column align="center" prop="name" label="提现编号" > </el-table-column>
            <el-table-column align="center" prop="phone" label="账户" > </el-table-column>
            <el-table-column align="center" prop="sendTime"  label="开户银行" > </el-table-column>
            <el-table-column align="center" prop="salePrice" label="开户姓名" ></el-table-column>
            <el-table-column align="center" prop="salePrice" label="银行账号" ></el-table-column>
            <el-table-column align="center" prop="salePrice" label="提现金额" ></el-table-column>
            <el-table-column align="center" prop="salePrice" label="手续费" ></el-table-column>
            <el-table-column align="center" prop="salePrice" label="申请时间" ></el-table-column>
            <el-table-column align="center" prop="salePrice" label="操作" >
              <template slot-scope="props">
                  <el-button class="bthseach" size="mini" type="primary" @click="handleClick(props.row)">审核</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="meng">
        <el-dialog :visible.sync="meng" width="30%" > 
          <div slot="title" class="_title">
            <span class="name">提现审核</span><span class="cupos"></span>
          </div>
          <el-form style="padding-top:0px;"  :model="mengForm" label-width="120px">
              <el-form-item label="审核结果：" prop="phone">
                <template>
                  <el-radio v-model="mengForm.radio" label="1">同意</el-radio>
                  <el-radio v-model="mengForm.radio" label="2">拒绝</el-radio>
                </template>
              </el-form-item>
              <el-form-item v-if="mengForm.radio == 2 " label="拒绝理由：" >
                <el-input type="textarea" v-model="mengForm.reason" style="width:100%;"  placeholder="不超过50个字" maxlength="50" ></el-input>
              </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button size="mini" type="primary" @click="save">确定</el-button>
            <el-button size="mini" @click="meng=false">取消</el-button>
          </span> 
        </el-dialog>
      </div>
    </div>
</template>
<style type="text/css" scpoed>
    .width{
      width:300px;
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
</style>
<script>
  export default {
    data() {
      return {
        meng:false,
        temp: {
          code:"",
          name:"",
          phone:"",
          starTime:"",
          endTime:"",
        },
        tableData:[
          "sdf",
          "sdf",
        ],
        multipleSelection:[],
        mengForm:{  
          radio:'1',          
          reason:"",
        }
      }
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields()
        this.temp.endTime = '';
      },
      serch(){

      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleClick(row){
        this.meng = true
      },
      save(){
        this.meng = false
      }
    }
  }
</script>