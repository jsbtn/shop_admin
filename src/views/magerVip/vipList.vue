<template>
  <div class="app-container" style="margin-top: 10px;">
    <el-form ref="listQuery" :model="listQuery" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="会员昵称：" prop="nickname">
            <el-input v-model="listQuery.nickname" placeholder="请输入会员昵称" max-length="20"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="手机号：" prop="phone">
            <el-input v-model="listQuery.phone" placeholder="请输入手机号" max-length="20" type="number"
                      style="width: 200px;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="会员等级：" prop="level">
            <el-input v-model="listQuery.level" placeholder="请输入会员等级" max-length="20"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="来源：" prop="sourceId">
            <el-select style="width: 200px" v-model="listQuery.sourceId" placeholder="全部">
              <el-option v-for="item in sourceList" :key="item.id" :label="item.sourceName"
                         :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="注册时间：" prop="startTime">
            <el-col :span="11">
              <el-form-item prop="startTime">
                <el-date-picker
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  type="date" placeholder="选择时间"
                  v-model="listQuery.startTime"
                  style="width: 160px; left: -10px;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">至</el-col>
            <el-col :span="11">
              <el-form-item prop="endTime">
                <el-date-picker
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  type="date" placeholder="选择时间"
                  v-model="listQuery.endTime"
                  style="width: 160px;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="handleFilter">查 询</el-button>
        <el-button @click="resetForm('listQuery')">重 置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" style="width: 95%;" border fit highlight-current-row>
      <el-table-column align="center" label="头像" prop="avatar"></el-table-column>
      <el-table-column align="center" label="昵称" prop="nickname"></el-table-column>
      <el-table-column align="center" label="手机号" prop="phone"></el-table-column>
      <el-table-column align="center" label="等级" prop="level"></el-table-column>
      <el-table-column align="center" label="积分" prop="level"></el-table-column>
      <el-table-column align="center" label="来源" prop="level"></el-table-column>
      <el-table-column align="center" label="购买次数" prop="level"></el-table-column>
      <el-table-column align="center" label="交易金额" prop="level"></el-table-column>
      <el-table-column align="center" label="操作" prop="level"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'vipList',
    data() {
      return {
        sourceList: [
          { id: 1, sourceName: '小程序' },
          { id: 2, sourceName: '网上商城' },
          { id: 3, sourceName: '其他' }
        ],
        listQuery: {
          nickname: '',
          phone: '',
          level: '',
          sourceId: '',
          startTime: '',
          endTime: ''
        },
        list: []
      }
    },
    methods: {
      handleFilter() { // 查询

      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>

</style>
