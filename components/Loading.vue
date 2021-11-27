<template>
  <div class="flex flex-col">
    <div class="space-y-3">
      <h1 class="text-3xl text-[#ddd] text-semibold text-center">
        [ Initializing ]
      </h1>
      <div class="counter text-xl text-[#ddd] text-semibold text-center" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  mounted () {
    this.countUp()
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
    }
  }
}
</script>
