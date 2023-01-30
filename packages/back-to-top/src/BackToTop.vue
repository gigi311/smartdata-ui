<template>
    <div v-show="show" class="back_div" :style="pos" @click="backToTop">
        <i class="el-icon-download" style="transform: rotate(180deg);"></i>
    </div>
</template>

<script>
export default {
    name: "SdBackToTop",
    props: {
        // 监听的DOM的滚动条对象过滤条件
        selector: {
            type: String,
            default: ".pages",
        },
        // pos出现的位置
        pos: {
            type: Object,
            default: () => {
                return {
                    // top: 0,
                    // left: 0,
                    right: "20px",
                    bottom: "100px",
                };
            },
        },
    },
    data() {
        return {
            show: false,
        };
    },
    computed: {
        posStyle() {
            return this.pos;
        },
    },
    mounted() {
        this._initListener();
    },
    methods: {
        /**
         * 增加监听对象的滚动条监听方法
         */
        _initListener() {
            this.__getDomByWait((dom) => {
                dom.addEventListener("scroll", this._handleScroll, false);
            });
        },
        /**
         * 等待DOM加载完成的方法
         */
        __getDomByWait(bkFn, num = 0) {
            const dom = document.querySelector(this.selector);
            if (dom) {
                bkFn(dom);
            } else if (num < 100) {
                num++;
                setTimeout(() => {
                    this.__getDomByWait(bkFn, num);
                }, 50);
            }
        },
        /**
         * 监听滚动条滑动，设置置顶按钮状态
         */
        _handleScroll(event) {
            this.show = event.srcElement.scrollTop > 100;
            this.$emit("scroll-change", event);
        },
        /**
         * 置顶按钮响应方法
         */
        backToTop() {
            setTimeout(() => {
                const curTop = document.querySelector(this.selector).scrollTop;
                const step = Math.max(curTop * 0.4, 20);
                const nextTop = Math.max(0, curTop - step);
                document.querySelector(this.selector).scrollTop = nextTop;
                if (nextTop > 0) {
                    this.backToTop();
                }
            }, 10);
        },
    },
};
</script>

<style lang="less" scoped>
.back_div {
    display: grid;
    place-content: center;
    position: fixed;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(143, 149, 158, 0.1);
    color: grey;
    font-size: 20px;
    cursor: pointer;
}
</style>
