<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div class="flex flex-col space-y-8">
        <h1 class="title text-7xl text-white">
          UNDER DEVELOPMENT
        </h1>
        <a target="_blank" href="https://old.gusbell.tech">
          <h1 class="title2 text-3xl text-white text-center">
            [ To old website ]
          </h1>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.TitleFadeIn()
    this.TitleFadeIn2()
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
    },
    TitleFadeIn2 () {
      this.$anime({
        targets: '.title2',
        opacity: [0, 1],
        duration: 2000,
        delay: 500,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.title2',
        translateY: [25, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutQuint'
      })
    },
    head: {
      title: 'Home | Kitpipat Jaritwong'
    }
  }
}
</script>
