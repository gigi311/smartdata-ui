<template>
  <div>
      <div v-if="type=='1'">
          <sd-space-select :value.sync="value" :options="options" @set-default="setDefault"></sd-space-select>
      </div>
      <div v-if="type=='2'" style="display:grid;grid-template-columns: 100px auto;grid-row-gap: 10px;">
          medium:  <sd-space-select :value.sync="value" :options="options" size="medium" @set-default="setDefault"></sd-space-select>
          small:  <sd-space-select :value.sync="value" :options="options" size="small" @set-default="setDefault"></sd-space-select>
          mini:  <sd-space-select :value.sync="value" :options="options" size="mini" @set-default="setDefault"></sd-space-select>
      </div>

      <div v-if="type=='3'">
          <sd-space-select :value.sync="value" :options="options" @set-default="setDefault">
            <template v-slot="slotProps">
                <span>{{slotProps.option.label}}&lt;--<i class="el-icon-user"></i>--&gt;({{slotProps.option.value}})</span>
            </template>
          </sd-space-select>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DemoSpaceSelect',
    props:['type'],
    data(){
        return {
            options: [{label:'space 1', value:'1', isDefault:true},{label:'space 2', value:'2'},{label:'space 3', value:'3'}],
            value: "1"
        }
    },
    methods:{
        setDefault(val, option){
            console.log('setDefault',val, option);
        }
    }

}
</script>

<style>

</style>