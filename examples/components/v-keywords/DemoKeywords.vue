<template>
  <div class="keywords_content">
    <div v-if="type=='1'">
      <div v-keywords="['班干部','村长']">班干部管班干部，别拿村长不当干部。</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DemoKeywords',
    props:['type'],

}
</script>

<style lang="less">
.keywords_content {
  em {
    font-style: normal;
    color: #F85B46;
  }
}

</style>