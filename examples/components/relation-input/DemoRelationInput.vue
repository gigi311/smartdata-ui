<template>
<div>
    <div v-if="demo=='1'">
        <sd-relation-input v-model="val1" :left-data="leftData" :mid-data="midData" :right-data="rightData" @remove="clickRemove" @add="clickAdd"></sd-relation-input>
        <div style="margin-top:25px;">val1值为：{{JSON.stringify(val1)}}</div>
    </div>
    <div v-if="demo=='2'" class="column_grid">
        <span>medium</span>
        <sd-relation-input v-model="val2" :left-data="leftData" :mid-data="midData" :right-data="rightData"></sd-relation-input>
        <span>small</span>
        <sd-relation-input v-model="val3" :left-data="leftData" :mid-data="midData" :right-data="rightData" size="small"></sd-relation-input>
        <span>mini</span>
        <sd-relation-input v-model="val4" :left-data="leftData" :mid-data="midData" :right-data="rightData" size="mini"></sd-relation-input>
    </div>
    <div v-if="demo=='3'">
        <sd-relation-input v-model="val1" :left-data="leftData" :mid-data="midData" :right-data="rightData">
            <template v-slot:tools="slotProps">
                <el-button type="text" @click="clickRemove(slotProps.busid)">哈哈</el-button>
            </template>
        </sd-relation-input>
    </div>

</div>
</template>

<script>
export default {
    name: 'DemoRelationInput',
    props: ['demo'],
    data() {
        return {
            val1: {},
            val2: {},
            val3: {},
            val4: {},
            leftData: [{
                label: '字段A',
                value: 'col_a'
            }],
            midData: [{
                label: '等于',
                value: '=='
            }],
            rightData: [{
                label: '字段A',
                value: 'col_a'
            }],
        }
    },
    methods: {
        clickRemove(busid) {
            this.$message({
                message: '你点击了删除按钮，回传busid为=>' + busid,
                type: 'warning'
            });
        },
        clickAdd() {
            this.$message({
                message: '你点击了新增按钮',
                type: 'success'
            });
        }
    }

}
</script>

<style lang="less" scoped>
.demo_relationinput {
    .column_grid {
        display: grid;
        grid-row-gap: 10px;
        grid-template-columns: 100px auto;
        align-items: center;
    }

}
</style>
