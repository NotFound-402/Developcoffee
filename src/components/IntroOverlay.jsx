import React, { useEffect, useState } from 'react'

const IntroOverlay = ({ onProceed, playMusic }) => {
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  function handleProceed() {
    setClosing(true)
    // wait for animation to finish, then notify parent
    setTimeout(() => {
      onProceed()
    }, 420)
  }
  return (
    <div className={`intro-overlay fixed inset-0 z-9999 flex items-center justify-center ${closing ? 'closing' : ''}`}>
      <div className={`intro-panel max-w-xl mx-4 p-8 bg-secondary text-main rounded-xl shadow-lg text-center ${!closing ? 'fade-in-up' : ''}`}>
        <h2 className="text-3xl font-bold mb-4">Selamat Datang di Develop Coffee</h2>
        <p className="text-muted mb-6">Nikmati pengalaman kopi kami. Klik tombol di bawah untuk melihat lebih detail.</p>
        <button
          onClick={() => {
            playMusic();
            handleProceed();
          }}
          className="bg-accent px-6 py-3 text-main font-bold rounded hover:bg-accent-hover transition"
        >
          Lihat Lebih Detail
        </button>
      </div>
    </div>
  )
}

export default IntroOverlay
