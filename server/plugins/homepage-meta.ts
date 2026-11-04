// Upstream renders the app client-side only (`ssr: false`), so the homepage's
// HTML shell has no <title> or link-preview tags for crawlers that don't run
// JavaScript (WhatsApp, Discord, Slack, X). Add the basics from app.config.
// Only "/" is touched: short links can carry their own preview tags.
// Lives in its own file so merges from upstream never conflict with it.

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    if (getRequestURL(event).pathname !== '/')
      return

    const { title, description, image } = useAppConfig()
    html.head.push(
      `<title>${escapeHtml(title)}</title>`,
      `<meta name="description" content="${escapeHtml(description)}">`,
      `<meta property="og:type" content="website">`,
      `<meta property="og:title" content="${escapeHtml(title)}">`,
      `<meta property="og:description" content="${escapeHtml(description)}">`,
      `<meta property="og:image" content="${escapeHtml(image)}">`,
      `<meta name="twitter:card" content="summary">`,
    )
  })
})
