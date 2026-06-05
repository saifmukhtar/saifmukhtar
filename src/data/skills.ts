export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Rust', 'TypeScript', 'Go', 'Python', 'Kotlin', 'Bash', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Android & Mobile',
    skills: ['Jetpack Compose', 'Material Design 3', 'Android Keystore', 'WorkManager', 'Room', 'CameraX', 'Biometric API'],
  },
  {
    category: 'Networking & Security',
    skills: ['WebRTC', 'E2EE', 'Signal Protocol', 'libsignal', 'STUN/TURN', 'WebSocket', 'AGPL', 'Zero-knowledge'],
  },
  {
    category: 'Backend & Infrastructure',
    skills: ['Supabase', 'PostgreSQL', 'Docker', 'Nginx', 'Coturn', 'Ntfy', 'Kong', 'Node.js'],
  },
  {
    category: 'Web & Frontend',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    category: 'Research & Simulation',
    skills: ['Numerical Simulation', 'Graph Theory', 'Causal Networks', 'Physics Engines', 'Data Analysis', 'Blender Pipeline'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub Actions', 'F-Droid', 'Gemini API', 'AI Studio', 'VS Code'],
  },
];
