<template>
<div class="relation_input_group_content" :style="style">
    <template v-for="(row, idx) in rows">
        <sd-relation-input :key="idx" v-model="row.val" :left-data="leftData" :mid-data="midData" :right-data="rightData" :show-add="idx==rows.length-1" @add="addRow" @remove="removeRow(idx)" :oneDataShowText="oneDataShowText" :size="size" :gap="gap">
            <template #tools="{scope}">
                <slot name="tools" :rowscope="scope" :scope="self" :idx="idx"></slot>
            </template>
            <template #right="{scope}">
                <slot name="right" :rowscope="scope" :scope="self" :idx="idx"></slot>
            </template>
        </sd-relation-input>
    </template>

</div>
</template>

<script>
export default {
    name: 'SdRelationInputGroup',
    props: {
        value: {
            type: Array,
            default: Array
        },
        // 行间隙
        rowGap: {
            type: String,
            default: '5px'
        },
        // 最少保留行数
        rowLimit: {
            type: Number,
            default: 1
        },
        //------------ 下面为relation-input组件属性 -------------
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
        },
    },

    data() {
        return {
            val1: '',
            rows: [],
            self: this,
        }
    },

    mounted() {
        if (this.value.length == 0) {
            this.rows.push({
                val: {
                    left: '',
                    mid: '',
                    right: '',
                }
            })
        } else {
            this.value.forEach(n => {
                this.rows.push({
                    val: n
                });
            });
        }

        // 如果现有行数小于rowLimit，则补齐空行
        if(this.rows.length < this.rowLimit) {
            new Array(this.rowLimit - this.rows.length).fill(1).forEach(()=>{
                this.rows.push({
                    val: {
                        left: '',
                        mid: '',
                        right: '',
                    }
                })
            });
        }
    },

    computed: {
        style() {
            return {
                'row-gap': this.rowGap
            }
        }
    },

    methods: {
        // 加一行
        addRow() {
            this.rows.push({
                val: {
                    left: '',
                    mid: '',
                    right: '',
                }
            })
        },
        // 删除一行
        removeRow(val) {
            if (this.rowLimit >= this.rows.length) {
                this.$message({
                    message: `至少需要保留${this.rowLimit}条数据，不能移除。`,
                    type: 'warning'
                });
            } else {
                const cpRows = JSON.parse(JSON.stringify(this.rows));
                this.rows = cpRows.filter((row, idx) => {
                    return idx != val
                });
            }
        }
    },

    watch: {
        rows: {
            handler: function (val) {
                // 将val层去掉
                const r = [];
                (val || []).forEach(n => {
                 const {left, mid, right} = n.val || {};   
                 left && mid && right&& (r.push(n.val));
                })
                // 触发更新
                this.$emit("input", r);
            },
            deep: true
        }
    }

}
</script>

<style lang="less" scoped>
.relation_input_group_content {
    display: grid;
    grid-template-columns: auto;
}
</style>
