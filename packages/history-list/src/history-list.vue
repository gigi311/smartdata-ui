<template>
<div class="history_list_content">
    <el-popover v-if="showType==1" trigger="hover" popper-class="history_list_popover">
        <div v-for="(r,idx) in hisData" :key="idx" :class="`record ${r.class}`" @click="gotoHistory(idx)">
            <i :class="r.icon"></i>
            {{r.name}}
        </div>
        <div v-show="hisData.length == 0" class="record" style="text-align:center;">{{noHistoryText}}</div>
        <el-button type="primary" round :size="buttonSize" slot="reference">{{buttonText}}</el-button>
    </el-popover>
    <div v-if="showType==2" class="history_list_buttons">
        <el-button-group>
            <el-button round :size="buttonSize" type="primary" :disabled="curPoint<1" @click="gotoHistory(curPoint-1)">
                <slot name="left-icon">
                    <svg class="icon" aria-hidden="true" style="font-size: 12px;">
                        <use xlink:href="#sdicon-undo"></use>
                    </svg>
                </slot>
            </el-button>
            <el-button round :size="buttonSize" type="primary" :disabled="curPoint>=hisData.length-1" @click="gotoHistory(curPoint+1)">
                <slot name="right-icon">
                    <svg class="icon" aria-hidden="true" style="font-size: 12px;">
                        <use xlink:href="#sdicon-redo"></use>
                    </svg>
                </slot>
            </el-button>
        </el-button-group>
    </div>
</div>
</template>

<script>
export default {
    name: 'SdHistoryList',
    props: {
        //展示方式，1：列表2：前进后退按钮
        showType: {
            type: Number,
            default: 1
        },
        //最多记忆历史
        max: {
            type: Number,
            default: 15,
        },
        //无操作历史时显示内容
        noHistoryText: {
            type: String,
            default: '无操作历史',
        },
        //触发按钮文字内容
        buttonText: {
            type: String,
            default: '操作历史',
        },
        //按钮大小，参考element-ui组件的sizi
        buttonSize: {
            type: String,
            default: 'small'
        }
    },
    data() {
        return {
            curPoint: -1, //当前锚点
            hisData: [], //历史记录内容
            // markMap: {
            //     begin: ['开始', 'el-icon-place'],
            //     load: ['加载数据', 'el-icon-coin'],
            //     pos: ['移动位置', 'el-icon-rank'],
            //     add: ['添加元素', 'el-icon-plus'],
            //     delete: ['删除元素', 'el-icon-delete'],
            //     size: ['修改大小', 'el-icon-crop'],
            // },
        }
    },
    methods: {
        //外部调用方法，增加记录历史
        setHistory(name = '', elements = [], icon = '') {
            //记录新记录
            const newHisArr = this.hisData.filter((n, i) => i <= this.curPoint);
            // const [name = '修改', icon = ''] = this.markMap[type];
            newHisArr.push({
                icon,
                name,
                json: {
                    ele: elements,
                }
            });
            //处理超长记录清空
            if (newHisArr.length > this.max) {
                newHisArr.shift();
            }
            //改变锚点
            this.curPoint = newHisArr.length - 1;
            //修改显示样式
            newHisArr.forEach((n, i) => {
                n.class = '', n.class = i < this.curPoint ? '' : i == this.curPoint ? 'active' : 'disabled';
            });
            this.hisData = newHisArr;
        },
        //根据点击设置历史列表的样式
        gotoHistory(index = this.hisData.length - 1) {
            //修改显示样式
            this.curPoint = index;
            const newOne = Array.prototype.concat([], this.hisData);
            newOne.forEach((n, i) => {
                n.class = '', n.class = i < this.curPoint ? '' : i == this.curPoint ? 'active' : 'disabled';
            });
            this.hisData = newOne;
            //回显历史内容
            this.$emit('load-history', this.hisData[this.curPoint].json.ele)
        },
        //清空所有记录
        clearAll(){
            this.hisData = [];
            this.curPoint = -1;
        }
    }
}
</script>

<style lang="less">
.history_list_content {
    display: inline-block;

    .history_list_buttons {
        display: inline-block;

        i {
            margin-right: 0 !important;
        }
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        font-size: 30px;
    }
}

.history_list_popover {
    .record {
        border-bottom: 1px solid #dedede;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        margin: 1px 0;
        padding: 0 10px;

        i {
            margin-right: 5px;
        }

        &:hover {
            background-color: #d4e2f7;
        }
    }

    .active {
        background-color: #d4e2f7;
        font-weight: bold;
    }

    .disabled {
        color: #cccccc;
        font-style: italic;
    }
}
</style>
