
export default {
  themeConfig: {
    siteTitle: 'Ânima Docs',
    logo: 'https://logospng.org/download/anima/logo-anima-1024.png',
    footer: {
      message: 'Feito com muito ❤️☕ por Geordani Machado.',
      copyright: 'Copyright © 2022 Ânima Educação'
    },
    nav: [
      { text: 'Home', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Como Editar', link: 'https://github.com/...' },
      { text: 'Azure AD', link: 'https://animaeducacao.com.br'}
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
        
      },
      {
        text: 'Aprendizagem Digital',
        collapsible: true,
        items: [
          { text: 'Aprendizagem Digital', link: '/Ap-digital' },
          { text: 'Planejar', link: '/Planejar' },
          { text: 'Integrar', link: '/404'},
          { text: 'Outras q não sei o nome', link: '/404'}
        ],
        
      },
      {
        text: 'Planejar',
        collapsible: true,
        items: [
          { text: 'Aprendizagem Digital', link: '/Ap-digital' },
          { text: 'Planejar', link: '/Planejar' },
          { text: 'Integrar', link: '/404'},
          { text: 'Outras q não sei o nome', link: '/404'}
        ],
        
      },
      {
        text: 'Avaliar',
        collapsible: true,
        items: [
          { text: 'Aprendizagem Digital', link: '/Ap-digital' },
          { text: 'Planejar', link: '/Planejar' },
          { text: 'Integrar', link: '/404'},
          { text: 'Outras q não sei o nome', link: '/404'}
        ],
        
      }
    ],
   
  }
}

 

  

  