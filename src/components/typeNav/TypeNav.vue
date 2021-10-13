<template>
  <!-- 商品分类导航 -->
  <div class="type-nav" @mouseleave="leaveCategory">
    <div class="container" @mouseenter="currentIndex = -1"  @mouseleave="allLeave">
      <h2 class="all" @mouseenter="allEnter">
        全部商品分类
      </h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" @click="toSearch" v-show="showSort">
        <div class="all-sort-list2">
          <!-- 一级分类 -->
          <div
            class="item"
            v-for="(firstLevel, index) in baseCategoryList"
            :key="firstLevel.categoryId"
            @mouseenter="enterCategory(index)"
            :class="{ showList: currentIndex === index }"
          >
            <h3>
              <a
                href="javascript:;"
                :data-current1id="firstLevel.categoryId"
                :data-currentname="firstLevel.categoryName"
                >{{ firstLevel.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix">
              <!-- 二级分类 -->
              <div class="subitem">
                <dl
                  class="fore"
                  v-for="secondLevel in firstLevel.categoryChild"
                  :key="secondLevel.categoryId"
                >
                  <dt>
                    <a
                      href="javascript:;"
                      :data-current2id="secondLevel.categoryId"
                      :data-currentname="secondLevel.categoryName"
                      >{{ secondLevel.categoryName }}</a
                    >
                  </dt>
                  <!--三级分类 -->
                  <dd>
                    <em
                      v-for="threeLevel in secondLevel.categoryChild"
                      :key="threeLevel.categoryId"
                    >
                      <a
                        href="javascript:;"
                        :data-current3id="threeLevel.categoryId"
                        :data-currentname="threeLevel.categoryName"
                        >{{ threeLevel.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle.js";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -2,
      showSort: this.$route.name.toLowerCase() !== "search",
    };
  },
  methods: {
    leaveCategory() {
      this.currentIndex = -2;
    },
    enterCategory: throttle(function (index) {
      if (this.currentIndex > -2) {
        this.currentIndex = index;
      }
    }, 326),
    toSearch(event) {
      console.log(event.target);
      let {
        current1id: category1id,
        current2id: category2id,
        current3id: category3id,
        currentname: categoryname,
      } = event.target.dataset;

      let options = { name: "search", query: {} };
      category1id ? (options.query.category1id = category1id) : "";
      category2id ? (options.query.category2id = category2id) : "";
      category3id ? (options.query.category3id = category3id) : "";
      categoryname ? (options.query.categoryname = categoryname) : "";
      if (Object.keys(this.$route.params).length !== 0) {
        options.params = this.$route.params;
      }
      this.$router.push(options);
    },
    allEnter() {
      if (this.$route.name.toLowerCase() === "search") {
        this.showSort = true;
      }
    },
    allLeave() {
      if (this.$route.name.toLowerCase() === "search") {
        this.showSort = false;
      }
    }
  },
  computed: {
    ...mapState("product", ["baseCategoryList"]),
  },
  mounted() {},
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.showList {
            background: rgba(174, 218, 243, 0.288);
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>