
<template>
<el-form ref="temp" :model="temp" label-width="150px" style="margin-top:40px">
  <el-form-item label="标题：" prop="orderNum">
    <el-input class="_input" v-model="temp.orderNum" placeholder="请输入标题" style="width:250px"></el-input>
  </el-form-item>
  <el-form-item label="排序：" prop="sort">
    <el-input class="_input" v-model="temp.sort" placeholder="请输入排序" style="width:250px"></el-input>
  </el-form-item>
   <el-form-item label="详情：" prop="desc">
    <el-input type="textarea" v-model="temp.desc" style="width:350px"></el-input>
  </el-form-item>
   <router-link to="/setting/problem">
  <el-form-item>
   <el-button type="primary">保存</el-button>
  </el-form-item>
   </router-link>
</el-form>

</template>
<script>
    export default {
        data() {
            return {
                temp: {
                    // shopName:"",
                    orderNum: "",
                    sort: "",
                    desc: ""
                }
            };
        },
        methods: {}
    }

    ;
</script>