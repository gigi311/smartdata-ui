<template>
      <div
        :class='["scrollView__nav-wrap", scrollable ? "is-scrollable" : ""]'
        :style="`width:${width}`"
      >
        <template v-if="scrollable">
          <span
            :class='[
              "scrollView__nav-prev",
              scrollable.prev ? "" : "is-disabled",
            ]'
            @click="scrollPrev"
          >
            <i :style="`line-height:${height}px`" class="el-icon-arrow-left"></i>
          </span>
          <span
            :class='[
              "scrollView__nav-next",
              scrollable.next ? "" : "is-disabled",
            ]'
            @click="scrollNext"
          >
            <i :style="`line-height:${height}px`" class="el-icon-arrow-right"></i>
          </span>
        </template>
        <div class="scrollView__nav-scroll" ref="navScroll">
          <div class="scrollView__nav" ref="nav" :style="navStyle">
            <slot></slot>
          </div>
        </div>
      </div>
</template>

<script>
import {
  addResizeListener,
  removeResizeListener,
} from "element-ui/src/utils/resize-event";

export default {
  name: 'SdScrollView',
  props: {
    width: {
      type: String,
      default: "100%",
    },
  },

  data() {
    return {
      scrollable: false,
      navOffset: 0,
    };
  },

  computed: {
    navStyle() {
      return {
        transform: `translateX(-${this.navOffset}px)`,
      };
    },
  },

  methods: {
    scrollPrev() {
      const containerSize = this.$refs.navScroll.offsetWidth;
      const currentOffset = this.navOffset;

      if (!currentOffset) return;

      const newOffset =
        currentOffset > containerSize ? currentOffset - containerSize : 0;

      this.navOffset = newOffset;
      this.update();
    },
    scrollNext() {
      const navSize = this.$refs.nav.offsetWidth;
      const containerSize = this.$refs.navScroll.offsetWidth;
      const currentOffset = this.navOffset;

      if (navSize - currentOffset <= containerSize) return;

      const newOffset =
        navSize - currentOffset > containerSize * 2
          ? currentOffset + containerSize
          : navSize - containerSize;

      this.navOffset = newOffset;
      this.update();
    },
    scrollToActiveTab(isInitial) {
      this.update();
      if (!this.scrollable) return;

      const activeTab = this.$el.querySelector(".is-active");
      if (!activeTab) return;

      const nav = this.$refs.nav;
      const navScroll = this.$refs.navScroll;
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = navScroll.getBoundingClientRect();

      // 浏览器第一次请求中url带hash参数时，width初始化会比点击跳转时多40，激活的菜单项会发生偏移，显示不全
      if(isInitial === true){
        navScrollBounding.width -= 40;
      }
      const maxOffset = nav.offsetWidth - navScrollBounding.width;
      const currentOffset = this.navOffset;
      let newOffset = currentOffset;
      console.log('navScroll', isInitial, maxOffset, navScroll,navScrollBounding)

      if (activeTabBounding.left < navScrollBounding.left) {
        newOffset =
          currentOffset - (navScrollBounding.left - activeTabBounding.left);
      }
      if (activeTabBounding.right > navScrollBounding.right) {
        newOffset =
          currentOffset + activeTabBounding.right - navScrollBounding.right;
      }
      newOffset = Math.max(newOffset, 0);

      this.navOffset = Math.min(newOffset, maxOffset);
    },
    update() {
      if (!this.$refs.nav) return;
      const navSize = this.$refs.nav.offsetWidth;
      this.height = this.$refs.nav.offsetHeight;
      const containerSize = this.$refs.navScroll.offsetWidth;
      const currentOffset = this.navOffset;

      if (containerSize < navSize) {
        const currentOffset = this.navOffset;
        this.scrollable = this.scrollable || {};
        this.scrollable.prev = currentOffset;
        this.scrollable.next = currentOffset + containerSize < navSize;
        if (navSize - currentOffset < containerSize) {
          this.navOffset = navSize - containerSize;
        }
      } else {
        this.scrollable = false;
        if (currentOffset > 0) {
          this.navOffset = 0;
        }
      }
    },
  },

  updated() {
    this.update();
  },

  // render() {
  //   const {
  //     navStyle,
  //     scrollable,
  //     scrollNext,
  //     scrollPrev,
  //     height,
  //     width,
  //   } = this;
  //   const lineHeight = {
  //     "line-height": height + "px",
  //   };
  //   const scrollBtn = scrollable
  //     ? [
  //         <span
  //           class={[
  //             "scrollView__nav-prev",
  //             scrollable.prev ? "" : "is-disabled",
  //           ]}
  //           on-click={scrollPrev}
  //         >
  //           <i style={lineHeight} class="el-icon-arrow-left"></i>
  //         </span>,
  //         <span
  //           class={[
  //             "scrollView__nav-next",
  //             scrollable.next ? "" : "is-disabled",
  //           ]}
  //           on-click={scrollNext}
  //         >
  //           <i style={lineHeight} class="el-icon-arrow-right"></i>
  //         </span>,
  //       ]
  //     : null;

  //   return (
  //     <div
  //       class={["scrollView__nav-wrap", scrollable ? "is-scrollable" : ""]}
  //       style={{ width }}
  //     >
  //       {scrollBtn}
  //       <div class="scrollView__nav-scroll" ref="navScroll">
  //         <div class="scrollView__nav" ref="nav" style={navStyle}>
  //           {this.$slots.default}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // },

  mounted() {
    addResizeListener(this.$el, this.scrollToActiveTab);
  },

  beforeDestroy() {
    if (this.$el && this.scrollToActiveTab) removeResizeListener(this.$el, this.scrollToActiveTab);
  },
};
</script>



<style lang="less">
.scrollView__nav-wrap {
  display: inline-block;
  overflow: hidden;
  position: relative;

  html .el-menu.el-menu--horizontal,
  body .el-menu.el-menu--horizontal,
  #app .el-menu.el-menu--horizontal {
    border-bottom: 0px;
    position: relative;
  }
}

.scrollView__nav-wrap.is-scrollable {
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.scrollView__nav-wrap::after {
  display: none;
}

.scrollView__nav-scroll {
  overflow: hidden;
}

.scrollView__nav {
  white-space: nowrap;
  position: relative;
  transition: transform 0.3s, -webkit-transform 0.3s;
  float: left;
  z-index: 2;
}

.scrollView__nav-prev {
  left: 0;
}
.scrollView__nav-next {
  right: 0;
}
.scrollView__nav-next,
.scrollView__nav-prev {
  position: absolute;
  cursor: pointer;
  // line-height: 60px;
  font-size: 12px;
  color: #909399;
}
</style>