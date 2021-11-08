<template>
  <div class="flex flex-col h-screen overflow-x-hidden bg-gray-50">
    <NavMain />
    <Nuxt />

    <footer class="footer relative py-1 bottom-1">
      <h1 class="text-gray-500 text-md text-center">
        © 2021 | Kitpipat Jaritwong
      </h1>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  left: 50%;
  transform: translateX(-50%);
}
</style>
