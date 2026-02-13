'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function PhotoAlbum({ images }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="px-4 py-6 max-w-md mx-auto">
      {/* Counter */}
      <div className="text-center mb-3">
        <span className="text-xs text-pink-400 bg-white/50 px-3 py-1 rounded-full">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="rounded-2xl overflow-hidden shadow-lg"
        style={{
          '--swiper-pagination-color': '#FF6B95',
          '--swiper-pagination-bullet-inactive-color': '#FFACC7',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[4/5] bg-pastel-cream rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swipe hint */}
      <p className="text-center text-xs text-pink-300 mt-3">
        ← Vuốt để xem thêm →
      </p>
    </section>
  )
}
