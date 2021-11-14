<template>
  <div class="flex h-full">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500 projTitlefadein">
          My Projects
        </h1>
      </div>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 grid-flow-row w-full xl:gap-x-8 gap-x-2 mt-4">
        <div v-for="i in projects" :key="i.id">
          <div class="projfadein max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-2">
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold">
                {{ i.title }}
              </h2>
              <p class="mt-2 text-gray-600">
                {{ i.desc }}
              </p>
            </div>
            <div class="flex justify-end mt-4 space-x-6">
              <a v-if="i.to2" :href="i.to2" target="_blank"><v-mdi name="mdi-earth" size="32" /></a>
              <a v-if="i.to" :href="i.to" target="_blank"><v-mdi name="mdi-github" size="32" /></a>
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
      projects: [
        {
          id: 1,
          title: 'oturna (Private)',
          desc: 'A tournament manager for rhythm game, osu!',
          to: '',
          to2: 'https://omthpl.varkaria.tech'
        },
        {
          id: 2,
          title: 'guweb',
          desc: 'Front-facing appearance of the osu! server protocol',
          to: 'https://github.com/Varkaria/guweb/',
          to2: 'https://akatsuki.pw'
        },
        {
          id: 3,
          title: 'Holotranslator',
          desc: 'Live Japanese speech to text translator using python',
          to: 'https://github.com/Gusb3ll/Holotranslator',
          to2: ''
        },
        {
          id: 4,
          title: 'EulerBot',
          desc: 'A bot for mathmetic POSN discord server using discord.py',
          to: 'https://github.com/Gusb3ll/Euler-bot',
          to2: ''
        },
        {
          id: 5,
          title: 'osu!Tailwind',
          desc: 'Recreation of osu! website using tailwindcss',
          to: 'https://github.com/Gusb3ll/osu-tailwind',
          to2: 'https://tailwind.gusbell.tech'
        },
        {
          id: 6,
          title: 'Kaggle',
          desc: 'Repoistory storing all of my code for Kaggle compeitions',
          to: 'https://github.com/Gusb3ll/Kaggle',
          to2: ''
        }
      ]
    }
  },
  head: {
    title: 'Projects'
  },
  mounted () {
    this.ProjTitleAnimation()
    this.ProjAnimation()
  },
  methods: {
    ProjTitleAnimation () {
      this.$anime({
        targets: '.projTitlefadein',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
    },
    ProjAnimation () {
      this.$anime({
        targets: '.projfadein',
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
