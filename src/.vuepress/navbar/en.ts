import { navbar } from 'vuepress-theme-hope'

export const enNavbar = navbar([
  '/',
  '/demo/',
  {
    text: 'Guide',
    icon: 'lightbulb',
    prefix: '/guide/',
    children: [
      {
        text: 'I am the user',
        icon: 'lightbulb',
        prefix: 'bar/',
        children: ['baz'],
      },
      {
        text: 'I am a developer',
        icon: 'lightbulb',
        prefix: 'foo/',
        children: ['ray'],
      },
    ],
  },
  // {
  //   text: 'V2 Docs',
  //   icon: 'book',
  //   link: 'https://theme-hope.vuejs.press/',
  // },
])
