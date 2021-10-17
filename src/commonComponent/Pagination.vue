<template>
  <div class="pagination">
    <button :disabled="currentPage <= 1">上一页</button>
    <button v-show="startAndEnd.start !== 1">1</button>
    <button v-show="startAndEnd.start !== 2" disabled>···</button>
    <button
      v-for="item in totalPages"
      :key="item"
      v-if="item >= startAndEnd.start && item <= startAndEnd.end"
    >
      {{ item }}
    </button>
    <button v-show="startAndEnd.end < totalPages - 1" disabled>···</button>
    <button v-show="startAndEnd.end !== totalPages">{{ totalPages }}</button>
    <button :disabled="startAndEnd.end >= totalPages">下一页</button>
    <button>共{{ totalPages }}页</button>
    <button style="margin-left: 30px">共 {{ allData }} 条</button>
  </div>
</template>

<script>
/* 
    数据的总条数(外部数据)    allData
    每页显示多少条(外部数据)   manyPages
    总页数(内部计算得到数据)  totalPages
    连续页码数(外部数据)v     consecutivePages
    当期的页数(内部数据)      currentPage

    开始页 和 结束页 start end
        - start: end - consecutivePages - 1
        - end: consecutivePages + start - 1
    求出 start 
        - start: currentPage - (consecutivePages)
*/

export default {
  name: "Pagination",
  props: ["allData", "manyData", "consecutivePages"],
  data() {
    return {
      currentPage: 10,
    };
  },
  computed: {
    // 计算总的页数
    totalPages() {
      return Math.ceil(this.allData / this.manyData);
    },
    // 机算 开始页 和 结束页
    startAndEnd() {
      let start = 0;
      let end = 0;
      const { currentPage, consecutivePages, totalPages } = this;
      start = currentPage - Math.floor(consecutivePages / 2); // 31
      if (start < 1) start = 1;

      end = consecutivePages + start - 1;
      if (end > totalPages) {
        end = totalPages; // 33
        // 让 start 进行重新补位
        start = end - consecutivePages + 1;
        // 当 totalPages 总共为 体一页时 start 和 end 都会出现问题
        // 总页数 totalPages 为一时 让 stare 重新判断补位
        if (start < 1) start = 1;
      }
      return {
        start,
        end,
      };
    },
  },
  mounted() {
    console.log(this.totalPages);
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>