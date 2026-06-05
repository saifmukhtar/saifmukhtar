export interface LinkItem {
  id: string;
  label: string;
  handle: string;
  url: string;
  category: 'code' | 'research' | 'social' | 'email';
  color: string;
  icon: string; /* SVG path or platform name */
}

export const links: LinkItem[] = [
  /* ---- Code & Projects ---- */
  {
    id: 'github',
    label: 'GitHub',
    handle: '@saifmukhtar',
    url: 'https://github.com/saifmukhtar',
    category: 'code',
    color: '#2C2018',
    icon: 'github',
  },
  {
    id: 'github-org',
    label: 'GitHub — HCSN Theory',
    handle: '@hcsn-theory',
    url: 'https://github.com/hcsn-theory',
    category: 'code',
    color: '#6B9EB8',
    icon: 'github',
  },
  {
    id: 'gitlab',
    label: 'GitLab',
    handle: '@saifmukhtar',
    url: 'https://gitlab.com/saifmukhtar',
    category: 'code',
    color: '#E8855A',
    icon: 'gitlab',
  },
  {
    id: 'enclave-repo',
    label: 'Enclave — Source',
    handle: 'saifmukhtar/enclave',
    url: 'https://github.com/saifmukhtar/enclave',
    category: 'code',
    color: '#E8855A',
    icon: 'github',
  },

  /* ---- Research & Academic ---- */
  {
    id: 'hcsn-website',
    label: 'HCSN Research',
    handle: 'hcsn.tech',
    url: 'https://hcsn.tech',
    category: 'research',
    color: '#7BAB8C',
    icon: 'globe',
  },
  {
    id: 'orcid',
    label: 'ORCID',
    handle: '0009-0004-1698-5729',
    url: 'https://orcid.org/0009-0004-1698-5729',
    category: 'research',
    color: '#A6CE39',
    icon: 'orcid',
  },
  {
    id: 'researchhub',
    label: 'ResearchHub',
    handle: 'Saif Mukhtar',
    url: 'https://www.researchhub.com/user/saif-mukhtar',
    category: 'research',
    color: '#E8855A',
    icon: 'book',
  },
  {
    id: 'zenodo',
    label: 'Zenodo',
    handle: 'HCSN Research Group',
    url: 'https://zenodo.org/search?q=hcsn',
    category: 'research',
    color: '#1F81C7',
    icon: 'archive',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@hcsn-theory',
    url: 'https://youtube.com/@hcsn-theory',
    category: 'research',
    color: '#FF0000',
    icon: 'youtube',
  },
  {
    id: 'xda',
    label: 'XDA Forums',
    handle: 'saifmukhtar',
    url: 'https://xdaforums.com/m/saifmukhtar.12751052',
    category: 'code',
    color: '#F59F2B',
    icon: 'globe',
  },

  /* ---- Social ---- */
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
    id: 'instagram',
    label: 'Instagram',
    handle: '@saifmukhtar.dev',
    url: 'https://instagram.com/saifmukhtar.dev',
    category: 'social',
    color: '#E1306C',
    icon: 'instagram',
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    handle: '@saifmukhtar_',
    url: 'https://x.com/saifmukhtar_',
    category: 'social',
    color: '#2C2018',
    icon: 'twitter',
  },

  /* ---- Email ---- */
  {
    id: 'email-primary',
    label: 'Email',
    handle: 'saifmukhtar@saifmukhtar.dev',
    url: 'mailto:saifmukhtar@saifmukhtar.dev',
    category: 'email',
    color: '#E8855A',
    icon: 'mail',
  },
  {
    id: 'email-hcsn',
    label: 'Research Email',
    handle: 'saifmukhtar@hcsn.tech',
    url: 'mailto:saifmukhtar@hcsn.tech',
    category: 'email',
    color: '#7BAB8C',
    icon: 'mail',
  },
  {
    id: 'email-gmail',
    label: 'Gmail',
    handle: 'saifmukhtar20@gmail.com',
    url: 'mailto:saifmukhtar20@gmail.com',
    category: 'email',
    color: '#EA4335',
    icon: 'mail',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: 'Send a message',
    url: 'https://wa.me/917644922091',
    category: 'social',
    color: '#25D366',
    icon: 'message-circle',
  },
];
