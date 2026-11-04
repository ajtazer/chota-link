export default defineAppConfig({
  title: 'Chota-Link',
  github: 'https://github.com/ajtazer/chota-link',
  coffee: 'https://sink.cool/coffee',
  twitter: '',
  telegram: '',
  description: 'Minimal short-link tool for quick sharing.',
  image: 'https://s.bihari.xyz/icon.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
