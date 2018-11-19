<template>
   <div style="margin-left:40rpx;">
      <el-form :model="temp" label-width="150px" style="margin-top:40px">
             <router-link to="/setting/problemadd"  style="margin-left:75px">
                 <el-button type="primary">新增问题</el-button>
                 </router-link>
                 <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="昵称：" prop="temp.orderNum" style="margin-top:40px">
                <el-input  class="_input"  v-model="temp.orderNum" placeholder="请输入昵称" style="width:250px"></el-input>
              </el-form-item>
            </el-col>  
             </el-row>
                <span style="margin-left:75px;">
                  <el-button type="primary">查询</el-button>
                  <el-button @click="resetForm('temp')">重置</el-button>
                </span>
              <div>
                <template >
                    <el-table :data="shopList" border style="width: 80%;margin-left:80px;margin-top:40px">
                    <el-table-column align="center" prop="date" label="标题"></el-table-column>
                    <el-table-column align="center" prop="evaluate" label="浏览量"></el-table-column>
                    <el-table-column align="center" prop="Member" label="排序" ></el-table-column>
                    <el-table-column align="center" prop="score" label="创建时间" ></el-table-column>
                     <el-table-column align="center" label="操作" width="300" >
                        <template slot-scope="scope">
                        <el-button size="mini" type="primary" style="margin-bottom: 10px;" @click="handleModifyStatus(scope.row, scope.$index,'edite')">编辑</el-button>
                        <el-button size="mini" type="danger" style="margin-bottom: 10px;" @click="deleteCurrentItem(scope)">删除</el-button>
                        </template>
                    </el-table-column>  
                    </el-table>
                    <el-dialog title="提示" :visible.sync="handleModifyStatuscd" width="20%" center>
                      <p style="text-align: center;font-size: 20px;">确定要删除吗？</p>
                      <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="handleModifyStatus(tempData.row,tempData.$index,'deleted')">确 定</el-button>
                        <el-button @click="handleModifyStatuscd = false">取 消</el-button>
                      </span>
                    </el-dialog>
                </template>
                
             
          </div>
    </el-form>
   </div>
</template>

<script>
  export default {
    data() {
      return {
         handleModifyStatuscd: false,
          value1: true,
          value2: true,
           shopList: [{
          date:'王大魔王',
          evaluate: '18700235647',
          Member: 'zw318212',
          score: '10514521@qq.com',
          content: '呵呵呵呵呵男男男案',
          score_time:'官方就感觉到高低贵贱发动机盖各回各家',
          state:'2018-10124'
        }],
       temp:{
          // shopName:"",
          orderNum:"",
          orderState:"",
          orderOrign:"",
        }
      }
    },
    methods: {
      deleteCurrentItem(scope) { //删除
        this.handleModifyStatuscd = true
         this.tempData = scope
       },
       handleModifyStatus(row, index, type){
          this.handleModifyStatuscd = false
           if (type === 'edite') {
          this.$router.push({
            path: '/setting/problemadd',
            query: {
              id: row.id,
              villageId:row.villageId
            }
          })
        }else if(type === 'deleted'){

        }
       },
        resetForm(formName) {
      this.$refs[formName].resetFields()
      this.temp.orderNum = '';
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