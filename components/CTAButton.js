'use client'

export default function CTAButton({ text, onClick }) {
  return (
    <section className="px-4 py-8 text-center">
      <button
        onClick={onClick}
        className="btn-shine bg-gradient-to-r from-pink-400 to-rose-400 text-white 
          px-8 py-4 rounded-full text-sm font-semibold shadow-lg
          hover:shadow-xl hover:scale-105 active:scale-95
          transition-all duration-300 ease-out
          focus:outline-none focus:ring-4 focus:ring-pink-200"
      >
        {text}
      </button>
      
      {/* Hint text */}
      <p className="text-pink-300 text-xs mt-3">
        ↑ Bấm vào đây nha bé ↑
      </p>
    </section>
  )
}
