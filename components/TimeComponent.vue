<template>
  <el-row
    type="flex"
    justify="center">
    <el-col
      :span="12">
      <assigner-component :width-prop="containerWidth"/>
      <div ref="container">
        <text-component
          :text-strings="textStrings"
          :style-obj="textStyle"/>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import AssignerComponent from './AssignerComponent.vue'
import TextComponent from './TextComponent.vue'

export default {
  components: {
    AssignerComponent,
    TextComponent
  },
  props: {
    currentTime: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      containerWidth: 0,
      textStrings: 'SORRY',
      textStyle: {
        fontFamily: 'InputMonoCondensedItalic',
        fontSize: '1.4rem',
        marginTop: '20px',
        padding: '25px 7px',
        border: '2px solid black',
        backgroundColor: 'black',
        color: 'white',
        display: 'block',
        textAlign: 'center'
      }
    }
  },
  mounted() {
    this.containerWidth = this.$refs.container.clientWidth * 2
  }
}
</script>
<style scoped>
</style>
