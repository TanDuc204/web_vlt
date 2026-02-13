'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import PhotoAlbum from '@/components/PhotoAlbum'
import LoveLetter from '@/components/LoveLetter'
import ShortWishes from '@/components/ShortWishes'
import CTAButton from '@/components/CTAButton'
import SecretModal from '@/components/SecretModal'
import Footer from '@/components/Footer'
import FloatingHearts from '@/components/FloatingHearts'
import content from './content.json'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSecret, setCurrentSecret] = useState('')
  const [usedSecrets, setUsedSecrets] = useState([])

  const openModal = () => {
    const availableSecrets = content.secretMessages.filter(
      msg => !usedSecrets.includes(msg)
    )
    
    // Reset if all secrets have been shown
    const secretsPool = availableSecrets.length > 0 
      ? availableSecrets 
      : content.secretMessages
    
    if (availableSecrets.length === 0) {
      setUsedSecrets([])
    }
    
    const randomSecret = secretsPool[Math.floor(Math.random() * secretsPool.length)]
    setCurrentSecret(randomSecret)
    setUsedSecrets(prev => [...prev, randomSecret])
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Floating hearts background - subtle */}
      <FloatingHearts />
      
      <div className="relative z-10">
        {/* Header */}
        <Header 
          recipientName={content.recipientName}
          senderName={content.senderName}
          dateLabel={content.dateLabel}
        />

        {/* Photo Album */}
        <PhotoAlbum images={content.albumImages} />

        {/* Love Letter */}
        <LoveLetter letter={content.loveLetter} />

        {/* Short Wishes */}
        <ShortWishes 
          wishes={content.shortWishes}
        />

        {/* CTA Button */}
        <CTAButton 
          text={content.ctaButtonText}
          onClick={openModal}
        />

        {/* Footer */}
        <Footer 
          senderName={content.senderName}
          recipientName={content.recipientName}
          dateLabel={content.dateLabel}
        />
      </div>

      {/* Secret Modal */}
      <SecretModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onAgain={openModal}
        message={currentSecret}
        closeText={content.modalButtonClose}
        againText={content.modalButtonAgain}
      />
    </main>
  )
}
