<template>
  <el-header>
    <RouterLink :to="{name: 'new-post'}">Create New Post</RouterLink>
  </el-header>
  <el-row :gutter="20">
    <post-item
        v-for="item in posts"
        :key="item.id"
        :item="item"
    />
  </el-row>

</template>

<script>
import storage from "../functions/LStorage.js";
import PostItem from "../components/PostItem.vue";

export default {
  name: 'ArticleList',
  components: {PostItem},
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.posts = storage.getItems();
  },
}
</script>