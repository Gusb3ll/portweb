<template>
  <div class="loading flex flex-col">
    <div class="counter text-2xl text-[#555] text-semibold text-center" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  mounted () {
    this.LoadingFadeIn()
    this.countUp()
    setTimeout(() => {
      this.LoadingFadeOut()
    }, 4000)
  },
  methods: {
    countUp () {
      this.$anime({
        targets: '.counter',
        innerHTML: [0, 100],
        easing: 'easeInOutCubic',
        duration: 2500,
        delay: 1000,
        round: 1
      })
    },
    LoadingFadeIn () {
      this.$anime({
        targets: '.loading',
        opacity: [0, 1],
        duration: 1000,
        delay: 0,
        easing: 'easeOutQuint'
      })
    },
    LoadingFadeOut () {
      this.$anime({
        targets: '.loading',
        opacity: [1, 0],
        duration: 1000,
        delay: 0,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
