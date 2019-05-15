module.exports = {
  dest:'doc-demo',
  base:'./',
  title: '作业帮一课',
  description: '作业帮一课技术沉淀',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide.html' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    sidebar: [
      // ['/guide']
      // {
      //   title: 'fe相关',
      //   collapsable: true,
      //   children: [
      //     ['/fe/']
      //   ]
      // },
    ]
  }
}
