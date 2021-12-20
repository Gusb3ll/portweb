<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div class="hidden xl:flex prfadeinx1 overflow-y-hidden overflow-x-hidden">
        <div class="flex flex-col items-center space-y-8">
          <div class="space-y-8">
            <img class="rounded-full mt-8" src="https://cdn.discordapp.com/attachments/888349851870429184/907248645643063377/118460003_2610812469185669_2506219395532854182_n.jpg" height="250" width="250">
            <h1 class="text-5xl text-white text-center">
              About me
            </h1>
          </div>
          <div class="w-175 prfadeinx2">
            <p class="text-left text-white text-2xl ml-8 mb-4 font-400">
              Hello! I am Kitpipat Jaritwong, 17 years old student from Thammasat KhlongLuang Withayakhom School / Thailand.
              <br>
              <br>
              I really love programming & designing because I love to create things that make a difference in the world.
              <br>
              There're many projects I have been working on, but I'm most interested in the web development.
              <br>
              Also I like to play games as well such as osu!, Apex Legends, and more. I also like to reading books and watch movies.
              <br>
              <br>
              I hope you enjoy surfing through my website, see you again later!
            </p>
          </div>
        </div>
      </div>
      <div class="hidden xl:hidden md:flex prfadein1 overflow-y-hidden overflow-x-hidden">
        <div class="flex flex-row items-center space-y-8 space-x-16">
          <div class="space-y-8">
            <img class="rounded-full mt-8" src="https://cdn.discordapp.com/attachments/888349851870429184/907248645643063377/118460003_2610812469185669_2506219395532854182_n.jpg" height="250" width="250">
            <h1 class="text-5xl text-white text-center">
              About me
            </h1>
          </div>
          <div class="w-175 prfadein2">
            <p class="text-left text-white text-2xl ml-8 mb-4">
              Hello! I am Kitpipat Jaritwong, 17 years old student from Thammasat KhlongLuang Withayakhom School / Thailand.
              <br>
              <br>
              I really love programming & designing because I love to create things that make a difference in the world.
              <br>
              There're many projects I have been working on, but I'm most interested in the web development.
              <br>
              Also I like to play games as well such as osu!, Apex Legends, and more. I also like to reading books and watch movies.
              <br>
              <br>
              I hope you enjoy surfing through my website, see you again later!
            </p>
          </div>
        </div>
      </div>
      <div class="xl:hidden md:hidden sm:flex prfadein1 overflow-y-hidden overflow-x-hidden">
        <div class="flex flex-col items-center space-y-8">
          <div class="space-y-8">
            <img class="rounded-full mt-8" src="https://cdn.discordapp.com/attachments/888349851870429184/907248645643063377/118460003_2610812469185669_2506219395532854182_n.jpg" height="250" width="250">
            <h1 class="text-5xl text-white text-center">
              About me
            </h1>
          </div>
          <div class="prfadein2">
            <p class="text-left text-white text-2xl ml-8 mb-4">
              Hello! I am Kitpipat Jaritwong, 17 years old student from Thammasat KhlongLuang Withayakhom School / Thailand.
              <br>
              <br>
              I really love programming & designing because I love to create things that make a difference in the world.
              <br>
              There're many projects I have been working on, but I'm most interested in the web development.
              <br>
              Also I like to play games as well such as osu!, Apex Legends, and more. I also like to reading books and watch movies.
              <br>
              <br>
              I hope you enjoy surfing through my website, see you again later!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Profile | Kitpipat Jaritwong'
  },
  mounted () {
    this.ProfileAnimation()
  },
  methods: {
    ProfileAnimation () {
      this.$anime({
        targets: '.prfadeinx1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.prfadeinx2',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 120,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.prfadein1',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '.prfadein2',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 775,
        delay: 120,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
