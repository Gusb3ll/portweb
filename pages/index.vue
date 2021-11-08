<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div class="flex flex-col space-y-8 -mt-16">
        <h1 class="text-7xl titlefadein1">
          Kitpipat Jaritwong
        </h1>
        <div class="flex flex-row justify-center space-x-16">
          <a class="text-lg font-semibold titlefadein2" target="_blank" href="https://github.com/gusb3ll">Github</a>
          <a class="text-lg font-semibold titlefadein2" target="_blank" href="https://www.facebook.com/kitpipat.jaritwong">Facebook</a>
          <a class="text-lg font-semibold titlefadein2" target="_blank" href="https://twitter.com/gusb3ll">Twitter</a>
          <a class="text-lg font-semibold titlefadein2" target="_blank" href="https://www.linkedin.com/in/kitpipat-jaritwong-3123a221a/">LinkedIN</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home'
  },
  mounted () {
    this.TitleAnimation1()
    this.TitleAnimation2()
  },
  methods: {
    TitleAnimation1 () {
      this.$anime({
        targets: '.titlefadein1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
    },
    TitleAnimation2 () {
      this.$anime({
        targets: '.titlefadein2',
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 775,
        delay: 120,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
