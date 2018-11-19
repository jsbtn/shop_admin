<template>
     <el-tabs v-model="activeName" @tab-click="handleClick">
         <div>
              <el-tab-pane label="积分消费设置" name="second" class="consumption">
                  <span>默认积分抵扣比例：</span> 1元=<el-input v-model="temp.orderNum" style="width:250px"></el-input> 积分
                  <div>
                      <span>最高抵扣不超过商品售价： </span><el-input v-model="temp.orderNum" style="width:250px"></el-input> %
                  </div>
                  <el-button type="primary">保 存</el-button>
              </el-tab-pane>
         </div>
       <div class="filter-container">
            <el-tab-pane label="积分获取设置" name="first" class="checkbox" :model="formLabelAlign">
            <div>
                 <el-checkbox v-model="checked">分享成功送积分 </el-checkbox> <el-input v-model="temp.orderNum" style="width:250px"></el-input><span> 积分</span>
            </div>
             <div>
                 <el-checkbox v-model="checked">主动确认收货送积分 </el-checkbox> <el-input  v-model="temp.orderNum" style="width:250px"></el-input><span> 积分</span>
             </div>
             <div>
                 <el-checkbox v-model="checked">晒单送积分 </el-checkbox> <el-input v-model="temp.orderNum" style="width:250px"></el-input><span> 积分</span>
             </div>
            <div>
                 <el-checkbox v-model="checked">签到送积分 </el-checkbox> <el-input v-model="temp.orderNum" style="width:100px"></el-input><span> 积分，连续签到</span><el-input v-model="temp.orderNum" style="width:100px"></el-input><span>天，送</span><el-input v-model="temp.orderNum" style="width:100px"></el-input><span> 积分</span>
            </div>
            <div>
                 <el-checkbox v-model="checked">消费金额送积分 </el-checkbox> <el-input v-model="temp.orderNum"  style="width:100px"></el-input><span> 元，送</span><el-input v-model="temp.orderNum"style="width:100px"></el-input><span> 积分</span>
             </div>
              <div>
                <span>每日积分上限：</span><el-input v-model="temp.orderNum" style="width:250px"></el-input><span> 积分</span>
             </div>
             <div>
                  <el-button type="primary">保 存</el-button>
             </div>
        </el-tab-pane>
       
       
       </div>
  </el-tabs>
</template>
<script>
    export default {
        data() {
            return {
                checked:false,
                formLabelAlign:'left',
                activeName:'first',
                temp: {
                   
                }
            };
        },
        methods: {
              handleClick(tab, event) {
        // console.log(tab, event);
      }
        }
    }
</script>
<style>
.checkbox{
    margin-left: 40px
}
.checkbox div{
    line-height: 80px;
}
.consumption{
line-height: 80px;
margin-left: 40px
}
</style>