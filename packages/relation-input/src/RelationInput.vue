<template>
<div class="relationinput_div_content" :style="style">
    <!-- 关联下拉部分 -->
    <slot name="left">
        <el-select v-model="valueLeft" class="select_style" :size="size" @change="changeVal">
            <el-option v-for="{label,value} in leftData" :key="value" :label="label" :value="value"></el-option>
        </el-select>
    </slot>
    <slot name="left">
        <span v-if="oneDataShowText && midData.length==1">
            {{midData[0].label}}
        </span>
        <el-select v-else v-model="valRelation" class="select_style" :size="size" @change="changeVal">
            <el-option v-for="{label,value} in midData" :key="value" :label="label" :value="value"></el-option>
        </el-select>
    </slot>
    <slot name="right">
        <el-select v-model="valRight" class="select_style" :size="size" @change="changeVal">
            <el-option v-for="{label,value} in rightData" :key="value" :label="label" :value="value"></el-option>
        </el-select>
    </slot>
    <!-- 按钮部分 -->
    <slot name="tools" v-bind:busid="busid">
        <i v-if="showRemove" class="tools el-icon-remove-outline" @click="$emit('remove',busid)"></i>
        <i v-if="showAdd" class="tools el-icon-circle-plus-outline" @click="$emit('add')"></i>
    </slot>
</div>
</template>

<script>
/**
 * 组件包含事件
 * remove(busid)
 * add
 */
export default {
    name: 'SdRelationInput',
    props: {
        value: {
            type: Object,
            default: Object
        },
        busid: {
            type: [String, Number, Object],
            default: new Date().getTime()
        },
        //列占比，支持3个数据
        columns: {
            type: Array,
            default: ()=>Array(4, 2, 4)
        },
        //间隙
        gap: {
            type: Number,
            default: 10
        },
        size: {
            type: String,
            default: 'medium'
        },
        //是否显示删除按钮
        showRemove: {
            type: Boolean,
            default: true,
        },
        //是否显示新增按钮
        showAdd: {
            type: Boolean,
            default: true,
        },
        leftData: {
            type: Array,
            default: Array
        },
        midData: {
            type: Array,
            default: Array
        },
        rightData: {
            type: Array,
            default: Array
        },
        //如果只有一个选项，则展示为TEXT文本样式
        oneDataShowText: {
            type: Boolean,
            default: false,
        }

    },
    data() {
        return {
            valueLeft: '',
            valRight: '',
            valRelation: '',
        }
    },

    methods: {
        changeVal(){
            const val = {
                left: this.valueLeft,
                mid: this.valMid, 
                right: this.valRight,
            };
            this.$emit("input", val);
        }
    },

    computed: {
        style() {
            const cols = this.columns.reduce((r, c) => {
                r.push(c + 'fr');
                return r;
            }, []);
            let buttons = this.showRemove ? ' 30px' : ' ';
            buttons += this.showAdd ? ' 30px' : ' ';

            return {
                'grid-template-columns': cols.join(' ') + buttons,
                'column-gap': `${this.gap}px`
            }
        },
        valMid(){
            if(this.oneDataShowText && this.midData.length==1){
                return this.midData[0].value;
            }else{
                return this.valRelation;
            }
        }
    }

}
</script>

<style lang="less" scoped>
.relationinput_div_content {
    display: grid;

    &>div {
        display: flex;
        align-items: center;
        justify-content: center;

        &>span {
            font-size: 14px;
        }
    }

    .select_style {
        width: 100%;
    }

    .tools {
        font-size: 20px;
        display: grid;
        place-content: center;
        cursor: pointer;
    }

    .text_div {
        font-size: 20px;
        display: grid;
        place-content: center;
    }
}
</style>
