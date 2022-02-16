<template>
  <div>
      <sd-relation-input-group :value="value"></sd-relation-input-group>
  </div>
</template>

<script>
export default {
    name:'DemoRelationInputGroup',
    data(){
        return {
            value: [{},{}]
        }
    }

}
</script>

<style>

</style>