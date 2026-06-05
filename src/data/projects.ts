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
  // --- Featured ---
  {
    id: 'enclave',
    name: 'Enclave',
    tagline: 'Sovereign, zero-knowledge private communication.',
    description:
      'A self-hosted communication platform for two people who want complete control over their conversations. Signal-grade end-to-end encryption, WebRTC audio/video, a soft-body physics Presence Engine, and steganographic push notifications — all without a third party.',
    tags: ['Kotlin', 'Android', 'E2EE', 'WebRTC', 'Signal Protocol', 'Self-hosted'],
    language: 'Kotlin',
    license: 'AGPL-3.0',
    links: {
      github: 'https://github.com/saifmukhtar/enclave',
      website: 'https://enclave.saifmukhtar.dev',
    },
    featured: true,
    color: 'var(--accent-peach)',
  },
  {
    id: 'hcsn-rust',
    name: 'HCSN Simulation Engine',
    tagline: 'High-performance emergent physics simulation in Rust.',
    description:
      'The core simulation engine for Hierarchical Causal Structure Networks — a computational framework for emergent spacetime. Written in Rust for zero-cost abstractions and predictable performance across long-running experiments.',
    tags: ['Rust', 'Physics Simulation', 'Systems Programming', 'Research'],
    language: 'Rust',
    license: 'MIT',
    links: {
      github: 'https://github.com/hcsn-theory/hcsn-rust',
      website: 'https://hcsn.tech',
    },
    featured: true,
    color: 'var(--accent-blue)',
  },
  // --- saifmukhtar ---
  {
    id: 'chromacard',
    name: 'ChromaCard',
    tagline: 'A modern multiplayer card game — no Firebase, no tracking.',
    description:
      'A modernized fork of an open-source Uno game rebuilt with Jetpack Compose and Material Design 3. Self-hosted with Supabase, de-Googled, and featuring an AI-powered commentary system via Gemini API.',
    tags: ['Kotlin', 'Jetpack Compose', 'Supabase', 'Material Design 3', 'Gemini API'],
    language: 'Kotlin',
    license: 'MIT',
    links: {
      github: 'https://github.com/saifmukhtar/chromacard',
    },
    featured: false,
    color: 'var(--accent-rose)',
  },
  {
    id: 'date2partner',
    name: 'Date2Partner',
    tagline: 'A dating app powered by Gemini AI.',
    description:
      'An early-stage Android dating application built with the Google AI Studio template and Gemini API integration. Exploring how AI can make human connection feel more intentional.',
    tags: ['Kotlin', 'Android', 'Gemini API', 'AI'],
    language: 'Kotlin',
    links: {
      github: 'https://github.com/saifmukhtar/date2partner',
    },
    featured: false,
    color: 'var(--accent-peach-soft)',
  },
  {
    id: 'hcsn-nexus-personal',
    name: 'HCSN Nexus (Personal)',
    tagline: 'Personal research workspace for HCSN theory.',
    description:
      'A personal mirror/workspace aggregating the full HCSN research stack: simulation engines, theory documentation, visualization tools, and the research website.',
    tags: ['Python', 'Rust', 'TypeScript', 'Research', 'Simulation'],
    language: 'Multi',
    license: 'MIT',
    links: {
      github: 'https://github.com/saifmukhtar/hcsn-nexus',
    },
    featured: false,
    color: 'var(--text-secondary)',
  },
  {
    id: 'valentine',
    name: 'Valentine',
    tagline: 'A small, sentimental web experience.',
    description:
      'A lightweight Vite + JavaScript web application created on Valentine\'s Day 2026. A quiet, personal project — a reminder that not everything needs to scale.',
    tags: ['JavaScript', 'Vite', 'Tailwind CSS'],
    language: 'JavaScript',
    links: {
      github: 'https://github.com/saifmukhtar/valentine',
    },
    featured: false,
    color: 'var(--accent-peach)',
  },
  {
    id: 'saifmukhtar-profile',
    name: 'Saif Mukhtar Profile',
    tagline: 'GitHub profile repository.',
    description: 'The special repository containing my personal GitHub profile README and configuration files.',
    tags: ['Markdown', 'Config'],
    language: 'Markdown',
    links: {
      github: 'https://github.com/saifmukhtar/saifmukhtar',
    },
    featured: false,
    color: 'var(--text-muted)',
  },
  {
    id: 'files',
    name: 'Files',
    tagline: 'Personal file storage and scripts.',
    description: 'A repository for various configuration files, utilities, and scripts.',
    tags: ['Shell', 'Config'],
    language: 'Shell',
    links: {
      github: 'https://github.com/saifmukhtar/files',
    },
    featured: false,
    color: 'var(--text-secondary)',
  },
  // --- hcsn-theory ---
  {
    id: 'hcsn-nexus-core',
    name: 'HCSN Nexus (Core)',
    tagline: 'Core research workspace for HCSN theory.',
    description:
      'The central monorepo aggregating the full HCSN research stack. Spans Python, Rust, TypeScript, and Shell.',
    tags: ['Python', 'Rust', 'TypeScript', 'Research', 'Simulation'],
    language: 'Multi',
    license: 'MIT',
    links: {
      github: 'https://github.com/hcsn-theory/hcsn-nexus',
      website: 'https://hcsn.tech',
    },
    featured: false,
    color: 'var(--accent-blue)',
  },
  {
    id: 'hcsn-theory',
    name: 'HCSN Theory',
    tagline: 'Hierarchical Causal Structure Network theoretical framework.',
    description: 'The core mathematical and theoretical documentation for HCSN: A framework for hypergraph rewriting and emergent physics.',
    tags: ['Theory', 'Physics', 'Mathematics', 'LaTeX'],
    language: 'LaTeX',
    links: {
      github: 'https://github.com/hcsn-theory/hcsn-theory',
    },
    featured: false,
    color: 'var(--accent-rose)',
  },
  {
    id: 'hcsn-website',
    name: 'HCSN Website',
    tagline: 'The official HCSN research portal.',
    description: 'The source code for hcsn.tech, serving as the central hub for HCSN research, publications, and simulation data.',
    tags: ['TypeScript', 'Next.js', 'React'],
    language: 'TypeScript',
    links: {
      github: 'https://github.com/hcsn-theory/hcsn-website',
      website: 'https://hcsn.tech',
    },
    featured: false,
    color: 'var(--accent-peach)',
  },
  {
    id: 'hcsn-viz',
    name: 'HCSN Viz',
    tagline: 'Web-based visualizer for HCSN graphs.',
    description: 'Tools for visualizing complex hypergraph structures and rewrite operations within the HCSN framework.',
    tags: ['HTML', 'JavaScript', 'WebGL', 'Visualization'],
    language: 'HTML',
    links: {
      github: 'https://github.com/hcsn-theory/hcsn-viz',
    },
    featured: false,
    color: 'var(--accent-blue)',
  },
  {
    id: 'hcsn-sim',
    name: 'HCSN Sim (Python)',
    tagline: 'Python reference implementation of the HCSN engine.',
    description: 'A Python-based simulation engine for Hierarchical Causal Structure Networks, primarily used for rapid prototyping and theoretical validation.',
    tags: ['Python', 'Simulation', 'Research'],
    language: 'Python',
    links: {
      github: 'https://github.com/hcsn-theory/hcsn-sim',
    },
    featured: false,
    color: 'var(--accent-rose)',
  },
  {
    id: 'hcsn-gantry',
    name: 'HCSN Gantry',
    tagline: 'Experimental Rust components for HCSN.',
    description: 'An experimental playground and tooling repository for HCSN simulation components written in Rust.',
    tags: ['Rust', 'Tooling', 'Simulation'],
    language: 'Rust',
    links: {
      github: 'https://github.com/hcsn-theory/hcsn-gantry',
    },
    featured: false,
    color: 'var(--accent-peach-soft)',
  },
];
