'use client'

import { useEffect, useState } from 'react'

export default function SecretModal({ isOpen, onClose, onAgain, message, closeText, againText }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(onClose, 300)
  }

  if (!isOpen && !isAnimating) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop
        transition-all duration-300 ${isAnimating && isOpen ? 'bg-black/30' : 'bg-transparent'}`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl
          transition-all duration-300 ${
            isAnimating && isOpen 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-90 translate-y-8'
          }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Secret emoji header */}
        <div className="text-center mb-4">
          <span className="text-5xl animate-float inline-block">🎁</span>
        </div>

        {/* Title */}
        <h3 className="text-center text-pink-500 font-bold text-lg mb-4">
          Điều dễ thương cho bé~
        </h3>

        {/* Secret message */}
        <div className="bg-gradient-to-r from-pastel-pink to-pastel-cream rounded-xl p-4 mb-6">
          <p className="text-gray-700 text-center leading-relaxed">
            {message}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onAgain}
            className="w-full bg-gradient-to-r from-pink-300 to-rose-300 text-white 
              py-3 rounded-full font-medium shadow-md
              hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-200"
          >
            {againText}
          </button>
          <button
            onClick={handleClose}
            className="w-full bg-gray-100 text-gray-500 
              py-3 rounded-full font-medium
              hover:bg-gray-200 active:scale-[0.98]
              transition-all duration-200"
          >
            {closeText}
          </button>
        </div>
      </div>
    </div>
  )
}
