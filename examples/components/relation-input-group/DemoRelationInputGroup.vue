<template>
<div class="demo_relationinput_group">
    <div v-if="demo==1">
        <sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData"></sd-relation-input-group>
    </div>

    <div v-if="demo==2">
        <sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData" :rowLimit="3"></sd-relation-input-group>
    </div>

    <div v-if="demo==3" class="column_grid">
        <span>medium</span>
        <sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData"></sd-relation-input-group>
        <span>small</span>
        <sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData" size="small"></sd-relation-input-group>
        <span>mini</span>
        <sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData" size="mini"></sd-relation-input-group>
    </div>
    
    <div v-if="demo==4" class="column_grid">
        <span>按钮自定义</span>
        <sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData">
            <template #tools="{scope,idx}">
                <el-button type="text" @click="scope.removeRow(idx)">--</el-button>
                <el-button type="text" @click="scope.addRow">++</el-button>
            </template>
        </sd-relation-input-group>

        <span>值自定义</span>
        <sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData">
            <template #right="{rowscope}">
                <el-radio-group v-model="rowscope.valRight" @change="rowscope.changeVal">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
            </template>
        </sd-relation-input-group>
    </div>
</div>
</template>

<script>
export default {
    name: 'DemoRelationInputGroup',
    props: ['demo'],
    data() {
        return {
            value: [],
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
    }

}
</script>

<style lang="less" scoped>
.demo_relationinput_group {
    .column_grid {
        display: grid;
        grid-row-gap: 10px;
        grid-template-columns: 100px auto;
        align-items: center;
        span {
            font-size: 14px;
        }
    }

}
</style>
