<template>
  <div class="compoent">
    <el-dialog width="700px" :visible.sync="outerVisible">
      <div slot="title" class="_title">
        <span class="name">预览图片</span>
      </div>
      <div>
        <template>
            <div class="img_box">
              <img class="autow" :src="imgs[index]"/>
            </div>
<!--           <el-carousel  :autoplay="false" :interval="0" :initial-index="index" indicator-position="outside">
            <el-carousel-item  style="width: 100%;height: 100%; box-sizing: border-box;"  v-for="(item,index) in imgs" :key="index">
              <div class="img_box">
                <img class="autoh" :src="item"/>
              </div>
            </el-carousel-item>
          </el-carousel>
 -->        
        </template>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import { getToken } from '@/utils/auth'
  export default {
    name: 'niceTab',
    data(){
      return {
        outerVisible:false,
        imgs:[],
        index:'',
      }
    },
    methods: {  
      // 给外部一个调用的方法
      show(arr,index){
        this.imgs = arr 
        this.index = index  
        this.outerVisible = true
      },
    },
    computed: {
    },

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .img_box{
      width:100%;
      height:660px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .img_box .autoh{
      display: inline-block;
      width: 100%;
      height: 660px;
    }
    .autow{
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
    }
    ._title{
      font-size: 14px;
      color: #666;
    }
</style>