<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@font-face {
  font-family: InputMonoCondensedLight;
  src: url('../assets/InputMonoCondensed-Light.ttf');
}
@font-face {
  font-family: InputMonoCondensed;
  src: url('../assets/InputMonoCondensed-Regular.ttf');
}
@font-face {
  font-family: InputMonoCondensedItalic;
  src: url('../assets/InputMonoCondensed-Italic.ttf');
}
@font-face {
  font-family: InputMonoCondensedLightItalic;
  src: url('../assets/InputMonoCondensed-LightItalic.ttf');
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-family: InputMonoCondensed, monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: rgb(247, 244, 204);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.el-input__inner,
.el-textarea__inner {
  border-radius: 0px !important;
  border: 2px solid black;
  font-family: InputMonoCondensedLight;
}

.el-textarea__inner:focus,
.el-textarea__inner:hover {
  border-color: black !important;
}
.el-select .el-input__inner:focus,
.el-input__inner:hover {
  border-color: black !important;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: black;
  color: white;
}
.el-select-dropdown__item.selected {
  background-color: black;
  color: white;
}
</style>
