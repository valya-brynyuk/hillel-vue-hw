<template>
  <el-col :span="8" style="margin-bottom: 20px" >
    <el-card>
      <div slot="header" class="clearfix">
        <RouterLink :to="{name: 'single-post', params: {id: item.id}}">
          {{item.title}}
        </RouterLink>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import {ElButton, ElCard, ElCol, ElSwitch} from "element-plus";

export default {
  name: 'PostItem',
  components: {ElButton, ElCol, ElCard, ElSwitch},
  props: {
    item: {
      required: true,
      type: Object,
    }
  },
}
</script>