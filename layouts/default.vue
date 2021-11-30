<template>
  <main v-if="loading">
    <div class="flex h-screen">
      <div class="m-auto">
        <Loading class="loading" />
      </div>
    </div>
  </main>
  <main v-else>
    <NavMain />
    <Nuxt />
  </main>
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
  methods: {
    handleLoading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 5000)
    }
  }
}
</script>
