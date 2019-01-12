<template>
  <div>
    <vue-p5 v-on="{setup, draw}"/>
  </div>
</template>
<script>
var components = {}
if (process.client) {
  const VueP5 = require('vue-p5')
  components.VueP5 = VueP5
}

export default {
  components: components,
  data() {
    return {
      caseNumber: '',
      casePrefix: ''
    }
  },
  methods: {
    setup(sk) {
      sk.createCanvas(sk.windowWidth / 2, sk.windowHeight / 2)
      sk.background(100)
    },
    draw(sk) {
      sk.stroke(0)
      sk.line(sk.pmouseX, sk.pmouseY, sk.mouseX, sk.mouseY)
    }
  }
}
</script>
<style scoped>
</style>
