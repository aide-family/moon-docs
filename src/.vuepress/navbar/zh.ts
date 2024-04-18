import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  '/zh/',
  '/zh/demo/',
  {
    text: '指南',
    icon: 'lightbulb',
    prefix: '/zh/guide/',
    children: [
      {
        text: '我是使用者',
        icon: 'lightbulb',
        prefix: 'bar/',
        children: ['baz'],
      },
      {
        text: '我是开发者',
        icon: 'lightbulb',
        prefix: 'foo/',
        children: ['ray'],
      },
    ],
  },
  // {
  //   text: 'V2 文档',
  //   icon: 'book',
  //   link: 'https://theme-hope.vuejs.press/zh/',
  // },
])
