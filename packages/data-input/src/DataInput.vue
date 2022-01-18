<template>
  <div class="data_input_content">
    <!-- INPUT输入框 -->
    <el-input
      placeholder="请输入内容"
      :value="value"
      style="with: 100%"
      :size="size"
      :disabled="disabled"
      :readonly="!editable"
      @input="saveInputs"
      @focus="$emit('focus', arguments[0])"
      @blur="$emit('blur', arguments[0])"
      @change="$emit('change', arguments[0])"
    >
      <el-button
        slot="append"
        :icon="iconClass"
        @click="showWin = true"
        :disabled="disabled"
      ></el-button>
    </el-input>
    <!-- 打开的数据选择窗口 -->
    <data-picker-win
      :dialogVisible.sync="showWin"
      :inputVal="value"
      :query-fn="queryFn"
      :multiple="multiple"
      :multipleLimit="multipleLimit"
      @submit="saveInputs"
    ></data-picker-win>
  </div>
</template>

<script>
import DataPickerWin from "./DataPickerWin";
export default {
  name: "SdDataInput",
  components: {
    DataPickerWin,
  },
  // model: {
  //     prop: 'inputVal',
  //     event: 'input'
  // },
  props: {
    value: String,
    queryFn: {
      type: Function,
      default: () => {},
    },
    size: {
      type: String,
      default: "medium", //medium / small / mini
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconClass: {
      type: String,
      default: "el-icon-s-operation",
    },
    editable: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    multipleLimit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      showWin: false,
    };
  },

  methods: {
    saveInputs(val) {
      this.$emit("input", val);
    },
  },
};
</script>
