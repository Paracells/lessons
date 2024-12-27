import {defineConfig} from 'vitepress'
// import {generateRoutes} from '../lessons-routing'
import {generateRoutes} from '../roadmap-routing'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: generateRoutes(),

    socialLinks: [
      {icon: 'github', link: 'https://github.com/KFalcon2022/lessons'}
    ],
    search: {
      provider: "local"
    },
  },
  base: "/lessons/",
  srcDir: "../lessons"
})
