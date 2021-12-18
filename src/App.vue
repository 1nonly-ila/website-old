<template>
  <main class="m-auto">
    <Navbar></Navbar>
    <div
      class="py-24 -md:(pt-8 pb-16) bg-gradient-to-b from-[#18181B] to-[#0d0d0f] light:(from-white to-[#eadce9c0])">
      <section class="-md:px-4">
        <h1 class="text-5xl font-bold">Kaan DOĞANAY</h1>
        <h2 class="text-2xl text-[#ff7391] font-semibold">
          Front-end Developer
        </h2>
        <p class="my-4.5">
          My name is Kaan and I'm a self-taught front-end developer from
          Turkey
          <br />
          I also know some back-end technologies.
        </p>
        <div class="flex items-center gap-3 pt-3">
          <a
            class="px-6 py-2 bg-$body-background text-black dark:text-white rounded-full shadow-md shadow-black hover:opacity-75"
            href="mailto:ezel.kusdemir@gmail.com"
            >Contact</a
          >
          <a href="https://github.com/Toasting-ops" target="_blank">
            <GetIcon icon="GitHub"></GetIcon>
          </a>
          <a href="https://twitter.com/toasting" target="_blank">
            <GetIcon icon="Twitter"></GetIcon>
          </a>
          <a
            href="https://discord.com/users/460920273064165407"
            target="_blank">
            <GetIcon icon="Discord"></GetIcon>
          </a>
        </div>
      </section>
    </div>
    <div id="about" class="bg-[#eadce930] dark:bg-[#0f0f1170]">
      <section class="grid md:grid-cols-2 py-16 gap-8 -md:px-4">
        <div class="self-center">
          <h1 class="text-3xl font-semibold flex gap-3 items-center">
            About Me
          </h1>
          <p class="my-4">
            I've been in web development since 2021. Since then, I've been
            learning more and more technologies. I mainly use Node.js based
            technologies.
          </p>
          <p>
            Here you can see my favourite technologies, which are the ones I use
            in most of my projects.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div
           v-for="tech of techs"
            class="p-4 bg-[#0000000a] dark:bg-[#e8eaff09] rounded-xl">
            <GetIcon
              tech-logo
              :icon="tech.name"
              :class="`bg-[${tech.color}] bg-opacity-25 rounded-xl`"></GetIcon>
            <h1 class="text-2xl mt-4 mb-1">{{ tech.name }}</h1>
            <p>Since {{ tech.since }}</p>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </main>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import GetIcon from "./components/GetIcon.vue"

/**
 * @type {{name: string; color: string; icon: any; since: number}[]}
 */
const techs = [
  {
    name: "TypeScript",
    color: "#3178C6",
    since: 2021
  },
  {
    name: "Vue",
    color: "#4FC08D",
    since: 2021
  },
  {
    name: "WindiCSS",
    color: "#48B0F1",
    since: 2021
  },
  {
    name: "Sass",
    color: "#CC6699",
    since: 2021
  }
]
</script>
