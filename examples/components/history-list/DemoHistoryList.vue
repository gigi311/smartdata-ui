<template>
<dir>
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
</dir>
</template>

<script>
export default {
    name:'DemoHistoryList',
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
        clearHis(){
            this.$refs.his1.clearAll();
            this.$refs.his2.clearAll();
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
