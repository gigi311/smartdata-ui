<template>
<dir>
    <template v-if="flag===1">
        <p>
            <span>可查看操作步骤的历史组件</span>
            <sd-history-list ref="his1" @load-history="fn"></sd-history-list>

        </p>
        <p>
            <span>只有回退及重做的历史组件</span>
            <sd-history-list ref="his2" :showType="2" @load-history="fn"></sd-history-list>

        </p>
        <el-button type="default" size="small" @click="addHis">增加记录</el-button>
        <el-button type="default" size="small" @click="clearHis">清空记录</el-button>
    </template>
    <template v-else-if="flag===2">
        <p>
            <sd-history-list ref="his3" :showType="2" @load-history="fn">
                <template v-slot:left-icon>
                    <i class="el-icon-caret-left"></i>
                </template>
                <template v-slot:right-icon>
                    <i class="el-icon-caret-right"></i>
                </template>
            </sd-history-list>
        </p>
        <p>
            <el-button type="default" size="small" @click="addHis3">增加记录</el-button>
            <el-button type="default" size="small" @click="clearHis3">清空记录</el-button>
        </p>
    </template>
</dir>
</template>

<script>
export default {
    name:'DemoHistoryList',
    props: {
        flag: {
            type: Number,
            default: 1
        }
    },
    methods: {
        addHis() {
            const code = Date.now();
            this.$refs.his1.setHistory(code, {
                data: code
            },'el-icon-star-off');
            this.$refs.his2.setHistory(code, {
                data: code
            });
        },
        addHis3() {
            const code = Date.now();
            this.$refs.his3.setHistory(code, {
                data: code
            });
        },
        clearHis(){
            this.$refs.his1.clearAll();
            this.$refs.his2.clearAll();
        },
        clearHis3(){
            this.$refs.his3.clearAll();
        },
        fn(obj) {
            this.$notify({
                title: '成功',
                message: '这是一条成功的提示消息' + JSON.stringify(obj),
                type: 'success'
            });
        },
    },
};
</script>

<style>
</style>
