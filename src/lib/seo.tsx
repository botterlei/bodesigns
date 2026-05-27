import { Head } from 'vite-react-ssg'

export type SEOProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

const SITE_NAME = 'Brent Otterlei'
const SITE_URL = 'https://bodesigns.com'
const DEFAULT_DESC =
  'Senior product designer focused on systems thinking, AI, and turning business goals into shipped product.'

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = '/',
  image = `${SITE_URL}/og-default.svg`,
  type = 'website',
}: SEOProps) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Senior Product Designer`
  const canonical = `${SITE_URL}${path}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
