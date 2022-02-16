<template>
<div class="relation_input_group_content" :style="style">
    <template v-for="(row, idx) in rows">
        <sd-relation-input :key="idx" v-model="row.val" :left-data="[]" :mid-data="[]" :right-data="[]" :show-add="idx==rows.length-1" @add="addRow" @remove="removeRow(idx)"></sd-relation-input>
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
        }
    },

    data() {
        return {
            val1: '',
            rows: [],
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
        value: {
            handler: function () {
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
            },
            immediate: true
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
