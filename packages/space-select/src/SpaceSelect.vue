<template>
<div class="space_div_content">
    <el-select :size="size" v-model="selValue" @visible-change="hideButton" @change="changeFn" style="width:100%" :popper-append-to-body="false">
        <el-option v-for="item in showOptions" :key="item[valueProp]" :label="item[labelProp]" :value="item[valueProp]">
                <div class="option_div" @mouseenter="showButton(item)" @mouseleave="item.show=false">
                    <div :style="item.isDefault?'visibility:visible':'visibility:hidden'" class="dot">{{defaultText}}</div>
                    <slot v-bind:option="item">
                        <span>{{item[labelProp]}}</span>
                    </slot>
                    <div class="set" v-show="item.show">
                        <el-button plain size="mini" @click.stop="setIsDefault(item)">{{buttonText}}</el-button>
                    </div>
                </div>
        </el-option>
    </el-select>
</div>
</template>

<script>
export default {
    name: 'SdSpaceSelect',
    props: {
        size: { // 组件大小
            type: String,
            default: 'medium'
        },
        options: { // 数据
            type: Array,
            default: () => new Array()
        },
        labelProp: { // 显示字段属性名称
            type: String,
            default: 'label'
        },
        valueProp: { // 值字段属性名称
            type: String,
            default: 'value'
        },
        value: { // 当前显示值
            type: String,
            default: ''
        },
        buttonText: {
            type: String,
            default: '设为默认'
        },
        defaultText: {
            type: String,
            default: '默认'
        }
    },
    mounted() {
        this.showOptions = Array.prototype.concat([], this.options);
        this.selValue = this.value;
    },
    data() {
        return {
            selValue: '',
            showOptions: [],
        }
    },
    methods: {
        showButton(_option) {
            const newArray = Array.prototype.concat([], this.showOptions);
            newArray.some(n => n[this.valueProp] == _option[this.valueProp] && n.isDefault!==true && (n.show = true));
            this.showOptions = newArray;
        },
        hideButton() {
            const newArray = Array.prototype.concat([], this.showOptions);
            newArray.some(n => n.show = false);
            this.showOptions = newArray;
        },
        setIsDefault(_option) {
            const newArray = Array.prototype.concat([], this.showOptions);
            newArray.forEach(n => {
                if (n[this.valueProp] == _option[this.valueProp]) {
                    n.isDefault = true;
                    n.show = false;
                } else {
                    n.isDefault = false;
                }
            });
            this.showOptions = newArray;

            // 设置默认选项
            this.$emit('set-default', _option[this.valueProp], _option);
        },
        changeFn(val) {
            // 选中值改变时，更新传入对象值
            this.$emit('update:value', val)
            // 触发值变更事件
            this.$emit('change', val);
        }
    }

}
</script>

<style lang="less" scoped>
.space_div_content {
    width: 250px;

    .option_div {
        position: relative;

        .dot {
            border-radius: 5px;
            display: inline-block;
            transform: scale(0.8);
            padding: 2px 5px;
            font-size: 12px;
            line-height: 15px;
            font-weight: normal;
            background-color: #409eff;
            color: #ffffff;
        }

        .set {
            transform: scale(0.9);
            position: absolute;
            right: 0;
            top: 0;
        }

        .el-button--mini {
            padding: 5px;
        }
    }

    /deep/ul {
        padding-left: 0;
    }
}
</style>
