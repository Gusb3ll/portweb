<template>
  <div class="flex h-sreen">
    <div class="mx-auto mt-16">
      <div class="my-8">
        <h1 class="text-4xl text-white text-center font-500 artTitlefadein">
          My Artworks
        </h1>
      </div>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 grid-flow-row w-full xl:gap-x-8 gap-x-2 mt-4">
        <div v-for="i in arts" :key="i.id">
          <div
            class="artfadein max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-2">
            <a :href="i.src" target="_blank">
              <img :src="i.src" :height="i.height" :width="i.width">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arts: [
        {
          id: 1,
          src: require('~/assets/art/1.png')
        },
        {
          id: 2,
          src: require('~/assets/art/2.png')
        }
      ]
    }
  },
  head: {
    title: 'Artworks'
  },
  mounted () {
    this.ArtAnimation()
  },
  methods: {
    ArtAnimation () {
      this.$anime({
        targets: '.artTitlefadein',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.artfadein',
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 775,
        delay: (el, i) => 300 + i * 100,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
