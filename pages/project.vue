<template>
  <div class="flex h-full">
    <div class="mx-auto mt-16">
      <div class="my-8">
        <h1 class="projTitlefadein text-4xl text-white text-center font-500">
          My Projects
        </h1>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row w-full xl:gap-x-8 gap-x-2 mt-4">
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
          title: 'mempool',
          desc: 'Blockchain explorer for monitoring memorypool of Bitcoin',
          to: 'https://github.com/mempool/mempool',
          to2: 'https://mempool.space/th'
        },
        {
          id: 2,
          title: 'oturna (Private)',
          desc: 'A tournament manager for rhythm game, osu!',
          to: '',
          to2: 'https://omthpl.varkaria.tech'
        },
        {
          id: 3,
          title: 'Kaggle',
          desc: 'Repoistory storing all of my code for Kaggle compeitions',
          to: 'https://github.com/Gusb3ll/Kaggle',
          to2: ''
        },
        {
          id: 4,
          title: 'keqing-stats-prediction',
          desc: 'Status prediction of a character in Genshin Impact',
          to: 'https://github.com/Gusb3ll/keqing-stats-prediction/',
          to2: ''
        },
        {
          id: 5,
          title: 'guweb',
          desc: 'Front-facing appearance of the osu! server protocol',
          to: 'https://github.com/Varkaria/guweb/',
          to2: 'https://akatsuki.pw'
        },
        {
          id: 6,
          title: 'Holotranslator',
          desc: 'Live Japanese speech to text translator using python',
          to: 'https://github.com/Gusb3ll/Holotranslator',
          to2: ''
        },
        {
          id: 7,
          title: 'EulerBot',
          desc: 'A bot for mathmetic POSN discord server using discord.py',
          to: 'https://github.com/Gusb3ll/Euler-bot',
          to2: ''
        },
        {
          id: 8,
          title: 'KanataBot',
          desc: 'A bot for anime image searching plus some feature',
          to: 'https://github.com/Gusb3ll/kanata',
          to2: ''
        },
        {
          id: 9,
          title: 'osu!Tailwind',
          desc: 'Recreation of osu! website using tailwindcss (Discontinued)',
          to: 'https://github.com/Gusb3ll/osu-tailwind',
          to2: 'https://tailwind.gusbell.tech'
        }
      ]
    }
  },
  head: {
    title: 'Projects | Kitpipat Jaritwong'
  },
  mounted () {
    this.ProjAnimation()
  },
  methods: {
    ProjAnimation () {
      this.$anime({
        targets: '.projTitlefadein',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
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
