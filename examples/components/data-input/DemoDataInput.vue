<template>
<div class="">
    <sd-data-input :query-fn="searchFn" v-model="ipv"></sd-data-input>
</div>
</template>

<script>
export default {
    name: 'DemoDataInput',
    data(){
        return {
            ipv: 'abc'
        }
    },

    methods: {
        searchFn(pageInfo, cb){
            setTimeout(()=>cb({total:100, data:[1,2,3]}),1000);
        }
    }

}
</script>

<style>

</style>
