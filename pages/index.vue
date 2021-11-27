<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <h1 class="title text-7xl text-white">
        UNDER DEVELOPMENT
      </h1>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>
