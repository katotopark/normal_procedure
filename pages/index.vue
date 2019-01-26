<template>
  <el-row class="container">
    <el-col
      :span="6"
      class="log-component">
      <span>LOG</span>
      <span
        v-for="log in dummyLog"
        :key="log.key">
        <text-component
          :text-strings="log"
          :style-obj="textStyle"/>
      </span>
    </el-col>
    <el-col
      :span="12"
      class="game-component">
      <game-component :style-obj="gameCompStyle"/>
    </el-col>
    <el-col
      :span="6"
      class="menu-component">
      <span>MENU</span>
      <menu-component
        id="buttons"
        :menu-obj="menuObj"
        @handle-click="handleClick"/>
    </el-col>
  </el-row>
</template>
<script>
import GameComponent from '../components/GameComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'
import TextComponent from '../components/TextComponent.vue'
import Faker from 'faker'

export default {
  components: {
    GameComponent,
    MenuComponent,
    TextComponent
  },
  data() {
    return {
      dummyLog: [],
      textStyle: {
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        fontFamily: 'InputMonoCondensedItalic',
        fontSize: '.85rem',
        marginTop: '5px',
        padding: '8px 4px'
      },
      gameCompStyle: {
        height: '50vh',
        marginTop: '10vh'
      },
      menuObj: {
        labels: {
          internal: {
            open: false,
            subLabels: ['complaint', 'form']
          },
          external: {
            open: false,
            subLabels: ['medical', 'legal']
          },
          deregulate: {
            open: false
          }
        },
        style: {
          main: {
            width: '100%',
            fontFamily: 'inherit',
            fontSize: '1rem',
            borderRadius: '0px',
            border: '0px',
            backgroundColor: 'black',
            color: 'white'
          },
          sub: {
            width: '90%',
            fontFamily: 'inherit',
            borderRadius: '0px',
            border: '0px',
            backgroundColor: 'black',
            color: 'white',
            margin: '0px'
          }
        }
      }
    }
  },
  created() {
    for (let i = 0; i < 6; i++) {
      let log = `@R2R: ${Faker.lorem.sentences(1)}`
      this.dummyLog.push(log)
    }
  },
  methods: {
    handleClick(e) {
      const menuItem = this.menuObj.labels[e.label]
      menuItem.open == false ? (menuItem.open = true) : (menuItem.open = false)

      // if (e.id == 0) {
      //   if (menuItem.open) console.log('opening', e.label)
      //   else if (!menuItem.open) console.log('closing', e.label)
      // } else if (e.id == 1) {
      //   if (menuItem.open) console.log('opening', e.label)
      //   else if (!menuItem.open) console.log('closing', e.label)
      // } else if (e.id == 2) {
      //   console.log('deregulating')
      // }
    }
  }
}
</script>
<style scoped>
.el-row.container {
  border: 10px solid black;
  padding-bottom: 10vh;
}
.el-col.log-component,
.el-col.menu-component {
  font-size: 1.6rem;
  margin-top: 10vh;
  padding: 10px 10px;
  text-align: center;
}
.el-col.menu-component #buttons {
  margin-top: 5vh;
}
.el-col.log-component #logs {
  margin-top: 5vh;
}
</style>
