import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const SEO_TITLE = 'Sanan Ali | Full-Stack & AI Developer'
const SEO_DESCRIPTION =
  'Portfolio of Sanan Ali, a developer building modern web applications, intelligent systems and digital products.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: SEO_TITLE,
      },
      { name: 'description', content: SEO_DESCRIPTION },
      { name: 'theme-color', content: '#100d0b' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: SEO_TITLE },
      { property: 'og:description', content: SEO_DESCRIPTION },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: SEO_TITLE },
      { name: 'twitter:description', content: SEO_DESCRIPTION },
    ],
    links: [],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
