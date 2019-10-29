<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header></main-header>
    <div class="main-wrapper main-wrapper__menu--open">
      <router-view></router-view>
    </div>
    <main-footer v-if="!isComponent"></main-footer>
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
<style lang="scss" scoped>
.main-wrapper__menu--open {
  padding-top: 64px;
  padding-left: 260px;
}
</style>
