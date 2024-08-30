<template>
  <el-header>
    <RouterLink :to="{name: 'home'}">Back to Blog</RouterLink>
  </el-header>
  <post-form
      @submit="formSubmitHandler"
  />
</template>

<script>
import PostForm from "../components/PostForm.vue";
import storage from "../functions/LStorage.js";

export default {
  name: 'AddArticle',
  components: {PostForm},
  methods: {
    formSubmitHandler(newPost) {
      storage.saveItem(newPost);

      this.$router.push({name: 'home'});
    }
  }
}
</script>