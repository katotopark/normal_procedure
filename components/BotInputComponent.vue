<template>
  <el-radio-group
    v-model="bot"
    @change="$emit('catch-input', bot)">
    <el-radio label="R2R"/>
    <el-radio label="JMIA"/>
  </el-radio-group>
</template>
<script>
export default {
  data() {
    return {
      bot: ''
    }
  }
}
</script>
<style scoped>
</style>
