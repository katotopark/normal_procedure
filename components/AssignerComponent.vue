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
      sk: null,
      caseNumber: '',
      casePrefix: '',
      rows: 4,
      frameSize: 0,
      boxSize: 0,
      windowCenter: null,
      initialLoc: null,
      diagonals: true,
      diagonalRndm: 0,
      sWeight: 0,
      footStringDisplay: false,
      colorSwitch: false,
      black: null,
      white: null,
      deptNames: [
        'Reasonable Outbursts',
        'Mediocre Breakthroughs',
        'Substantial Whims'
      ]
    }
  },
  mounted() {
    console.log(this.sk)
  },
  methods: {
    setup(sk) {
      this.sk = sk
      const s = this.sk
      sk.createCanvas(sk.windowWidth, sk.windowHeight)
      this.windowCenter = sk.createVector(
        sk.windowWidth / 2,
        sk.windowHeight / 2
      )
      this.diagonalRndm = sk.floor(sk.random(2))

      this.black = sk.color(20)
      this.white = sk.color(235)

      this.frameSize = sk.width * 0.3
      this.boxSize = this.frameSize / this.rows
      this.initialLoc = sk.createVector(
        this.windowCenter.x,
        this.frameSize / 2,
        this.windowCenter.y,
        this.frameSize / 2
      )
    },
    draw() {
      const s = this.sk
      s.background(this.black)

      if (!this.colorSwitch) {
        this.black = s.color(20)
        this.white = s.color(235)
      } else {
        this.black = s.color(235)
        this.white = s.color(20)
      }
    },
    drawLines() {},
    drawBoxes() {},
    boxDisplay() {},
    boxDiagonals() {},
    boxNoise() {},
    boxUpdate() {}
  }
}
</script>
<style scoped>
</style>
