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
            <el-col :span="10">
              <el-form-item style="display: inline-block; margin-left: 10px;" label="审核时间：" prop="starTime">
                <el-date-picker v-model="temp.date1" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"/>
              </el-form-item>
              <div style="display: inline-block; text-align: center; margin: 0px 20px; height: 40px;line-height: 40px;" > 至 </div>
              <el-date-picker v-model="temp.date2" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"/> </el-date-picker>
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
            <el-table-column align="center" prop="salePrice" label="审核时间" ></el-table-column>
            <el-table-column align="center" prop="salePrice" label="操作"  >
              <template slot-scope="props">
                  <el-button class="bthseach" size="mini" type="primary" @click="makeMoney(props.row)">标记打款</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
</template>
<style type="text/css" scpoed>
    .width{
      width:300px;
    }
</style>
<script>
  export default {
    data() {
      return {
        temp: {
          code:"",
          name:"",
          phone:"",
          starTime:"",
          endTime:"",
          date1:"",
          date2:"",
        },
        tableData:[
          "sdf",
          "sdf",
        ],
        multipleSelection:[],
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
      makeMoney(row){
        this.$confirm('是否标记打款', '提示', {
          confirmButtonText: '是',
          cancelButtonText: '否',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '标记成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消标记'
          });          
        });
      },
    }
  }
</script>