<template>
  <div class="data_input_content">
    <!-- INPUT输入框 -->
    <el-input
      :placeholder="placeholder"
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
      v-if="type == 'list'"
      :dialogVisible.sync="showWin"
      :inputVal="value"
      :query-fn="queryFn"
      :multiple="multiple"
      :multipleLimit="multipleLimit"
      :separator="separator"
      @submit="saveInputs"
    ></data-picker-win>
    <!-- 打开日期选择窗口 待开发支持单日期/区间日期/单时间日期/区间时间日期-->
    <date-picker-win
      v-else-if="'daterange,datetimerange'.includes(type)"
      :dialogVisible.sync="showWin"
      :type="type"
      :format="format"
      :separator="separator"
      @submit="saveInputs"
    ></date-picker-win>
  </div>
</template>

<script>
import DataPickerWin from "./DataPickerWin";
import DatePickerWin from "./datatime/DatePickerWin";
export default {
  name: "SdDataInput",
  components: {
    DataPickerWin,
    DatePickerWin,
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
    type: {
      type: String,
      default: "list",// list/daterange/datetimerange/datetime
    },
    separator: {//链接分隔符
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    format: String, // 日期格式
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
