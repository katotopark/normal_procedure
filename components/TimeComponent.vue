<template>
  <el-row
    type="flex"
    justify="center">
    <el-col
      :span="12">
      <text-component
        :text-strings="timeStrings"
        :style-obj="timeStyle"/>
      <assigner-component :width-prop="containerWidth"/>
      <div ref="container">
        <text-component
          :text-strings="apologyStrings"
          :style-obj="apologyStyle"/>
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
      timeStrings: 'CURRENT TIME',
      apologyStyle: {
        fontFamily: 'InputMonoCondensedItalic',
        fontSize: '1rem',
        marginTop: '20px',
        padding: '10px 7px',
        border: '2px solid black',
        backgroundColor: 'black',
        color: 'white',
        display: 'block',
        textAlign: 'center'
      },
      timeStyle: {
        fontFamily: 'InputMonoCondensed',
        fontSize: '1.5rem',
        marginBottom: '20px',
        padding: '5px 0px',
        borderBottom: '2px solid black',
        borderColor: 'black',
        backgroundColor: 'transparent',
        color: 'black',
        display: 'block',
        textAlign: 'center'
      }
    }
  },
  computed: {
    apologyStrings() {
      let string
      this.currentTime.s % 4 == 0 ? (string = 'sorry') : (string = '')
      return string
    }
  },
  mounted() {
    this.containerWidth = this.$refs.container.clientWidth * 2
  }
}
</script>
<style scoped>
</style>
