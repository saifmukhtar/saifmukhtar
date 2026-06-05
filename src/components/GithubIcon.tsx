interface GithubIconProps {
  size?: number | string
  className?: string
  color?: string
}

export default function GithubIcon({ size = 24, className = '', color = 'currentColor' }: GithubIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.36-3.71 4.9 4.9 0 0 0-.13-3.66s-1.11-.35-3.65 1.36a12.7 12.7 0 0 0-6.64 0C5.11 1.39 4 1.74 4 1.74a4.9 4.9 0 0 0-.13 3.66A5.2 5.2 0 0 0 2.5 9.1c0 5.23 3 6.42 6 6.76-.4.36-.75.99-.88 1.93-.78.35-2.77 1.2-4-1.15-1.2-2.15-2.3-1.65-2.3-1.65 1.1 0 1.9 1.1 1.9 1.1 1.1 1.8 2.8 1.3 3.5 1 0 1.5.5 2.5 1.2 3.2v4" />
    </svg>
  )
}
