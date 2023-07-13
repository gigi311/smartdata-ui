<template>
    <div class="demo_scroll_view_content">
        <div v-if="type===1">
            <sd-scroll-view :width="menuWidth" @transform-change="showChange">
                <el-tag v-for="item in tags" :key="item" type="info">
                    {{ item }}
                </el-tag>
            </sd-scroll-view>
            <el-button size="small" style="float:right" @click="menuWidth = '300px'">宽度改为300px</el-button>
            <el-button size="small" style="float:right;margin-right:10px" @click="menuWidth = '200px'">宽度改为200px</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "DemoScrollView",
    props: ["type"],
    data() {
        return {
            menuWidth: "300px",
            tags: [1, 2, 3, 4, 5],
        };
    },
    methods: {
        showChange(trans) {
            console.log("new transform", trans);
        }
    }
};
</script>

<style lang="less" scoped>
.demo_scroll_view_content {
    .el-tag {
        margin: 0 10px;
    }
}
</style>
