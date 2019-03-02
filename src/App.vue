<template>
  <div id="app">
    <App-Header/>
    <App-Side-Menu/>
    <Data-Sources/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import SideMenu from "./components/SideMenu.vue"
  import DataSources from "./components/DataSources.vue"
  export default {
    components:{
      AppHeader:Header,
      AppSideMenu:SideMenu,
      DataSources:DataSources
    }
}
</script>

<style lang="scss">
  @import './assets/sass/reset.scss';
  @import './assets/sass/main.scss';
  @font-face {
  font-family: 'GothamMedium';
    src: url('./assets/fonts/GothamMedium.eot?#iefix') format('embedded-opentype'),
          url('./assets/fonts/GothamMedium.woff') format('woff'), 
          url('./assets/fonts/GothamMedium.ttf')  format('truetype'), 
          url('./assets/fonts/GothamMedium.svg#GothamMedium') format('svg');
    font-weight: normal;
    font-style: normal;
  }
</style>
