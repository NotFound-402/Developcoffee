import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

function Cart({ cart: propCart = [] }) {
  const { cart: contextCart = [], removeFromCart, addToCart, clearCart } = useContext(CartContext)
  const cart = contextCart.length ? contextCart : propCart

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      alert("Keranjang kosong!");
      return;
    }

    let message = "Halo Developcoffee,\n\nSaya ingin memesan:\n";
    let total = 0;

    cart.forEach((item) => {
      const subtotal = item.price * item.qty
      message += `- ${item.name} (${item.qty}x) - Rp ${subtotal.toLocaleString("id-ID")}\n`
      total += subtotal
    });

    message += `\nTotal: Rp ${total.toLocaleString("id-ID")}\n\nTerima kasih.`

    const phone = "6281529457540"
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="bg-main min-h-screen pt-28">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-main">Keranjang</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Keranjang kosong.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-secondary p-4 rounded shadow"
                >
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>

                    {/* Penjumlahan */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="bg-gray-700 text-white px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="text-white font-semibold">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gray-700 text-white px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-white font-semibold">
                      Rp {(item.price * item.qty).toLocaleString("id-ID")}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.name, true)}
                      className="text-red-500 hover:text-red-700 text-sm mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right font-bold text-lg text-white">
              Total: Rp {totalPrice.toLocaleString("id-ID")}
            </div>
          </>
        )}

        <div className="mt-8 flex gap-4 flex-wrap">
          <button
            onClick={sendToWhatsApp}
            className="flex-1 bg-accent text-white py-2 rounded hover:bg-accent-hover transition"
          >
            Pesan Sekarang
          </button>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Kosongkan Keranjang
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart