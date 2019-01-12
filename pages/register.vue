<template>
  <el-row
    class="container"
    type="flex"
    justify="center">
    <el-col :span="12">
      <span v-if="counter == 0">
        <name-input-component @catch-input="catchName"/>
      </span>
      <span v-else-if="counter == 1">
        <bot-input-component @catch-input="catchBot"/>
      </span>
      <span v-else-if="counter == 2">
        <assigner-component ref="caseAssigner"/>
      </span>
    </el-col>
  </el-row>
</template>

<script>
import NameInputComponent from '../components/NameInputComponent.vue'
import BotInputComponent from '../components/BotInputComponent.vue'
import AssignerComponent from '../components/AssignerComponent.vue'

export default {
  components: {
    NameInputComponent,
    BotInputComponent,
    AssignerComponent
  },
  data() {
    return {
      name: '',
      bot: '',
      counter: 0
    }
  },
  watch: {
    counter() {
      if (this.counter == 2)
        setTimeout(() => {
          console.log('pushin the router')
          this.pushRoute()
        }, 5000)
    }
  },
  methods: {
    catchName(e) {
      if (e !== '') {
        this.name = e
        this.counter = 1
      }
      console.log('got name ', this.name)
    },
    catchBot(e) {
      this.bot = e
      this.counter = 2
      console.log('got bot ', this.bot)
    },
    pushRoute() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.container {
  margin-top: 50px;
}
</style>
