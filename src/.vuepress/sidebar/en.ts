import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/i18n/en/': [
    'quick-start/',
    {
      text: 'Demo',
      icon: 'laptop-code',
      prefix: 'demo/',
      link: 'demo/',
      children: 'structure',
    },
    {
      text: 'operating guide',
      icon: 'book',
      prefix: 'guide/',
      children: ['user/', 'developer/'],
    },
  ],
})
