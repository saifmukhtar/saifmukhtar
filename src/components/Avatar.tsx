/* ---- Avatar component ---- */
const GRAVATAR_HASH = 'eb2a79eb705870858f7a965d555075c8d77f0f0beb8ce020f7e496d2ea31e909'

interface AvatarProps {
  size?: number
  className?: string
}

export default function Avatar({ size = 140, className }: AvatarProps) {
  // Using your Gravatar hash (derived from email — not image content).
  // When you upload a new photo to gravatar.com/saifmukhtar,
  // this URL will automatically serve the new photo with no code change.
  const src = `https://1.gravatar.com/avatar/${GRAVATAR_HASH}?size=${size * 2}&d=mp&r=g`

  return (
    <img
      src={src}
      alt="Saif Mukhtar"
      width={size}
      height={size}
      className={className}
      style={{
        display: 'block',
        objectFit: 'cover',
        width: size,
        height: size,
      }}
      loading="lazy"
    />
  )
}
