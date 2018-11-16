<template>
  <div class="serch-info">
    <el-form ref="temp" :model="temp" label-width="150px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="售后服务号：" prop="shopServiceNum">
            <el-input v-model="temp.shopServiceNum" class="_input" placeholder="售后服务号" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="关联订单号：" prop="orderNum">
            <el-input v-model="temp.orderNum" class="_input" placeholder="关联订单号" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="退款状态：" prop="refundState">
            <el-select
              v-model="temp.refundState"
              filterable
              clearable
              class="filter-item"
              placeholder="退款状态"
              @change="">
              <el-option
                v-for="item in refundStates"
                :key="item.id"
                :label="item.name"
                :value="item.id"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="退款类型：" prop="reundType">
            <el-select
              v-model="temp.reundType"
              filterable
              clearable
              class="filter-item"
              placeholder="退款类型"
              @change="">
              <el-option
                v-for="item in refundsTypes"
                :key="item.id"
                :label="item.name"
                :value="item.id"/>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="会员账号：" prop="vipVumber">
            <el-input v-model="temp.vipVumber" class="_input" placeholder="账号" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="会员手机：" prop="vipPhone"">
            <el-input v-model="temp.vipPhone" class="_input" placeholder="手机号" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="申请时间：" prop="applyTime">
            <el-date-picker
              v-model="temp.applyTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-button style="margin-left: 50px;" type="primary" @click="serch">搜索</el-button>
        <el-button style="margin-left: 10px;" type="primary" @click="resetForm('temp')">重置</el-button>
      </el-row>
    </el-form>
  </div>
</template>
<style type="text/css" scoped></style>

<script>
import { getToken } from '@/utils/auth'
export default {
  name: 'Serchinfo',
  data() {
    return {
      refundStates: [
        { name: '全部', id: 1, bolen: true },
        { name: '待卖家处理', id: 2, bolen: false },
        { name: '待买家处理', id: 3, bolen: false },
        { name: '同意退款', id: 4, bolen: false },
        { name: '已取消', id: 5, bolen: false },
        { name: '退款成功', id: 6, bolen: false },
        { name: '退款失败', id: 7, bolen: false }
      ],
      refundsTypes: [
        { name: '全部', id: 1 },
        { name: '仅退款', id: 2 },
        { name: '退货退款', id: 3 },
        { name: '仅换货', id: 4 }
      ],
      temp: {
        shopServiceNum: '',
        orderNum: '',
        refundState: '',
        vipVumber: '',
        vipPhone: '',
        applyTime: '',
        reundType: ''
      }
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    serch() {
      this.$emit('child-say', JSON.stringify(this.temp))
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>
