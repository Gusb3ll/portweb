<template>
  <div class="flex h-sreen">
    <div class="mx-auto mt-16">
      <div class="my-8">
        <h1 class="text-4xl text-white text-center font-500 certTitlefadein">
          My Certificates
        </h1>
      </div>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 grid-flow-row w-full xl:gap-x-8 gap-x-2 mt-4">
        <div v-for="i in certs" :key="i.id">
          <div class="certfadein max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-2">
            <a :href="i.src" target="_blank"><img :src="i.src" height="200" width="350"></a>
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
      certs: [
        {
          id: 1,
          src: require('~/assets/cert/tm1-com.jpg')
        },
        {
          id: 2,
          src: require('~/assets/cert/p1.png')
        },
        {
          id: 3,
          src: require('~/assets/cert/co1.png')
        },
        {
          id: 4,
          src: require('~/assets/cert/c1.png')
        },
        {
          id: 5,
          src: require('~/assets/cert/c2.jpg')
        },
        {
          id: 6,
          src: require('~/assets/cert/c3.jpg')
        },
        {
          id: 7,
          src: require('~/assets/cert/s1.png')
        },
        {
          id: 8,
          src: require('~/assets/cert/tu1.png')
        },
        {
          id: 9,
          src: require('~/assets/cert/t1.png')
        }
      ]
    }
  },
  head: {
    title: 'Certificates'
  },
  mounted () {
    this.ProjAnimation()
  },
  methods: {
    ProjAnimation () {
      this.$anime({
        targets: '.certTitlefadein',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.certfadein',
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 775,
        delay: (el, i) => 300 + (i * 100),
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
