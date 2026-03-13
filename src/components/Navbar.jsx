import React, { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const NavButton = ({ children, onClick, onClose }) => (
  <button
    className="w-full text-left py-3 tracking-widest uppercase hover:text-accent transition"
    onClick={() => {
      onClick?.()
      onClose?.()
    }}
  >
    {children}
  </button>
)

const Navbar = ({ onContactClick, onHeroClick, onAboutClick }) => {
  const [open, setOpen] = useState(false)
  const { cart } = useContext(CartContext)
  const totalItems = cart.reduce((sum, i) => sum + (i.qty || 0), 0)

  const whatsappLink = () => {
    window.open('https://wa.me/6281529457540', '_blank')
  }

  const handleClose = () => setOpen(false)

  return (
    <div className="text-main" id="Navb">
      <nav className="fixed top-0 left-0 right-0 z-50 nav-backdrop border-b border-theme font-bold cursor-default">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-extrabold tracking-widest uppercase">
            <span className="text-highlight">DEVELOP</span>
            <span className="text-accent">COFFEE</span>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            {onHeroClick ? (
              <button className="hover:text-accent transition" onClick={onHeroClick}>Home</button>
            ) : (
              <Link to="/" className="hover:text-accent transition">Home</Link>
            )}

            {onAboutClick ? (
              <button className="hover:text-accent transition" onClick={onAboutClick}>About</button>
            ) : (
              <Link to="/" className="hover:text-accent transition">About</Link>
            )}

            {onContactClick ? (
              <button className="hover:text-accent transition" onClick={onContactClick}>Contact</button>
            ) : (
              <Link to="/" className="hover:text-accent transition">Contact</Link>
            )}

            <Link to="/menu" className="hover:text-accent transition">Menu</Link>
            <Link to="/cart" className="hover:text-accent transition">
              Cart{totalItems > 0 ? ` (${totalItems})` : ''}
            </Link>
          </ul>

          {/* Desktop order button */}
          <div className="hidden md:block">
            <button className="bg-accent px-5 py-2 text-sm font-bold tracking-widest uppercase hover:bg-accent-hover transition border-theme rounded" onClick={whatsappLink}>
              Order Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={handleClose} />
          <aside className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-main p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-extrabold uppercase">
                <span className="text-highlight">DEVELOP</span>
                <span className="text-accent">COFFEE</span>
              </div>
              <button aria-label="Close menu" onClick={handleClose} className="p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {onHeroClick ? (
                <NavButton onClick={onHeroClick} onClose={handleClose}>Home</NavButton>
              ) : (
                <Link to="/" onClick={handleClose} className="py-3 tracking-widest uppercase hover:text-accent">Home</Link>
              )}

              {onAboutClick ? (
                <NavButton onClick={onAboutClick} onClose={handleClose}>About</NavButton>
              ) : (
                <Link to="/" onClick={handleClose} className="py-3 tracking-widest uppercase hover:text-accent">About</Link>
              )}

              {onContactClick ? (
                <NavButton onClick={onContactClick} onClose={handleClose}>Contact</NavButton>
              ) : (
                <Link to="/" onClick={handleClose} className="py-3 tracking-widest uppercase hover:text-accent">Contact</Link>
              )}

              <Link to="/menu" onClick={handleClose} className="py-3 tracking-widest uppercase hover:text-accent">Menu</Link>

              <button onClick={() => { whatsappLink(); handleClose(); }} className="mt-4 bg-accent px-4 py-2 rounded text-sm font-bold uppercase">Order Now</button>
              <Link to="/cart" onClick={handleClose} className="mt-4 py-3 tracking-widest uppercase hover:text-accent">
                Cart{totalItems > 0 ? ` (${totalItems})` : ''}
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Navbar
