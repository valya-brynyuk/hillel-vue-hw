<template>
  <el-form :model="form">
    <h2 class="text-large font-600 mr-3"> Create Post </h2>
    <el-form-item>
      <el-input v-model.trim="form.title" placeholder="Title" size="large"/>
      <error-message :text="errors.title" />
    </el-form-item>

    <el-form-item>
      <el-input type="textarea" v-model="form.description" placeholder="Description" size="large"/>
      <error-message :text="errors.description" />
    </el-form-item>

    <el-form-item>
      <el-input v-model.trim="form.author" placeholder="Author" size="large"/>
      <error-message :text="errors.author" />
    </el-form-item>

    <el-button @click.stop="handleSubmit" type="primary">Save</el-button>
  </el-form>
</template>

<script>
import {ElForm, ElFormItem, ElInput, ElSwitch} from "element-plus";
import ErrorMessage from "./ErrorMessage.vue";
import {string, object} from "yup";

const validationSchema = object().shape({
  title: string().required(),
  description: string().required(),
  author: string().required(),
});

export default {
  name: 'PostForm',
  components: {
    ElForm, ElFormItem, ElInput, ErrorMessage, ElSwitch
  },
  data() {
    return {
      form: this.getDefaultFormValue(),
      errors: {}
    }
  },
  computed: {
    isValidForm() {
      return Object.keys(this.errors).length < 1;
    }
  },
  emits: ['submit',],
  methods: {
    getDefaultFormValue() {
      return {
        title: '',
        description: '',
        author: '',
      };
    },
    resetForm() {
      this.form = this.getDefaultFormValue();
    },
    validateForm() {
      this.errors = {};

      try {
        validationSchema.validateSync(this.form, {
          abortEarly: false,
          recursive: true,
        });
      } catch (e) {
        if (!Array.isArray(e.inner)) {
          throw e;
        }

        const errors = {};
        for (const err of e.inner) {
          errors[err.path] = err.message;
        }

        this.errors = errors;
      }
    },

    handleSubmit() {
      this.validateForm();
      if (!this.isValidForm) {
        return;
      }

      this.$emit('submit', {
        ...this.form
      });
      this.resetForm();
    }
  },
}
</script>
