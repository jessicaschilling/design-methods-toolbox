const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '🧰 Design Methods Toolbox',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/jessicaschilling/design-methods-toolbox'
      }
    ],
    sidebar: [
      '/',
      '/phases-sprints',
      {
        title: 'Tools',   // required
        path: '/tools/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          {
            title: 'PROBLEM SEEKING',   // required
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/tools/content-audit',
              '/tools/empathy-interview',
              '/tools/empathy-map',
              '/tools/heuristic-evaluation',
              '/tools/journey-map',
              '/tools/like-wish-what',
              '/tools/mind-map',
              '/tools/personas',
              '/tools/primary-research',
              '/tools/resource-flow',
              '/tools/secondary-research',
              '/tools/sitemap',
              '/tools/use-cases',
            ]
          },
          {
            title: 'PROBLEM SHAPING',   // required
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/tools/brainstorming',
              '/tools/business-model-canvas',
              '/tools/co-creation',
              '/tools/collating-clustering-voting',
              '/tools/crazy-eights',
              '/tools/five-whys',
              '/tools/how-might-we',
              '/tools/insight-statements',
              '/tools/moderated-testing',
              '/tools/principle-definition',
              '/tools/problem-framing-reframing',
              '/tools/scamper',
              '/tools/solution-definition',
              '/tools/storyboard',
            ]
          },
          {
            title: 'PROBLEM SOLVING',   // required
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/tools/a-b-test',
              '/tools/analytics',
              '/tools/card-sorting',
              '/tools/high-fidelity-prototype',
              '/tools/low-fidelity-prototype',
              '/tools/moderated-testing',
              '/tools/sponsor-users',
              '/tools/tree-testing',
              '/tools/unmoderated-testing',
            ]
          },
        ]
      },
      '/further-reading',
      '/about'
    ]
  },

}
