<template>
  <div>
      <el-dialog style="max-height=400px;overflow-y: scroll;" :visible.sync="meng"  width="40%" >
        <div slot="title" class="_title">
          <span class="name">商品发货</span>
        </div>
        <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="商品" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="数量" width="120"></el-table-column>
            <el-table-column prop="address" label="已发" show-overflow-tooltip></el-table-column>
            <el-table-column prop="" label="物流公司" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.address }}</template>
            </el-table-column>
            <el-table-column prop="address" label="快递单号" ></el-table-column>
        </el-table>
        <el-form ref="form" :model="form" style="padding-right:50px; margin-top:20px;" label-width="110px">
          <el-form-item label="收货地址：">
            <div class="info">浙江温州江南皮革场</div>
          </el-form-item>
          <el-form-item label="发货方式：">
            <el-radio v-model="radio" label="1">需要物流</el-radio>
            <el-radio v-model="radio" label="2">无需物流</el-radio>
          </el-form-item>
          <el-form-item label="物流公司：">
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item label="快递单号：">
            <el-input  v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="买家留言：">
            <div class="info">浙江温州江南皮革场</div>
          </el-form-item>
          <el-form-item label="订单留言：">
            <div class="info">浙江温州江南皮革场</div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" @click="meng = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="driGoods">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>
<script>
  import { getToken } from '@/utils/auth'
  export default {
    data() {
      return {
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          options: [
            {
              value: 1,
              label: '顺丰'
            }, 
            {
              value: 2,
              label: '中通'
            },
          ],
          value: 1,
          radio:'1',
          tableData3: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          ],
          multipleSelection: [],
          meng:false,
      }
    },
    methods: {  
      driGoods(){
        let obj = this.obj
        this.$emit('info',obj)
        this.meng = false
      },
      show(info){
        this.obj = info
        this.meng = true
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
      }
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