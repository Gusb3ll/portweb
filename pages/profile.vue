<template>
  <div class="flex h-screen overflow-y-hidden">
    <div class="m-auto">
      <div class="hidden xl:flex prfadeinx1">
        <div class="flex flex-col items-center space-y-8">
          <div class="space-y-8">
            <img class="rounded-full mt-8" src="https://cdn.discordapp.com/attachments/888349851870429184/907248645643063377/118460003_2610812469185669_2506219395532854182_n.jpg" height="250" width="250">
            <h1 class="text-5xl text-center">
              Hi, Gusbell
            </h1>
          </div>
          <div class="w-175 prfadeinx2">
            <p class="text-left text-lg ml-8 mb-4 font-400">
              I am 17 years old, currently I am studying at Thammasat KhlongLuang
              Withayakhom School.
              <br>
              My dream career is to be a Front-end developer. This is because its
              scope of work is to make sure that the user experience is seamless and
              fuctional while browsing websites. I am interested in both designing and
              coding parts since it challenges me to utilize both arts and IT
              knowledge at the same time!
              <br>
              For the designing part, I am a visually-oriented person who loves
              designing with the influnece of Japanese minimal geometric design. The
              Japanese Minimalism has its own unique characteristics, which is
              well-known and being recognized across the globe. Its design gives me a
              sense of asymmetric, clean, warm, which I can utilize and create new
              templates and patterns endlessly.
              <br>
              Also, the coding development part allows me to translate the beautiful
              designs to the technical IT language, starting from selecting framework
              , coding interfaces, integrating responsive design, debugging software,
              and finally the launch for public users.
            </p>
          </div>
        </div>
      </div>
      <div class="xl:hidden sm:flex prfadein1">
        <div class="flex flex-row items-center space-y-8 space-x-16">
          <div class="space-y-8">
            <img class="rounded-full mt-8" src="https://cdn.discordapp.com/attachments/888349851870429184/907248645643063377/118460003_2610812469185669_2506219395532854182_n.jpg" height="250" width="250">
            <h1 class="text-5xl text-center">
              Hi, Gusbell
            </h1>
          </div>
          <div class="w-175 prfadein2">
            <p class="text-left text-lg ml-8 mb-4">
              I am 17 years old, currently I am studying at Thammasat KhlongLuang
              Withayakhom School.
              <br>
              My dream career is to be a Front-end developer. This is because its
              scope of work is to make sure that the user experience is seamless and
              fuctional while browsing websites. I am interested in both designing and
              coding parts since it challenges me to utilize both arts and IT
              knowledge at the same time!
              <br>
              For the designing part, I am a visually-oriented person who loves
              designing with the influnece of Japanese minimal geometric design. The
              Japanese Minimalism has its own unique characteristics, which is
              well-known and being recognized across the globe. Its design gives me a
              sense of asymmetric, clean, warm, which I can utilize and create new
              templates and patterns endlessly.
              <br>
              Also, the coding development part allows me to translate the beautiful
              designs to the technical IT language, starting from selecting framework
              , coding interfaces, integrating responsive design, debugging software,
              and finally the launch for public users.
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
    title: 'Profile'
  },
  mounted () {
    this.ProfileAnimationXL1()
    this.ProfileAnimationXL2()
    this.ProfileAnimationSM1()
    this.ProfileAnimationSM2()
  },
  methods: {
    ProfileAnimationXL1 () {
      this.$anime({
        targets: '.prfadeinx1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
    },
    ProfileAnimationXL2 () {
      this.$anime({
        targets: '.prfadeinx2',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 120,
        easing: 'easeOutQuint'
      })
    },
    ProfileAnimationSM1 () {
      this.$anime({
        targets: '.prfadein1',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
    },
    ProfileAnimationSM2 () {
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
