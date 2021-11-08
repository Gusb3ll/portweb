<template>
  <div class="flex h-15 py-2 w-screen bg-indigo-700">
    <div class="flex flex-row items-center mx-8 space-x-8 navfadein">
      <NuxtLink to="/">
        <img src="~/assets/owo.svg" width="40" height="40">
      </NuxtLink>
      <NuxtLink to="/profile">
        <h1 class="text-xl text-white">
          Profile
        </h1>
      </NuxtLink>
      <NuxtLink to="/proj">
        <h1 class="text-xl text-white">
          Projects
        </h1>
      </NuxtLink>
      <NuxtLink to="/cert">
        <h1 class="text-xl text-white">
          Certificates
        </h1>
      </NuxtLink>
      <NuxtLink to="/art">
        <h1 class="text-xl text-white">
          Artworks
        </h1>
      </NuxtLink>
    </div>
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
