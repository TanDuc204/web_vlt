'use client'

export default function Header({ recipientName, senderName, dateLabel }) {
  return (
    <header className="pt-8 pb-6 px-4 text-center">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-2 animate-fade-in">
        Happy Valentine, {recipientName} 💝
      </h1>
      
      {/* Subtitle */}
      <p className="text-sm text-pink-400 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        From {senderName} • {dateLabel}
      </p>
      
      {/* Heart Divider */}
      <div className="heart-divider animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <span className="text-pink-300 text-xs">
          ♡ ♡ ♡
        </span>
      </div>
    </header>
  )
}
