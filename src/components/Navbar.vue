<template>
  <nav class="sticky top-0 py-4 z-10 -md:px-4">
    <section class="flex justify-between items-center">
      <h1 class="font-semibold text-2xl -md:hidden">Kaan DOĞANAY</h1>
      <ul class="flex items-center gap-6">
        <a href="#about">About</a>
        <a href="#">Projects</a>
      </ul>
    </section>
  </nav>
</template>

<style scoped>
nav {
  @apply backdrop-filter backdrop-blur-lg;
}

@supports not (backdrop-filter: blur(16px)) {
  nav {
    @apply bg-[#18181bf2];
  }
}
</style>
