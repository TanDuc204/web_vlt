'use client'

import { useEffect, useState } from 'react'

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    // Create initial hearts
    const createHeart = () => {
      const id = Date.now() + Math.random()
      const heart = {
        id,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 4,
        size: 10 + Math.random() * 15,
        opacity: 0.1 + Math.random() * 0.2,
      }
      return heart
    }

    // Add initial hearts
    const initialHearts = Array.from({ length: 5 }, createHeart)
    setHearts(initialHearts)

    // Add new hearts periodically (subtle)
    const interval = setInterval(() => {
      setHearts(prev => {
        // Keep only recent hearts (max 8)
        const filtered = prev.slice(-7)
        return [...filtered, createHeart()]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute floating-heart text-pink-200"
          style={{
            left: `${heart.left}%`,
            bottom: '-20px',
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ♡
        </div>
      ))}
    </div>
  )
}
