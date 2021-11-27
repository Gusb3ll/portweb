<template>
  <div class="">

  </div>
</template>

<script>
export default {
  mounted () {
    this.RenderAnimation()
  },
  methods: {
    RenderAnimation () {
      this.$anime({
        targets: '.navfadein',
        opacity: [0, 1],
        translateX: [25, 0],
        duration: 775,
        delay: 500,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
