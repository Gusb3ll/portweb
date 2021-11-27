<template>
  <keep-alive>
    <main v-if="loading">
      <div class="flex h-screen">
        <div class="m-auto">
          <Loading class="loading" />
        </div>
      </div>
    </main>
    <main v-else>
      <Nuxt />
    </main>
  </keep-alive>
</template>

<script>
import Loading from '~/components/Loading.vue'

export default {
  components: {
    Loading
  },
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.handleLoading()
  },
  mounted () {
    this.LoadingFadeIn()
    setTimeout(() => {
      this.LoadingFadeOut()
    }, 4000)
  },
  methods: {
    handleLoading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 6000)
    },
    LoadingFadeIn () {
      this.$anime({
        targets: '.loading',
        opacity: [0, 1],
        duration: 2000,
        delay: 500,
        easing: 'easeOutQuint'
      })
    },
    LoadingFadeOut () {
      this.$anime({
        targets: '.loading',
        opacity: [1, 0],
        duration: 2000,
        delay: 0,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
