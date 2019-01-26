<template>
  <div>
    <el-row
      v-for="(button, index) in Object.keys(menuObj.labels)"
      :key="button.key">
      <el-button
        :style="menuObj.style.main"
        @click="$emit('handle-click', {id: index, label: button})">
        {{ button.toUpperCase() }}
      </el-button>
      <span v-if="menuObj.labels[button].open">
        <el-button
          v-for="sub in menuObj.labels[button].subLabels"
          :key="sub.key"
          :style="menuObj.style.sub">{{ sub.toUpperCase() }}</el-button>
      </span>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    menuObj: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
</style>
