'use client'

import { useState } from 'react'

export default function LoveLetter({ letter }) {
  const [isOpen, setIsOpen] = useState(false)

  // Split letter into paragraphs
  const paragraphs = letter.split('\n\n')

  return (
    <section className="px-4 py-8 max-w-md mx-auto">
      {/* Envelope/Card that can be clicked to open */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer transition-all duration-500 ${
          isOpen ? '' : 'hover:scale-[1.02]'
        }`}
      >
        {/* Closed envelope state */}
        {!isOpen && (
          <div className="letter-card rounded-2xl p-8 shadow-md text-center">
            <div className="text-5xl mb-4 animate-float">💌</div>
            <p className="text-pink-500 font-medium">Bấm để mở thư từ Tấn</p>
            <p className="text-pink-300 text-xs mt-2">✨ Tap to open ✨</p>
          </div>
        )}

        {/* Open letter state */}
        {isOpen && (
          <div className="letter-card rounded-2xl p-6 shadow-md animate-fade-in">
            {/* Letter icon & close hint */}
            <div className="text-center mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">💌</span>
              <span className="text-pink-300 text-xs">(bấm để đóng)</span>
            </div>

            {/* Letter content */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="animate-slide-up"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className="text-right mt-6 text-pink-400 italic text-sm animate-fade-in" style={{ animationDelay: '0.8s' }}>
              — Tấn 💗
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
