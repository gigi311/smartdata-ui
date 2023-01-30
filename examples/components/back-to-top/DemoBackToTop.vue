<template>
  <div class="demo_back_to_top">
    <template v-if="demo==1">
        <div class="pages">
            <div style="height:1000px;padding-top:300px;text-align:center;">
                请看右下角，默认出现的位置，默认滚动条滚动100PX，出现↘
            </div>
        </div>
        <sd-back-to-top></sd-back-to-top>
    </template>
  </div>
</template>

<script>
export default {
    name: 'DemoBackToTop',
    props: ['demo'],
    data() {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
.demo_back_to_top {
    .pages {
        height: 200px;
        border: 1px solid #c7bfbf;
        overflow: auto;
    }
}
</style>
