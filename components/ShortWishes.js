'use client'

import { useEffect, useRef, useState } from 'react'

export default function ShortWishes({ wishes }) {
  const [visibleItems, setVisibleItems] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = containerRef.current?.querySelectorAll('[data-index]')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="px-4 py-6 max-w-md mx-auto">
      {/* Section title */}
      <div className="text-center mb-6">
        <span className="text-pink-300 text-xs">✨ Những điều anh muốn nói ✨</span>
      </div>

      {/* Wishes stack */}
      <div className="space-y-3">
        {wishes.map((wish, index) => (
          <div
            key={index}
            data-index={index}
            className={`bg-white/70 rounded-xl p-4 shadow-sm border border-pink-100 
              transition-all duration-500 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-[-20px]'
              }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <p className="text-gray-700 text-sm flex items-start gap-2">
              <span className="text-pink-400 flex-shrink-0">♡</span>
              {wish}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
