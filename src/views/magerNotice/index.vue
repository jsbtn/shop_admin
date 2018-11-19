<template>
  <div class="app-container" style="margin-top: 10px;width: 90%;">
    <el-button type="primary" @click="addNotice" style="margin-bottom: 10px;">新增公告</el-button>

    <el-form ref="listQuery" :model="listQuery" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="标题：" prop="title">
            <el-input v-model="listQuery.title" placeholder="请输入标题" max-length="20"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="状态：" prop="stateId">
            <el-select style="width: 200px" v-model="listQuery.state" placeholder="全部">
              <el-option v-for="item in stateList" :key="item.id" :label="item.stateName"
                         :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="上线时间：" prop="startTime">
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
      <el-table-column align="center" label="标题" prop="logo"></el-table-column>
      <el-table-column align="center" label="上线时间" prop="levelName"></el-table-column>
      <el-table-column align="center" label="浏览量" prop="rules"></el-table-column>
      <el-table-column align="center" label="排序" prop="rights"></el-table-column>
      <el-table-column align="center" label="创建时间" prop="rights"></el-table-column>
      <el-table-column align="center" label="状态" prop="rights"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleModifyStatus(scope.row,'edit')">编 辑</el-button>
          <el-button type="danger" size="mini" @click="deleteCurrentItem(scope)">删 除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="提示" :visible.sync="delVisible" width="20%" center>
      <p style="text-align: center;font-size: 20px;">确定要删除吗？</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleModifyStatus(tempData.row, 'delete')">确 定</el-button>
        <el-button @click="handleModifyStatuscd = false">取 消</el-button>
      </span>
    </el-dialog>

    <el-dialog title="新增公告" :visible.sync="addNoticeShow" width="900px;">
      <el-form :model="addData">
        <el-form-item label="标题：" prop="title">
          <el-input v-model="addData.title" placeholder="请输入等级名称" style="width: 70%"></el-input>
        </el-form-item>
        <el-form-item label="排序：" prop="order">
          <el-input v-model="addData.order" placeholder="请输入排序" style="width: 70%;"></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-form-item label="上线时间：" prop="startTime">
            <el-col :span="6">
              <el-form-item prop="startTime">
                <el-date-picker
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  type="date" placeholder="选择时间"
                  v-model="addData.startTime"
                  style="width: 160px; left: -10px;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">至</el-col>
            <el-col :span="6">
              <el-form-item prop="endTime">
                <el-date-picker
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  type="date" placeholder="选择时间"
                  v-model="addData.endTime"
                  style="width: 160px;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submit">保存</el-button>
          <el-button type="info" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'vipGrade',
    data() {
      return {
        stateList: [
          { id: 1, stateName: '未开始' },
          { id: 2, stateName: '进行中' },
          { id: 3, stateName: '其他' }
        ],
        listQuery: {
          title: '',
          stateId: '',
          startTime: '',
          endTime: ''
        },
        imgUrl: '',
        list: [],
        addData: {
          totalCostChecked: false,
          totalScoreChecked: false
        },
        delVisible: false,
        addNoticeShow: false
      }
    },
    methods: {
      submit() {

      },
      cancel() {
        this.addNoticeShow = false
      },
      addNotice() {
        this.addNoticeShow = true
      },
      handleModifyStatus(row, type) {

      },
      deleteCurrentItem(scope) {
        this.delVisible = true
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>

</style>
