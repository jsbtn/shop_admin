<template>
  <div class="serch-info">
    <el-form ref="temp" label-position="left" :model="temp" label-width="90px">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="temp.name" class="_input" placeholder="姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="手机号：" prop="phone">
            <el-input v-model="temp.phone" class="_input" placeholder="手机号" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label-width="60px" label="等级：" prop="grade">
            <el-select v-model="temp.grade" filterable clearable class="filter-item">
              <el-option v-for="item in grades" :key="item.id" :label="item.name" :value="item.id"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label-width="60px" label="状态：" prop="state">
            <el-select v-model="temp.state" filterable clearable class="filter-item" @change="">
              <el-option v-for="item in states" :key="item.id" :label="item.name" :value="item.id"/>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
          <el-form-item style="display: inline-block; margin-left: 10px;" label="有效期：" prop="starTime">
            <el-date-picker v-model="temp.starTime" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"/>
          </el-form-item>
            <div style="display: inline-block; text-align: center; margin: 0px 20px; height: 40px;line-height: 40px;" > 至 </div>
            <el-date-picker v-model="temp.endTime" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"/>
      </el-row>
      <el-row>
        <el-button class="bthseach" style="margin-left: 50px;" type="primary" @click="serch">搜索</el-button>
        <el-button class="bthseach" style="margin-left: 10px;" type="primary" @click="resetForm('temp')">重置</el-button>
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
      states: [
        { name: '全部', id: 1, bolen: true },
        { name: '正常', id: 2, bolen: false },
        { name: '禁用', id: 3, bolen: false },
        { name: '过期', id: 4, bolen: false },

      ],
      grades: [
        { name: '全部', id: 1 },
        { name: '等级一', id: 2 },
        { name: '等级', id: 3 },
        { name: '等级2', id: 4 }
      ],     
      temp: {
        name:"",
        phone:"",
        starTime:"",
        endTime:"",
        state:1,
        grade:1,
      },

    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    serch() {
      this.$emit('serch', JSON.stringify(this.temp))
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.temp.endTime = '';
    }
  }

}
</script>
