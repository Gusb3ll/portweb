<template>
  <div class="navbar fixed h-15 py-4 w-screen">
    <div class="flex flex-row justify-start justify-start items-center">
      <div>
        <div v-if="navActive">
          <button class="focus:outline-none ml-8 mt-3" @click="navToggle()">
            <img src="~/assets/navtog/tog.svg" alt="">
          </button>
        </div>
        <div v-else>
          <button class="focus:outline-none ml-8 mt-3" @click="navToggle()">
            <img src="~/assets/navtog/tog.svg" alt="">
          </button>
        </div>
        <div class="flex flex-row ml-32 -mt-8 space-x-8">
          <transition name="fade">
            <NuxtLink v-if="navActive" to="/">
              <h1 class="navitems text-xl text-white font-thin">
                Home
              </h1>
            </NuxtLink>
          </transition>
          <transition name="fade">
            <NuxtLink v-if="navActive" to="/profile">
              <h1 class="navitems text-xl text-white font-thin">
                Profile
              </h1>
            </NuxtLink>
          </transition>
          <transition name="fade">
            <NuxtLink v-if="navActive" to="/project">
              <h1 class="navitems text-xl text-white font-thin">
                Projects
              </h1>
            </NuxtLink>
          </transition>
          <transition name="fade">
            <NuxtLink v-if="navActive" to="/certificate">
              <h1 class="navitems text-xl text-white font-thin">
                Certificates
              </h1>
            </NuxtLink>
          </transition>
          <transition name="fade">
            <NuxtLink v-if="navActive" to="/artwork">
              <h1 class="navitems text-xl text-white font-thin">
                Artworks
              </h1>
            </NuxtLink>
          </transition>
          <transition name="fade">
            <NuxtLink v-if="navActive" to="/extra">
              <h1 class="navitems text-xl text-white font-thin">
                Extras
              </h1>
            </NuxtLink>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navActive: false
    }
  },
  mounted () {
    this.handleNav()
  },
  methods: {
    handleNav () {
      this.$anime({
        targets: '.navbar',
        opacity: [0, 1],
        duration: 1000,
        delay: 1000,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.navbar',
        translateX: [-50, 0],
        duration: 500,
        delay: 1000,
        easing: 'easeOutQuint'
      })
    },
    navToggle () {
      this.navActive = !this.navActive
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, transform .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
