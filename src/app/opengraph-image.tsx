import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Claude Code Dashboard'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#1a1a2e',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M4 16L8 16L11 8L16 24L20 16L24 16L28 16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}