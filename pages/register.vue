<template>
  <el-row
    class="container"
    type="flex"
    justify="center">
    <el-col
      :span="12"
      class="form">
      <span v-if="counter == 0">
        <input-component
          :data-obj="userObj"
          :input-props="inputProps"
          :select-options="botOptions"
          @catch-input="catchName"
          @catch-select="catchBot"/>
        <button-component
          :labels="buttonLabels"
          @handle-click="handleClick"/>
      </span>
      <span v-else-if="counter == 1">
        <assigner-component/>
      </span>
    </el-col>
  </el-row>
</template>

<script>
import AssignerComponent from '../components/AssignerComponent.vue'
import InputComponent from '../components/InputComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'

export default {
  components: {
    InputComponent,
    ButtonComponent,
    AssignerComponent
  },
  data() {
    return {
      userObj: {
        name: '',
        bot: ''
      },
      inputProps: { name: { type: 'input' }, bot: { type: 'select' } },
      botOptions: [{ label: 'R2R', value: 0 }, { label: 'JMIA', value: 1 }],
      buttonLabels: ['Submit', 'Clear'],
      name: '',
      bot: '',
      counter: 0,
      errors: []
    }
  },
  watch: {
    counter() {
      if (this.counter == 1)
        setTimeout(() => {
          this.pushRoute()
        }, 3000)
    }
  },
  methods: {
    catchName(e) {
      this.name = e.value
    },
    catchBot(e) {
      for (let bot of this.botOptions) {
        if (bot.value == e.value) this.bot = bot.label
      }
    },
    handleClick(e) {
      if (e.id == 0) {
        this.checkForm()

        if (this.errors.length == 0) {
          this.userObj = {
            name: this.name,
            bot: this.bot
          }
          console.log('user registered', this.userObj)
          this.counter = 1
        }
      } else if (e.id == 1) {
        this.userObj = {
          name: '',
          bot: ''
        }
      }
    },
    checkForm() {
      if (this.name == '') {
        let errMessage
        errMessage = 'You need to enter your name.'
        this.errors.push(errMessage)
      } else if (this.bot == '') {
        let errMessage
        errMessage = 'You need to select a bot.'
        this.errors.push(errMessage)
      }
      console.log(this.errors)
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
.el-col.form {
  border: 2px solid black;
}
</style>
