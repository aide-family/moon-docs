import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/i18n/zh/': [
    'quick-start/',
    {
      text: '功能说明',
      icon: 'rongqi',
      prefix: 'feature/',
      // link: 'feature/',
      children: 'structure',
    },
    {
      text: '功能与演示',
      icon: 'suanfayanshi_mianxing',
      prefix: 'demo/',
      // link: 'demo/',
      children: 'structure',
    },
    {
      text: '使用指南',
      icon: 'zhinan',
      prefix: 'guide/',
      children: ['user/', 'developer/'],
    },
    {
      text: '子服务',
      icon: 'hot',
      prefix: 'server/',
      // link: 'demo/',
      children: ['', 'agent/', 'kubemoon/'],
    },
  ],
})
