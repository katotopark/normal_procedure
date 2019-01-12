<template>
  <div>
    <el-input
      v-model="name"
      :placeholder="name"/>
    <el-button
      @click="$emit('catch-input', name)">Submit</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>
<style scoped>
</style>
