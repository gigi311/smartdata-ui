<template>
<div class="demo_relationinput">
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
    <div v-if="demo=='3'" class="column_grid">
        <span>属性自定义</span>
        <sd-relation-input v-model="val1" :left-data="leftData" :mid-data="midData" :right-data="rightData">
            <template #left="{scope}">
                <el-input v-model="scope.valLeft" size="medium" @change="scope.changeVal"></el-input>
            </template>
        </sd-relation-input>
        <span>值自定义1</span>
        <sd-relation-input v-model="val1" :left-data="leftData" :mid-data="midData" :right-data="rightData" @remove="clickRemove" @add="clickAdd">
            <template #right="{scope}">
                <sd-data-input v-model="scope.valRight" type="daterange" @input="scope.changeVal"></sd-data-input>
            </template>
        </sd-relation-input>
        <span>值自定义2</span>
        <sd-relation-input v-model="val1" :left-data="leftData" :mid-data="midData" :right-data="rightData" @remove="clickRemove" @add="clickAdd">
            <template #right="{scope}">
                <el-radio-group v-model="scope.valRight" @change="scope.changeVal">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
            </template>
        </sd-relation-input>
        <span>按钮自定义</span>
        <sd-relation-input v-model="val1" :left-data="leftData" :mid-data="midData" :right-data="rightData">
            <template #tools="{scope}">
                <el-button type="text" @click="clickRemove(scope.busid)">哈哈</el-button>
            </template>
        </sd-relation-input>
    </div>
    <div v-if="demo=='4'">

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
            ipv: '',
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
        span {
            font-size: 14px;
        }
    }

}
</style>
