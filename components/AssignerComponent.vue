<template>
  <div>
    <vue-p5 v-on="{setup, draw}"/>
  </div>
</template>
<script>
import TextComponent from './TextComponent.vue'

var components = {
  TextComponent
}

if (process.client) {
  const VueP5 = require('vue-p5')
  components.VueP5 = VueP5
}

export default {
  components: components,
  props: {
    widthProp: {
      required: true,
      type: Number
    }
  },
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
  methods: {
    setup(sk) {
      this.sk = sk
      const s = this.sk
      sk.createCanvas(this.widthProp / 2, this.widthProp / 2)
      this.windowCenter = s.createVector(s.width / 2, s.height / 2)
      this.diagonalRndm = s.floor(s.random(2))
      this.sWeight = s.width * 0.004

      this.black = s.color(20)
      this.white = s.color(235)

      this.frameSize = s.width * 0.8
      this.boxSize = this.frameSize / this.rows
      this.initialLoc = s.createVector(
        this.windowCenter.x - this.frameSize / 2,
        this.windowCenter.y - this.frameSize / 2
      )
    },
    draw() {
      const s = this.sk
      s.background(this.black)

      this.drawLines()
      this.drawBoxes()

      if (!this.colorSwitch) {
        this.black = s.color(20)
        this.white = s.color(235)
      } else {
        this.black = s.color(235)
        this.white = s.color(20)
      }
      s.noLoop()
    },
    drawLines() {
      const s = this.sk
      const loc = this.initialLoc

      s.strokeCap(s.SQUARE)
      s.stroke(255)
      s.strokeWeight(this.sWeight)

      for (let i = 0; i < this.rows; i++) {
        s.line(
          loc.x,
          loc.y + i * this.boxSize,
          loc.x + this.frameSize,
          loc.y + i * this.boxSize
        )
      }
    },
    drawBoxes() {
      const loc = this.initialLoc
      for (let i = 0; i < this.rows; i++) {
        this.boxDisplay(loc.x, loc.y + this.boxSize * i)
        this.boxDiagonals(loc.x, loc.y + this.boxSize * i)
        // this.boxNoise()
        // this.boxUpdate()
      }
    },
    boxDisplay(x, y) {
      const s = this.sk
      s.noStroke()
      s.fill(255)
      s.rectMode(s.CENTER)
      s.rect(
        x + this.boxSize / 2,
        y + this.boxSize / 2,
        this.boxSize,
        this.boxSize
      )
    },
    boxDiagonals(x, y) {
      const s = this.sk
      s.stroke(0)
      s.strokeWeight(this.sWeight)
      s.strokeCap(s.ROUND)
      if (this.diagonals)
        this.diagonalRndm == 0
          ? s.line(x, y, x + this.boxSize, y + this.boxSize)
          : s.line(x, y + this.boxSize, x + this.boxSize, y)
    },
    boxNoise() {},
    boxUpdate() {}
  }
}
</script>
<style scoped>
</style>
