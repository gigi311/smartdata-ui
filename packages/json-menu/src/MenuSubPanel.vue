<template>
  <el-submenu :index="data.code" :popper-append-to-body="false">
    <template slot="title">
      <i :class="data.iconClass"></i>
      <span>{{ data.name }}</span>
    </template>
    <component
      v-for="(m, im) in data.children || []"
      :key="im"
      :is="
        m.children && m.children.length > 0 ? 'menu-sub-panel' : 'el-menu-item'
      "
      :index="m.code"
      :data="m"
    >
      <template v-if="(m.children || []).length == 0">
        <i :class="m.iconClass"></i>
        {{ m.name }}
      </template>
    </component>
  </el-submenu>
</template>

<script>
export default {
  name: "MenuSubPanel",
  props: {
    data: {
      type: Object,
      default: new Object(),
    },
  },
  mounted() {
  },
};
</script>

<style>
</style>