<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div class="flex flex-col space-y-6">
        <h1 class="title text-7xl text-white">
          Kitpipat Jaritwong
        </h1>
        <div class="flex flex-row justify-center space-x-16 pt-4">
          <a class="title2L text-lg text-white font-semibold titlefadein2" target="_blank" href="https://github.com/gusb3ll"><v-mdi name="mdi-github" size="48" /></a>
          <a class="title2L text-lg text-white font-semibold titlefadein2" target="_blank" href="https://www.facebook.com/kitpipat.jaritwong"><v-mdi name="mdi-facebook" size="48" /></a>
          <a class="title2R text-lg text-white font-semibold titlefadein2" target="_blank" href="https://twitter.com/gusb3ll"><v-mdi name="mdi-twitter" size="48" /></a>
          <a class="title2R text-lg text-white font-semibold titlefadein2" target="_blank" href="https://www.linkedin.com/in/kitpipat-jaritwong-3123a221a/"><v-mdi name="mdi-linkedin" size="48" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home | Kitpipat Jaritwong'
  },
  mounted () {
    this.TitleFadeIn()
  },
  methods: {
    TitleFadeIn () {
      this.$anime({
        targets: '.title',
        opacity: [0, 1],
        duration: 2000,
        delay: 0,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.title',
        translateY: [50, 0],
        duration: 1000,
        delay: 0,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.title2L',
        opacity: [0, 1],
        duration: 2000,
        delay: 500,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.title2L',
        translateX: [-50, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.title2R',
        opacity: [0, 1],
        duration: 2000,
        delay: 500,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.title2R',
        translateX: [50, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
