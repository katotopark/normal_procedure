import * as VueGL from 'vue-gl'
import Vue from 'vue'

if (process.client) {
  Object.keys(VueGL).forEach(name => {
    Vue.component(name, VueGL[name])
  })
}
