<template>
  <div>
    <vgl-renderer
      antialias
      style="height: 100vh;">
      <vgl-scene>
        <vgl-box-geometry name="box"/>
        <vgl-sphere-geometry
          name="sphere"/>
        <vgl-mesh-standard-material
          name="std"/>
        <vgl-mesh
          geometry="box"
          material="std"/>
        <vgl-ambient-light
          color="#ccffdc"/>
        <vgl-directional-light
          position="0 1 1"/>
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="5 1 1;"/>
    </vgl-renderer>
  </div>
</template>
<script>
import VueGL from 'three'

export default {
  data() {
    return {}
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
