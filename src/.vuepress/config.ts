import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  locales: {
    '/i18n/en/': {
      lang: 'en-US',
      title: 'Moon monitors usage documentation',
      description: '',
    },
    '/i18n/zh/': {
      lang: 'zh-CN',
      title: 'Moon监控使用文档',
      description: '',
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
})
