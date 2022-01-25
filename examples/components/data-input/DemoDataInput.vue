<template>
<div class="demo_datainput">
    <div v-if="type=='init'">
        <sd-data-input :query-fn="searchFn" v-model="ipv"></sd-data-input>
    </div>
    <div v-if="type=='size'" class="column_grid">
        <span>medium</span>
        <sd-data-input :query-fn="searchFn" v-model="ipv"></sd-data-input>
        <span>small</span>
        <sd-data-input :query-fn="searchFn" v-model="ipv1" size="small"></sd-data-input>
        <span>mini</span>
        <sd-data-input :query-fn="searchFn" v-model="ipv2" size="mini"></sd-data-input>
    </div>
    <div v-if="type=='disabled'">
        <sd-data-input :query-fn="searchFn" v-model="ipv" :disabled="true"></sd-data-input>
    </div>
    <div v-if="type=='icon'" class="column_grid_2">
        <sd-data-input :query-fn="searchFn" v-model="ipv" icon-class="el-icon-edit" :multipleLimit="2" placeholder="最多选择两项"></sd-data-input>
        <sd-data-input :query-fn="searchFn" v-model="ipv1" icon-class="el-icon-share"></sd-data-input>
    </div>
    <div v-if="type=='simple'">
        <sd-data-input :query-fn="searchFn" v-model="ipv" :multiple="false" @input="test"></sd-data-input>
    </div>
    <div v-if="type=='daterange'" class="column_grid">
        <span>日期区间</span>
        <sd-data-input v-model="ipv" type="daterange" @input="test"></sd-data-input>
        <span>日期时间区间</span>
        <sd-data-input v-model="ipv2" type="datetimerange" @input="test"></sd-data-input>
        <span>日期时间</span>
        <sd-data-input v-model="ipv3" type="datetime" @input="test"></sd-data-input>
    </div>

</div>
</template>

<script>
export default {
    name: 'DemoDataInput',
    props: {
        type: {
            type: String,
            default: 'init'
        }
    },
    data() {
        return {
            ipv: '',
            ipv1: '',
            ipv2: '',
            ipv3: '',
        }
    },

    methods: {
        searchFn(pageInfo, cb) {
            setTimeout(() => cb({
                total: 100,
                data: [1, 2, 3]
            }), 1000);
        },

        test(event){
            console.log(111, event);
        }
    }

}
</script>

<style lang="less" scoped>
.demo_datainput {
    .column_grid {
        display: grid;
        grid-row-gap: 10px;
        grid-template-columns: 100px auto;
        align-items: center;
    }
    .column_grid_2 {
        display: grid;
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        grid-template-columns: repeat(auto-fill, 200px);

    }

}
</style>
