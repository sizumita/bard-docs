export default {
  github: 'https://github.com/sizumita/bard-docs',
  docsRepositoryBase: 'https://github.com/sizumita/bard-docs/blob/master',
  titleSuffix: ' – Bard',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Bard</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Discord TTS Bot
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ja" />
      <meta name="description" content="Bard: the discord TTS bot" />
      <meta name="og:description" content="Bard: the discord TTS bot" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.bardbot.net/og.png" />
      <meta name="twitter:site:domain" content="docs.bardbot.net" />
      <meta name="twitter:url" content="https://docs.bardbot.net" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      {/*<meta name="og:image" content="https://nextra.vercel.app/og.png" />*/}
      <meta name="apple-mobile-web-app-title" content="Bard-Docs" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © sizumita.</>,
  unstable_faviconGlyph: '👋',
}
