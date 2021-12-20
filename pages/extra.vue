<template>
  <div class="flex h-full">
    <div class="mx-auto mt-16">
      <div class="my-8">
        <h1 class="text-4xl text-white text-center font-500 extTitlefadein">
          Extra
        </h1>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row w-full xl:gap-x-8 gap-x-2 mt-4">
        <div v-for="i in ex_detail" :key="i.id">
          <div class="extfadein max-w-lg py-4 px-8 border-solid border-2 border-white rounded-lg my-4 mx-2">
            <div>
              <h2 class="text-white text-center xl:text-2xl text-xl font-semibold">
                {{ i.title }}
              </h2>
              <p class="mt-3 text-white text-center xl:text-3xl text-2xl">
                {{ i.desc }}
              </p>
            </div>
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
      ex_detail: [
        {
          id: 1,
          title: 'Development framework',
          desc: 'NuxtJS + TailwindCSS'
        },
        {
          id: 2,
          title: 'Website animation',
          desc: 'AnimeJS + Pure CSS'
        },
        {
          id: 3,
          title: 'Icon libary',
          desc: 'mdiJS'
        },
        {
          id: 4,
          title: 'Background Picture',
          desc: 'あすてろid @asteroid_ill'
        }
      ]
    }
  },
  head: {
    title: 'Extra | Kitpipat Jaritwong'
  },
  mounted () {
    this.ExtAnimation()
  },
  methods: {
    ExtAnimation () {
      this.$anime({
        targets: '.extTitlefadein',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.extfadein',
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
