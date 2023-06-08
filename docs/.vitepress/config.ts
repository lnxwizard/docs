import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AlperAkca79",
  base: "docs",
  description: "Documents of my projects",
  themeConfig: {
    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'My Projects', link: '/projects' }
        ]
      },
      {
        text: 'SkyNotepad',
        items: [
          { text: 'What is SkyNotepad', link: '/skynotepad/what-is-skynotepad'},
          { text: 'About SkyNotepad', link: '/skynotepad/about-skynotepad'},
          { text: 'How to Download?', link: '/skynotepad/how-to-download'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AlperAkca79/docs' }
    ]
  }
})