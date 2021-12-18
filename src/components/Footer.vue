<template>
  <div class="bg-$body-background">
    <section class="flex flex-col -md:text-center items-center py-4">
      <p>
        Originally designed and coded by
        <a href="https://github.com/tarikcoskun" target="_blank">Tarık Coşkun</a
        >, forked and edited by
        <a href="https://github.com/Toasting-ops" target="_blank"
          >Kaan DOĞANAY</a
        >
      </p>
      <p>
        The source code is available on
        <a href="https://github.com/toasting-ops/website" target="_blank"
          >GitHub</a
        >
      </p>
    </section>
  </div>
</template>

<style scoped>
p {
  @apply text-base;
}

a {
  @apply dark:text-white text-black border-b border-dashed border-transparent hover:(dark:border-white light:border-black) font-semibold;
}
</style>
