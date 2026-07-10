import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { execSync } from 'child_process'

let commitHash = 'unknown'
try {
  commitHash = execSync('git rev-parse --short HEAD').toString().trim()
} catch (e) {
  console.warn('Could not fetch git commit hash')
}

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }) },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })
  ],
  base: '/',
  define: {
    'import.meta.env.VITE_COMMIT_HASH': JSON.stringify(commitHash)
  },
  build: {
    outDir: 'dist',
  }
})
