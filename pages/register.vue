<template>
  <el-row
    class="container"
    type="flex"
    justify="center">
    <el-col
      v-if="counter == 0"
      :span="12"
      class="form">
      <span v-if="errors.length !== 0">{{ errors }}</span>
      <span ref="container">
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
    </el-col>
    <el-col
      v-else-if="counter == 1"
      :span="12">
      <assigner-component :width-prop="containerWidth"/>
      <text-component
        :text-strings="textStrings"
        :style-obj="textStyle"/>
    </el-col>
  </el-row>
</template>

<script>
import AssignerComponent from '../components/AssignerComponent.vue'
import TextComponent from '../components/TextComponent.vue'
import InputComponent from '../components/InputComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import db from '../plugins/firebase'

export default {
  components: {
    InputComponent,
    ButtonComponent,
    AssignerComponent,
    TextComponent
  },
  data() {
    return {
      userObj: {
        name: '',
        bot: ''
      },
      users: [],
      inputProps: { name: { type: 'input' }, bot: { type: 'select' } },
      botOptions: [{ label: 'R2R', value: 0 }, { label: 'JMIA', value: 1 }],
      buttonLabels: ['Submit', 'Clear'],
      name: '',
      bot: '',
      textStrings:
        'You have been assigned a case in the Department of BLABLA. Your case number is AB12345.',
      textStyle: {
        fontFamily: 'InputMonoCondensedItalic',
        fontSize: '1.1rem',
        marginTop: '30px',
        padding: '25px 7px',
        border: '2px solid black',
        backgroundColor: 'black',
        color: 'white',
        display: 'block'
      },
      counter: 0,
      containerWidth: 0,
      errors: []
    }
  },
  firebase: {
    users: {
      source: db.ref('/users'),

      cancelCallback(err) {
        console.error('Error in registrations firestore:', err)
      }
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
  mounted() {
    this.containerWidth = this.$refs.container.offsetParent.clientWidth
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
          // this.$firebaseRefs.users.push(this.userObj)
          this.counter = 1
          this.errors = []
        }
      } else if (e.id == 1) {
        this.userObj = {
          name: '',
          bot: ''
        }
        this.errors = []
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
