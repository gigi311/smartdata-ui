
function changeKeyword(el, binding) {
  let _words = null;
  if (binding.value && binding.value.length > 0) {
    _words = binding.value;
  }
  const value = el.innerHTML;

  if (_words && value) {
    _words = _words.sort((a, b) => (a && b && a.length > b.length ? -1 : 1));
    // 方法一、逻辑简单，问题在于会把大写字母匹配后按小写字母输出，改变了匹配的字符文本
    // let rpl = value;
    // _words.forEach((w) => {
    //   const reg = new RegExp(`${w}`, "ig");
    //   rpl = rpl.replace(reg, `<em>${w}</em>`);
    // });
    // el.innerHTML = rpl;
    // 方法二、根据拆分，分段获取应该增加标签的角标。后，一次性根据角标组装新字符串。解决了方法一的问题
    const emStarts = [];
    const emEnds = [];
    findInsertIdxs(_words, emStarts, emEnds, value);
    el.innerHTML = makeResult(value, emStarts, emEnds);
  }
}

// 解决大小写匹配被重写了的问题

// 查找插入角标，组装前后插入标签位置数组
function findInsertIdxs(keys, emStarts, emEnds, str) {
  keys.forEach((key) => {
    const matches = str.toLowerCase().split(key.toLowerCase());
    if (matches.length > 1) {
      matches.forEach((n, idx) => {
        if (idx < matches.length - 1) {
          const len = getLen(matches, idx, key);
          emStarts.push(len);
          emEnds.push(len + key.length);
        }
      });
    }
  });
}

// 组装结果
function makeResult(str, emStarts, emEnds) {
  const result = [];
  str.split("").forEach((n, i) => {
    // 处理开头就匹配的问题
    if (i === 0 && emStarts.includes(0)) {
      result.push("<em>");
    }
    result.push(n);
    if (emStarts.includes(i + 1)) {
      result.push("<em>");
    }
    if (emEnds.includes(i + 1)) {
      result.push("</em>");
    }
  });
  return result.join("");
}

// 计算开始标签添加角标
function getLen(arr, stop, key) {
  let count = 0;
  arr.forEach((n, idx) => {
    if (idx <= stop) {
      count += n.length;
      if (stop > 0 && idx < stop) {
        count += key.length;
      }
    }
  });
  return count;
}

const keywords = {
  inserted(el, binding) {
    changeKeyword(el, binding);
  },
  update(el, binding) {
    changeKeyword(el, binding);
  },
  install(Vue) {
    Vue.directive('keywords', this)
  }
};

// 自动加载
import Vue from 'vue';
Vue.use(keywords)

