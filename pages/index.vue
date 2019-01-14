<template>
  <div>
    <vgl-renderer
      antialias
      style="height: 100vh;">
      <vgl-scene>
        <span
          v-for="elem in unitCount"
          :key="elem.key">
          <vgl-box-geometry
            :name="`${elem}`"
            :width="unitSize"
            :height="unitSize"
            :depth="unitSize"
            width-segments="3"
            height-segments="2"/>
          <vgl-mesh
            ref="test"
            :position="`${elem}*${x} ${y/20} ${z/20}`"
            :geometry="`${elem}`"
            material="yoi"/>
          <vgl-mesh-basic-material
            name="yoi"
            color="#bb90ad"/>
        </span>
        
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="8 1 1;"/>
    </vgl-renderer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      col: '#ccffdc',
      zoom: 50,
      unitCount: 3,
      unitSize: 1,
      x: 50,
      y: 50,
      z: 50
    }
  },
  mounted() {
    console.log('this is test', this.$refs.test)
  }
}
</script>
<style scoped>
.el-row .el-col {
  border: 3px solid black;
  height: 300px;
  margin-top: 50px;
}
</style>
