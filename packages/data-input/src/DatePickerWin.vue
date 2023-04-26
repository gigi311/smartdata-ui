<template>
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        :width="winWidth || width"
        :before-close="handleClose"
        :modal-append-to-body="false"
        :append-to-body="appendToBody"
        class="data_dialog"
        :close-on-click-modal="false"
    >
        <div class="date_picker_body">
            <date-range-panel v-if="type.includes('range')" ref="date-range" @pick-click="clickVals" :show-type="type"></date-range-panel>
            <date-panel v-else ref="time-date" @pick-click="clickVals"></date-panel>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">关 闭</el-button>
            <el-button @click="okSubmit" :disabled="submitDisabled" type="primary">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { formatDate } from "element-ui/src/utils/date-util";
import DateRangePanel from "./datatime/daterange/DateRangePanel";
import DatePanel from "./datatime/date/DatePanel.vue";
export default {
    components: {
        DateRangePanel,
        DatePanel,
    },
    props: {
        dialogVisible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "请选择",
        },
        type: {
            type: String,
            default: "daterange", // daterange/datetimerange/datetime
        },
        winWidth: {
            //打开窗口宽度
            type: String,
            default: null,
        },
        appendToBody: {
            type: Boolean,
            default: true,
        },
        multiple: Boolean,
        separator: String, //链接分隔符
        format: String, //用户配置的日期格式
    },
    data() {
        return {
            width: "50%",
            timeValue1: null,
            submitDisabled: true,
        };
    },
    methods: {
        //处理头部关闭按钮事件
        handleClose() {
            this.close();
        },
        close() {
            this.$emit("update:dialogVisible", false);
        },
        okSubmit() {
            if (this.type.includes("range")) {
                const { minDate, maxDate, handleClear } = this.$refs["date-range"];
                if (minDate && maxDate) {
                    const minDateStr = formatDate(minDate, this.formatStr);
                    const maxDateStr = formatDate(maxDate, this.formatStr);
                    this.$emit("submit", minDateStr + this.separatorFlag + maxDateStr);
                    //清空数据
                    handleClear();
                }
            } else {
                const { vDate, handleClear } = this.$refs["time-date"];
                const valueStr = formatDate(vDate, this.formatStr);
                this.$emit("submit", valueStr);
                //清空数据
                handleClear();
            }
            // 关闭窗口
            this.close();
        },
        //响应选中事件
        clickVals(vals) {
            if (this.type.includes("range")) {
                const [minD, maxD] = vals;
                this.submitDisabled = !(minD && maxD);
            } else {
                this.submitDisabled = !vals;
            }
        },
    },
    watch: {
        dialogVisible(val) {
            //打开页面时，重置按钮状态为disable
            this.submitDisabled = val != false;
        },
    },
    computed: {
        separatorFlag() {
            return this.separator || "~";
        },
        formatStr() {
            if (this.format) {
                return this.format;
            } else {
                return this.type.includes("time") ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd";
            }
        },
    },
};
</script>

<style lang="less" scoped>
.data_dialog {
    /deep/.el-dialog__header {
        padding: 20px 20px 0px;
    }

    /deep/.el-dialog__body {
        padding: 15px 20px;

        ul {
            margin: 0;
        }

        .el-card__header {
            padding: 8px;
            line-height: 30px;

            .card_header_div {
                display: flex;
                justify-content: space-between;

                & > span {
                    width: 50px;
                }

                & > div.el-input {
                    width: 50%;
                    min-width: 175px;
                }

                & > div:last-of-type {
                    flex: 1;
                    text-align: right;
                }
            }
        }
    }

    /deep/.el-dialog__footer {
        padding: 0 20px 20px;
    }

    .input_picker_body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;

        /deep/.el-card__body {
            padding: 10px;
        }

        /deep/li {
            margin-top: 0;
        }
    }
}
</style>
