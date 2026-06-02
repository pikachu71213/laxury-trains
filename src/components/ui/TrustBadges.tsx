import { FiClock, FiGlobe, FiShield, FiStar, FiZap } from 'react-icons/fi'
import { trustFeatures } from '../../data/constants'

const iconMap = {
  shield: FiShield,
  fee: FiZap,
  clock: FiClock,
  globe: FiGlobe,
  star: FiStar,
}

interface TrustBadgesProps {
  compact?: boolean
  light?: boolean
}

export function TrustBadges({ compact = false, light = false }: TrustBadgesProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${
        compact ? 'justify-center gap-3' : 'justify-center gap-6 md:gap-8'
      }`}
    >
      {trustFeatures.map(({ label, icon }) => {
        const Icon = iconMap[icon]
        return (
          <div
            key={label}
            className={`flex items-center gap-2 ${
              light ? 'text-white/90' : 'text-navy/80'
            }`}
          >
            <Icon
              className={`shrink-0 ${compact ? 'h-4 w-4' : 'h-5 w-5'} text-gold`}
              aria-hidden
            />
            <span
              className={`font-sans font-medium ${
                compact ? 'text-xs' : 'text-sm'
              }`}
            >
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
