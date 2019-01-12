<template>
  <div>
    {{ casePrefix + '-' + caseNumber }}
  </div>
</template>
<script>
import Faker from 'faker'

export default {
  data() {
    return {
      caseNumber: '',
      casePrefix: ''
    }
  },
  mounted() {
    this.casePrefix = Faker.random.alphaNumeric().toUpperCase()
    this.caseNumber = Faker.random.number(10000)
    console.log(`assigner mounted => ${this.casePrefix}-${this.caseNumber}`)
  }
}
</script>
<style scoped>
</style>
