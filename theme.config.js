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
      <meta name="description" content="Bard: Discord読み上げBot" />
      <meta name="og:description" content="Bard: Discord読み上げBot" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.bardbot.net/og.png" />
      <meta name="twitter:site:domain" content="docs.bardbot.net" />
      <meta name="twitter:url" content="https://docs.bardbot.net" />
      <meta name="og:title" content="Bard: Discord読み上げBot ドキュメント" />
      <meta name="og:image" content="https://docs.bardbot.net/og.png" />
      <meta name="apple-mobile-web-app-title" content="Bard-Docs" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: false,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: '',
  footerText: <>MIT {new Date().getFullYear()} © sizumita.</>,
  unstable_faviconGlyph: '👋',
}
