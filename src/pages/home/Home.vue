<template>
  <div>
    <TypeNav></TypeNav>
    <List></List>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from "../../components/typeNav/TypeNav"
import Recommend from "./HomeRecommend/Recommend";
import Rank from "./HomeRank/Rank";
import List from "./HomeList/List";
import Like from "./HomeLike/Like"
import Floor from "./HomeFloor/Floor"
import Brand from "./HomeBrand/Brand"

export default {
  name: "Home",
  components: {
    TypeNav,
    Recommend,
    Rank,
    List,
    Like,
    Floor,
    Brand
  }
};
</script>

<style scoped lang="less">

</style>