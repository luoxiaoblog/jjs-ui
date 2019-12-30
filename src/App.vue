<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header></main-header>
    <div class="main-wrapper main-wrapper__menu--open page-container">
      <router-view></router-view>
    </div>
    <!-- <main-footer></main-footer> -->
  </div>
</template>

<script>
export default {
  name: 'app',

  computed: {
    isComponent() {
      return /^component-/.test(this.$route.name || '')
    }
  }
}
</script>
<style lang="scss">
#app {
  height: 100%;
  overflow: hidden;
}

.main-wrapper {
  height: 100%;
  overflow: auto;
}
</style>
