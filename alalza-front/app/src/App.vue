<template>
  <transition mode="out-in" appear enter-active-class="animated slow flipInX" leave-active-class="animated slow flipOutX">
    <router-view />
  </transition>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style lang="sass">
  .q-layout
    &.flipInX
      transition-duration: 10s !important
  .flip-enter-active,.flip-leave-active, .v-enter-to
    transition-duration: 1s ease
</style>
