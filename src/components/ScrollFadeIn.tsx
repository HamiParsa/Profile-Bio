'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
  distance?: number
  once?: boolean
  className?: string
  threshold?: number
}

export default function ScrollAppearNoJump({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 40,
  once = true,
  className = '',
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  })

  const getDirection = () => {
    switch (direction) {
      case 'up': return { y: distance, x: 0 }
      case 'down': return { y: -distance, x: 0 }
      case 'left': return { x: distance, y: 0 }
      case 'right': return { x: -distance, y: 0 }
      case 'scale': return { scale: 0.8, x: 0, y: 0 }
      case 'none': return { x: 0, y: 0 }
      default: return { y: distance, x: 0 }
    }
  }

  const initialPosition = getDirection()

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform, opacity',
      }}
      initial={{
        opacity: 0,
        ...initialPosition,
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}