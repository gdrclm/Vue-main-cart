<template>
  <v-select class="input" :options="books" label="title"></v-select>
</template>

<script>
import { defineComponent } from "vue";

export default {};
</script>

<style scoped>
.input {
  background: #ffffff;

  border: 1px solid #dbdbdb;
  border-radius: 5px;
}
</style>
