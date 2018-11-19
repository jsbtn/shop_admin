<template>
  <div style="width:60%;padding:20px 50px;">
    <el-form label-position="left" ref="form" :rules="rules" :model="form" label-width="100px">
      <el-form-item label="姓名：" prop="name">
        <el-input class="width" placeholder="姓名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号：" prop="phone">
        <el-input class="width" type='Number' placeholder="手机号" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="公司名称：" prop="firmName">
        <el-input class="width" placeholder="公司名称" v-model="form.firmName"></el-input>
      </el-form-item>
      <el-form-item label="公司地址：" prop="firmAddress">
        <el-input class="width" placeholder="公司地址" v-model="form.firmAddress"></el-input>
      </el-form-item>
      <el-form-item label="有效期：" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2"><span style="margin-left:16px">至</span></el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item  label="等级：" prop="grade">
        <el-select
          v-model="form.grade"
          filterable
          clearable
          class="filter-item"
          @change="">
          <el-option
            v-for="item in grades"
            :key="item.id"
            :label="item.name"
            :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="备注：" prop="remark">
        <el-input placeholder="备注" :autosize="{ minRows: 4, maxRows: 8}" type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="resfrom">取消</el-button>
      </el-form-item>
    </el-form>
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
        grades: [
          { name: '全部', id: 1 },
          { name: '等级一', id: 2 },
          { name: '等级', id: 3 },
          { name: '等级2', id: 4 }
        ],
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { min:11,max:11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          firmName: [
            { required: true, message: '请输入公司名称', trigger: 'blur' },
          ],
          firmAddress: [
            { required: true, message: '请输入公司地址', trigger: 'blur' },
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          grade: [
            { required: true, message: '请选择等级', trigger: 'change' }
          ],
          remark: [
            { required: true, message: '请填写备注', trigger: 'blur' }
          ]
        },
        form: {
          name: '',
          phone:"",
          firmName:"",
          firmAddress:"",
          grade:1,
          date1: '',
          date2: '',
          remark:"",
        }
      }
    },
    methods: {
      onSubmit() {
        this.$router.push({
          path:"/magerSale/agent/"
        })
      },
      resfrom(){
        this.$router.push({
          path:"/magerSale/agent/"
        })
      },
    }
  }
</script>