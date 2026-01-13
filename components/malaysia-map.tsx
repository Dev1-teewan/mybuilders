export function MalaysiaMap() {
  return (
    <svg viewBox="0 0 800 500" className="w-full max-w-4xl h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow nodes */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(74, 222, 128)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="rgb(45, 212, 191)" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Peninsular Malaysia - Simplified outline */}
      <path
        d="M180 120 L220 100 L280 95 L320 110 L340 150 L330 200 L340 260 L350 320 L340 380 L310 400 L260 395 L220 370 L200 320 L180 260 L170 200 L180 120 Z"
        stroke="url(#mapGradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        className="opacity-60"
      />

      {/* East Malaysia (Sabah & Sarawak) - Simplified outline */}
      <path
        d="M450 180 L520 160 L600 150 L680 170 L720 200 L700 250 L680 280 L620 300 L550 290 L480 270 L450 230 L450 180 Z"
        stroke="url(#mapGradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        className="opacity-60"
      />

      {/* Network nodes - Major cities */}
      {/* Kuala Lumpur */}
      <circle cx="260" cy="280" r="6" fill="rgb(74, 222, 128)" filter="url(#glow)" className="animate-pulse" />
      <circle cx="260" cy="280" r="12" stroke="rgb(74, 222, 128)" strokeWidth="1" fill="none" className="opacity-40" />

      {/* Penang */}
      <circle cx="210" cy="160" r="4" fill="rgb(74, 222, 128)" filter="url(#glow)" />

      {/* Johor Bahru */}
      <circle cx="310" cy="380" r="4" fill="rgb(74, 222, 128)" filter="url(#glow)" />

      {/* Kuching */}
      <circle cx="500" cy="260" r="4" fill="rgb(74, 222, 128)" filter="url(#glow)" />

      {/* Kota Kinabalu */}
      <circle cx="650" cy="190" r="4" fill="rgb(74, 222, 128)" filter="url(#glow)" />

      {/* Network connections */}
      <path
        d="M260 280 L210 160 M260 280 L310 380 M260 280 L500 260 M500 260 L650 190"
        stroke="rgb(74, 222, 128)"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        className="opacity-30"
      />

      {/* Decorative floating particles */}
      <circle cx="180" cy="200" r="2" fill="rgb(74, 222, 128)" className="opacity-40 animate-pulse" />
      <circle cx="350" cy="150" r="2" fill="rgb(74, 222, 128)" className="opacity-40 animate-pulse" />
      <circle cx="580" cy="220" r="2" fill="rgb(74, 222, 128)" className="opacity-40 animate-pulse" />
      <circle cx="400" cy="300" r="2" fill="rgb(74, 222, 128)" className="opacity-40 animate-pulse" />
    </svg>
  )
}
