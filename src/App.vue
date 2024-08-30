<template>
  <el-container>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<script>
import {ElButton, ElCard, ElCol, ElContainer, ElMain, ElRow} from "element-plus";
import TodoForm from "./components/PostForm.vue";
import storage from "./functions/LStorage.js";

export default {
  components: {
    ElButton,
    ElMain,
    ElContainer,
    ElRow, ElCol,
    TodoForm, ElCard,
  },
  data() {
    return {
      todoItems: [],
    }
  },
  computed: {
    notCompletedItems() {
      return this.todoItems.filter(item => !item.status);
    },
    completedItems() {
      return this.todoItems.filter(item => item.status);
    },
  },
  methods: {
    handleSetTodoItems(data) {
      const savedItem = storage.saveItem(data)
      this.todoItems.push(savedItem);
    },
    handleRemoveTodoItem(item) {
      storage.removeItem(item.id);
      this.todoItems = this.todoItems.filter(prev => prev.id !== item.id);
    },
    handleStatusChange(item) {
      storage.changeItem(item);
      this.todoItems = this.todoItems.map(prev => prev.id === item.id ? item : prev);
    }
  },

}
</script>
