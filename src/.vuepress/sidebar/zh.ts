import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/i18n/zh/': [
    {
      text: '功能与演示',
      icon: 'laptop-code',
      prefix: 'demo/',
      link: 'demo/',
      children: 'structure',
    },
    {
      text: '使用指南',
      icon: 'book',
      prefix: 'guide/',
      children: ['user/', 'developer/'],
    },
  ],
})
