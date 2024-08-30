<template>
  <el-header>
    <RouterLink :to="{name: 'home'}">Back to Blog</RouterLink>
  </el-header>
  <template v-if="post">
    <el-row>
      <el-col :span="24">
        <h2>{{ post.title }}</h2>
      </el-col>
      <el-col :span="24">
        <p>{{post.description}}</p>
      </el-col>
      <el-col :span="12">
        <b>{{post.author}}</b>
      </el-col>
      <el-col :span="12">
        <i>{{formatDate(post.created_at)}}</i>
      </el-col>
      <el-col :span="24">
        <el-button type="danger" @click="removeClickHandler">Remove</el-button>
      </el-col>
    </el-row>
  </template>
  <p v-else>
    Loading....
  </p>
  <el-dialog
      v-model="dialogVisible"
      title="Are you sure?"
      width="500"
      :before-close="handleClose"
  >
    <span>This post will be deleted!</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="removeConfirmHandler">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import storage from "../functions/LStorage.js";
import {ElButton, ElCol, ElDialog, ElRow} from "element-plus";

export default {
  name: 'ArticleDetail',
  components: {ElButton, ElDialog, ElCol, ElRow},
  data() {
    return {
      post: null,
      dialogVisible: false,
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date || new Date()).toLocaleDateString();
    },
    handleClose() {
      this.dialogVisible = false;
    },
    removeClickHandler() {
      this.dialogVisible = true;
    },
    removeConfirmHandler() {
      this.dialogVisible = false;

      storage.removeItem(this.post.id);

      this.$router.push({name: 'home'})
    }
  },
  mounted() {
    const post = storage.getItem(+this.$route.params.id);
    if (!post) {
      this.$router.push({name: 'not-found'})
    }

    this.post = post;
  }
}
</script>