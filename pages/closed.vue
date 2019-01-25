<template>
  <el-row
    type="flex"
    justify="center"
    class="container">
    <el-col :span="12">
      <time-component
        :current-time="currentTime"/>
      <span>{{ returnTime() }}</span>
    </el-col>
  </el-row>
</template>
<script>
import VueMomentLib from 'vue-moment-lib'
import TimeComponent from '../components/TimeComponent.vue'

export default {
  components: {
    TimeComponent
  },
  data() {
    return {
      currentTime: {
        d: '',
        h: '',
        m: '',
        s: ''
      }
    }
  },
  methods: {
    returnTime() {
      this.currentTime.s = this.$time().second()
      this.currentTime.m = this.$time().minute()
      this.currentTime.h = this.$time().hour()
      this.currentTime.d = this.$time().day()

      setInterval(() => {
        this.currentTime.s = this.$time().second()
      }, 1000)
      setInterval(() => {
        this.currentTime.m = this.$time().minute()
      }, 60000)
      setInterval(() => {
        this.currentTime.h = this.$time().hour()
      }, 360000)
      return this.currentTime
    }
  }
}
</script>
<style scoped>
.container {
  margin-top: 50px;
}
</style>
