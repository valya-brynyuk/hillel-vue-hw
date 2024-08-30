<template>
  <el-container>
    <el-main>
        <el-row>
          <el-col :span="8" style="padding-right: 20px">
            <todo-form @setTodoItems="handleSetTodoItems"/>
          </el-col>

          <el-col :span="16">

            <el-row :gutter="20">
              <todo-item
                  v-for="item in notCompletedItems"
                  :key="item.id"
                  :item="item"
                  @change="handleStatusChange"
                  @remove="handleRemoveTodoItem"
              />
            </el-row>
          </el-col>
        </el-row>

      <h2>Completed Todos</h2>
      <hr>
      <el-row>
        <el-col :span="16" :offset="8">

          <el-row :gutter="20">
            <todo-item
                v-for="item in completedItems"
                :key="item.id"
                :item="item"
                @change="handleStatusChange"
                @remove="handleRemoveTodoItem"
            />
          </el-row>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<script>
import {ElButton, ElCard, ElCol, ElContainer, ElMain, ElRow} from "element-plus";
import TodoForm from "./components/TodoForm.vue";
import storage from "./functions/LStorage.js";
import TodoItem from './components/TodoItem.vue';

export default {
  components: {
    ElButton,
    ElMain,
    ElContainer,
    ElRow, ElCol,
    TodoForm, ElCard,
    TodoItem,
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
  created() {
    this.todoItems = storage.getItems();
  },

}
</script>
