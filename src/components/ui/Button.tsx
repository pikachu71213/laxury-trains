import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  href?: string
}

const variants = {
  primary:
    'bg-gold text-navy hover:bg-gold-light shadow-lg shadow-gold/20',
  secondary:
    'border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
  outline:
    'border border-gold/60 text-gold hover:bg-gold/10',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  href,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm font-sans font-semibold tracking-wide uppercase transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
