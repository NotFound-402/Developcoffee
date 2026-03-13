import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import menuItems from '../data/MenuList.js'
import MenuCard from './CardMenu.jsx'

const Menu = () => {
  const { addToCart } = useContext(CartContext)
  const [search, setSearch] = useState("")

  const getMenuByCategory = (category) =>
    menuItems.filter(
      (item) =>
        item.category === category &&
        item.name.toLowerCase().includes(search.toLowerCase())
    )

  const espressoMenu = getMenuByCategory("Espresso Based")
  const kopiSusuMenu = getMenuByCategory("kopi-susu")
  const nonCoffeeMenu = getMenuByCategory("non-coffee")
  const yakultMenu = getMenuByCategory("yakult")
  const susuMenu = getMenuByCategory("susu")
  const CemilanManisMenu = getMenuByCategory("cemilan")
  const CemilanAsinMenu = getMenuByCategory("cemilan-asin")
  const makananBeratMenu = getMenuByCategory("makanan-berat")
  const addOn = getMenuByCategory("add-on")
    
  return (
    <main className="min-h-screen bg-main text-main pt-28" id="menu-page">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* SEARCH */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="🔍 Cari menu favoritmu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-theme rounded focus:outline-none focus:ring-2 focus:ring-accent transition"
          />
        </div>

        {/* TITLE */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-center mx-auto">Menu Kami</h2>
          <div style={{ width: '64px' }} />
        </div>

        <div className="mb-12 text-center">
          <p className="text-muted max-w-2xl mx-auto">
            Temukan berbagai pilihan kopi spesial kami yang dibuat dengan biji kopi berkualitas tinggi, disajikan dengan penuh cinta untuk memanjakan lidah Anda.
          </p>
        </div>

        {/* ESPRESSO */}
        <h1 className="text-3xl font-bold text-center mb-8">ESPRESSO BASED</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {espressoMenu.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            espressoMenu.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>

        {/* KOPI SUSU */}
        <h1 className="text-3xl font-bold text-center mb-8">KOPI SUSU</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {kopiSusuMenu.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            kopiSusuMenu.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>

        {/* NON COFFEE */}
        <h1 className="text-3xl font-bold text-center mb-8">NON COFFEE</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {nonCoffeeMenu.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            nonCoffeeMenu.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>
        {/* YAKULT */}
        <h1 className="text-3xl font-bold text-center mb-8">YAKULT</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {yakultMenu.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            yakultMenu.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>
        {/* SUSU SUSUAN */}
        <h1 className="text-3xl font-bold text-center mb-8">SUSU SUSUAN</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {susuMenu.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            susuMenu.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>
        {/* CEMILAN MANIS*/}
        <h1 className="text-3xl font-bold text-center mb-8">Cemilan Manis</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {CemilanManisMenu.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            CemilanManisMenu.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>
        {/* CEMILAN ASIN */}
        <h1 className="text-3xl font-bold text-center mb-8">Cemilan Asin</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {CemilanAsinMenu.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            CemilanAsinMenu.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>
        {/* MAKANAN BERAT */}
        <h1 className="text-3xl font-bold text-center mb-8">MAKANAN BERAT</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {makananBeratMenu.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            makananBeratMenu.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>
        {/* ADD-ON */}
        <h1 className="text-3xl font-bold text-center mb-8">ADD-ON</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {addOn.length === 0 ? (
            <p className="text-center text-muted col-span-3">Menu tidak ditemukan</p>
          ) : (
            addOn.map((item, idx) => (
              <MenuCard key={idx} item={item} addToCart={addToCart} />
            ))
          )}
        </div>
        
      </div>
    </main>
  )
}

export default Menu