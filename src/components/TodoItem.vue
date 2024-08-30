<template>
  <el-col :span="8" style="margin-bottom: 20px" >
    <el-card>
      <div slot="header" class="clearfix">
        <b>#{{item.id}} - {{item.title}}</b>
      </div>
      <hr>
      <div class="text item">
        {{ item.description }}
      </div>
      <hr>
      <el-switch
          :model-value="item.status"
          size="large"
          active-text="Done"
          inactive-text="Not Done"
          @update:model-value="switchChangeHandler"
      />
      <hr>
      <el-button type="danger" @click="handleRemoveTodoItem">Remove</el-button>
    </el-card>
  </el-col>
</template>

<script>
import {ElButton, ElCard, ElCol, ElSwitch} from "element-plus";

export default {
  name: 'TodoItem',
  components: {ElButton, ElCol, ElCard, ElSwitch},
  props: {
    item: {
      required: true,
      type: Object,
    }
  },
  data() {
    return {
      isDone: Boolean,
    };
  },
  emits: ['remove', 'change'],
  methods: {
    handleRemoveTodoItem() {
      this.$emit('remove', this.item);
    },
    switchChangeHandler(val) {
      setTimeout(() => {
        this.$emit('change', {
          ...this.item,
          status: val,
        });
      }, 10)
    }
  }
}
</script>