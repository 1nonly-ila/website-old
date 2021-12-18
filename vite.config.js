import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import WindiCSS from "vite-plugin-windicss"

export default defineConfig({
  plugins: [
    Vue(),
    WindiCSS({
      config: {
        darkMode: "media",
        safelist: [
          "bg-[#3178C6]",
          "bg-[#4FC08D]",
          "bg-[#48B0F1]",
          "bg-[#CC6699]"
        ]
      }
    })
  ]
})
