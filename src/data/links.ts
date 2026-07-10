export interface LinkItem {
  id: string;
  label: string;
  handle: string;
  url: string;
  category: 'code' | 'research' | 'social' | 'email';
  color: string;
  icon: string;
}

export const links: LinkItem[] = [
  /* ---- Code & Projects ---- */
  {
    id: 'github',
    label: 'GitHub',
    handle: 'saifmukhtar',
    url: 'https://github.com/saifmukhtar',
    category: 'code',
    color: '#2C2018',
    icon: 'github',
  },
  {
    id: 'kinetic-repo',
    label: 'Kinetic Protocol',
    handle: 'github.com/saifmukhtar/kinetic',
    url: 'https://github.com/saifmukhtar/kinetic',
    category: 'code',
    color: '#3B82F6',
    icon: 'github',
  },
  {
    id: 'enclave-repo',
    label: 'Enclave',
    handle: 'github.com/saifmukhtar/enclave',
    url: 'https://github.com/saifmukhtar/enclave',
    category: 'code',
    color: '#1E40AF',
    icon: 'github',
  },
  {
    id: 'antimatter-repo',
    label: 'Antimatter',
    handle: 'github.com/saifmukhtar/antimatter',
    url: 'https://github.com/saifmukhtar/antimatter',
    category: 'code',
    color: '#06B6D4',
    icon: 'github',
  },

  /* ---- Research ---- */
  {
    id: 'orcid',
    label: 'ORCID',
    handle: '0000-0002-8193-108X',
    url: 'https://orcid.org/0000-0002-8193-108X',
    category: 'research',
    color: '#A6CE39',
    icon: 'book',
  },
  {
    id: 'kinetic-docs',
    label: 'Kinetic Docs',
    handle: 'kinetic.saifmukhtar.dev',
    url: 'https://kinetic.saifmukhtar.dev',
    category: 'research',
    color: '#3B82F6',
    icon: 'globe',
  },

  /* ---- Social ---- */
  {
    id: 'twitter',
    label: 'X (Twitter)',
    handle: '@saifmukhtar_',
    url: 'https://x.com/saifmukhtar_',
    category: 'social',
    color: '#000000',
    icon: 'twitter',
  },
  {
    id: 'bluesky',
    label: 'Bluesky',
    handle: '@saifmukhtar.bsky.social',
    url: 'https://bsky.app/profile/saifmukhtar.bsky.social',
    category: 'social',
    color: '#0085ff',
    icon: 'globe',
  },
  {
    id: 'mastodon',
    label: 'Mastodon',
    handle: '@saifmukhtar@mastodon.social',
    url: 'https://mastodon.social/@saifmukhtar',
    category: 'social',
    color: '#6364FF',
    icon: 'mastodon',
  },
  {
    id: 'devto',
    label: 'DEV Community',
    handle: 'saifmukhtar',
    url: 'https://dev.to/saifmukhtar',
    category: 'social',
    color: '#000000',
    icon: 'book',
  },
  {
    id: 'hackernews',
    label: 'Hacker News',
    handle: 'saifmukhtar',
    url: 'https://news.ycombinator.com/user?id=saifmukhtar',
    category: 'social',
    color: '#FF6600',
    icon: 'globe',
  },
  {
    id: 'pitchhut',
    label: 'Pitchhut',
    handle: 'saifmukhtar',
    url: 'https://pitchhut.com/user/saifmukhtar',
    category: 'social',
    color: '#000000',
    icon: 'globe',
  },

  /* ---- Email ---- */
  {
    id: 'email-primary',
    label: 'Primary Email',
    handle: 'saifmukhtar20@gmail.com',
    url: 'mailto:saifmukhtar20@gmail.com',
    category: 'email',
    color: '#EA4335',
    icon: 'mail',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: 'saifmukhtar',
    url: 'https://wa.me/saifmukhtar',
    category: 'social',
    color: '#25D366',
    icon: 'message-circle',
  },
];
