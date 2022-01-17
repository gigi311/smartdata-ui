<template>
  <div class="data_input_content">
    <!-- INPUT输入框 -->
    <el-input placeholder="请输入内容" v-bind:value="inputVal" @input="v=>$emit('input',v)" style="with:100%">
        <el-button slot="append" icon="el-icon-s-operation" @click="showWin=true"></el-button>
    </el-input>
    <!-- 打开的数据选择窗口 -->
    <data-picker-win :dialogVisible.sync="showWin" :inputVal="inputVal" :query-fn="queryFn" @submit="saveInputs"></data-picker-win>
  </div>
</template>

<script>
import DataPickerWin from './DataPickerWin'
export default {
    name: 'SdDataInput',
    components:{
        DataPickerWin
    },
    model: {
        prop: 'inputVal',
        event: 'input'
    },
    props: {
        queryFn: {
            type: Function,
            default: ()=>{}
        },
        inputVal: String
    },
    data(){
        return {
            showWin: false,
        }
    },

    methods:{
        saveInputs(val){
            this.$emit('input',val);
        }
    }


}
</script>

<style lang="less" scoped>
.data_input_content {

}

</style>