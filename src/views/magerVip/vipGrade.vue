<template>
  <div class="app-container" style="margin-top: 10px;width: 80%">
    <el-button type="primary" @click="addLevel" style="margin-bottom: 10px;">新增等级</el-button>

    <el-table :data="list" style="width: 95%;" border fit highlight-current-row>
      <el-table-column align="center" label="等级logo" prop="logo"></el-table-column>
      <el-table-column align="center" label="等级logo" prop="levelName"></el-table-column>
      <el-table-column align="center" label="升级条件（累计购买金额或累计积分" prop="rules"></el-table-column>
      <el-table-column align="center" label="基础权益" prop="rights"></el-table-column>
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

    <el-dialog title="等级设置" :visible.sync="addLevelShow" width="20%;">
      <el-form :model="addData">
        <el-form-item label="等级名称:" prop="levelName">
          <el-input v-model="addData.levelName" placeholder="请输入等级名称" style="width: 70%"></el-input>
        </el-form-item>
        <el-form-item label="等级logo：" prop="logo">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="升级条件：">
          <el-checkbox v-model="addData.totalCostChecked">累计购买金额达到</el-checkbox>
          <el-input style="width:100px;"></el-input>
          元
          <el-checkbox v-model="addData.totalScoreChecked" style="margin-left: 50px;">累计积分达到</el-checkbox>
          <el-input style="width:100px;"></el-input>
          元
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">确定</el-button>
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
        imgUrl: '',
        list: [],
        addData: {
          totalCostChecked: false,
          totalScoreChecked: false
        },
        delVisible: false,
        addLevelShow: false
      }
    },
    methods: {
      submit() {

      },
      cancel() {
        this.addLevelShow = false
      },
      addLevel() {
        this.addLevelShow = true
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
      }
    }
  }
</script>

<style scoped>

</style>
