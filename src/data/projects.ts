export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  language: string;
  license?: string;
  links: {
    github?: string;
    website?: string;
    fdroid?: string;
  };
  featured: boolean;
  color: string; /* CSS color for card accent */
}

export const projects: Project[] = [
  {
    id: 'kinetic',
    name: 'Kinetic',
    tagline: 'The internet\'s first rent-free naming system.',
    description: 'No blockchains. No fees. No renewals. Kinetic uses VDF proof-of-time and cryptographic patience to make .kin domains free for real users while economically destroying squatters. Built in Rust with libp2p DHT routing and split-DNS resolution.',
    tags: ['Rust', 'VDF', 'P2P', 'DNS', 'Cryptography'],
    language: 'Rust',
    license: 'Apache-2.0',
    links: {
      github: 'https://github.com/saifmukhtar/kinetic',
      website: 'https://kinetic.saifmukhtar.dev',
    },
    featured: true,
    color: 'var(--accent-peach)',
  },
  {
    id: 'enclave',
    name: 'Enclave',
    tagline: 'Private messaging with maximum security.',
    description: 'Self-hosted Android app with Signal-grade end-to-end encryption, WebRTC calls, and encrypted media. Built with Kotlin, Supabase, and Docker. Your messages stay yours.',
    tags: ['Kotlin', 'E2EE', 'WebRTC', 'Self-hosted', 'Privacy'],
    language: 'Kotlin',
    license: 'AGPL-3.0',
    links: {
      github: 'https://github.com/saifmukhtar/enclave',
      website: 'https://enclave.saifmukhtar.dev',
    },
    featured: true,
    color: 'var(--accent-blue)',
  },
  {
    id: 'antimatter',
    name: 'Antimatter',
    tagline: 'Control local AI coding agents from your phone.',
    description: 'Android app that bridges to Claude Code, Antigravity, and other local AI agents. Live streams, workspace browsing, encrypted pairing. Code from anywhere.',
    tags: ['Android', 'Python', 'TypeScript', 'AI', 'Mobile'],
    language: 'Kotlin / Python',
    license: 'MIT',
    links: {
      github: 'https://github.com/saifmukhtar/antimatter',
      website: 'https://antimatter.saifmukhtar.dev',
      fdroid: 'https://f-droid.org/packages/dev.saifmukhtar.antimatter/',
    },
    featured: true,
    color: 'var(--accent-rose)',
  },
  {
    id: 'kinetic-client',
    name: 'Kinetic Client',
    tagline: 'Mobile and browser clients for Kinetic.',
    description: 'Flutter mobile app and browser extensions for registering and resolving .kin domains. Rust FFI layer via flutter_rust_bridge for native performance.',
    tags: ['Flutter', 'Rust FFI', 'Mobile', 'Extension'],
    language: 'Dart / Rust',
    license: 'Apache-2.0',
    links: {
      github: 'https://github.com/saifmukhtar/kinetic-client',
    },
    featured: false,
    color: '#2BB7A8',
  },
  {
    id: 'chromacard',
    name: 'Chromacard',
    tagline: 'Classic Uno card game for Android.',
    description: 'Android mobile application that implements the classic card game Uno using Firebase Realtime Database for multiplayer sync.',
    tags: ['Kotlin', 'Android', 'Firebase', 'Game'],
    language: 'Kotlin',
    license: 'MIT',
    links: {
      github: 'https://github.com/saifmukhtar/chromacard',
    },
    featured: true,
    color: 'var(--rose)',
  },
];
