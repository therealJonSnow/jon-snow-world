<template>
  <div class="main-container">
    <nuxt keep-alive />
    <Themes />
    <NavMenu />
  </div>
</template>

<style lang="scss">
.page-enter-active, .page-leave-active {
    transition: opacity 0.5s;
}
.page-enter, .page-leave-active {
  opacity: 0;
}

.main-container {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    // width: 100vw;
    overflow-x: hidden;
    position: relative;
    text-align: center;
}
</style>

<script>

import NavMenu from '../components/navMenu.vue'
import Themes from '../components/themes.vue'

export default {
  name: 'App',

  components: {
    NavMenu,
    Themes
  },

  mounted () {
    console.log(
      '+-+-+-+-+-+-+-+ +-+-+-+ +-+ +-+-+-+-+-+-+-+-+-+-+\n' +
            '|L|o|o|k|i|n|g| |f|o|r| |a| |d|e|v|e|l|o|p|e|r|:|\n' +
            '+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n' +
            '|W|h|y| |n|o|t| |c|o|n|t|a|c|t| |m|e|?|\n' +
            '+-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+\n'
    )
  }
}

</script>
