'use client'

export default function Footer({ senderName, recipientName, dateLabel }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 px-4 text-center border-t border-pink-100 mt-8">
      {/* Heart decoration */}
      <div className="mb-4">
        <span className="text-pink-200 text-xs">♡ ♡ ♡</span>
      </div>

      {/* Main text */}
      <p className="text-pink-400 text-sm mb-4">
        Made by {senderName} for {recipientName} • {dateLabel}
      </p>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="text-xs text-pink-300 hover:text-pink-500 transition-colors underline underline-offset-2"
      >
        ↑ Về đầu trang
      </button>

      {/* Extra space at bottom for mobile */}
      <div className="h-4"></div>
    </footer>
  )
}
