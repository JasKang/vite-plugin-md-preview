import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-vue-markdown'
import MdPreview from 'vite-plugin-md-preview'

import Shiki from 'markdown-it-shiki'

const config = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    VueJsx(),
    Markdown({
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: 'github-light',
        })
      },
    }),
    MdPreview(),
  ],
})

export default config
