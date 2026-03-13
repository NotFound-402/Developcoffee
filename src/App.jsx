import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import IntroOverlay from './components/IntroOverlay'
import music from './assets/music.mp3'


import { useRef, useState, useContext } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import MenuPage from './pages/MenuPage'
import CartPage from './pages/CartPage'

// cart context/provider
import { CartProvider, CartContext } from './contexts/CartContext'

function Home() {
  const heroRef = useRef(null)
  const contactRef = useRef(null)
  const aboutRef = useRef(null)
  const [showIntro, setShowIntro] = useState(true)

  function scrollToHero() {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToAbout() {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const audioRef = useRef(null)

  const playMusic = () => {
    audioRef.current.volume = 0.2
    audioRef.current.play().catch(err => {
      console.log('Play error:', err)
    })
  }

  return (
    <>
      <audio ref={audioRef} src={music} preload="auto" loop />
      {showIntro && (
        <IntroOverlay
          onProceed={() => {
            setShowIntro(false)
            scrollToHero()
          }}
          playMusic={playMusic}
        />
      )}
      <Navbar onContactClick={scrollToContact} onHeroClick={scrollToHero} onAboutClick={scrollToAbout} />
      <Hero innerRef={heroRef} />
      <About innerRef={aboutRef} />
      <Contact innerRef={contactRef} />
      <Footer />
    </>
  )
}


// mobile-only action buttons (visible on small screens)
function MobileFloatingButtons() {
  const { cart } = useContext(CartContext)
  const totalItems = cart.reduce((sum, i) => sum + (i.qty || 0), 0)
  return (
    <>
      <div className="fixed bottom-4 left-4 z-50 md:hidden">
        <Link
          to="/cart"
          className="bg-accent px-4 py-2 text-sm font-bold tracking-widest uppercase hover:bg-accent-hover transition border-theme rounded"
        >
          Cart {totalItems > 0 && `(${totalItems})`}
        </Link>
      </div>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Link
          to="/"
          className="bg-accent px-4 py-2 text-sm font-bold tracking-widest uppercase hover:bg-accent-hover transition border-theme rounded"
        >
          Home
        </Link>
      </div>
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <MobileFloatingButtons />
    </CartProvider>
  )
}

export default App
