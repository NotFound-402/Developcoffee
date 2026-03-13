import useInView from '../hooks/useInView'

const MenuCard = ({ item, addToCart }) => {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`bg-secondary border border-theme p-6 rounded-xl shadow-lg transform transition-all duration-700
      hover:-translate-y-2 hover:shadow-2xl
      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h3 className="text-xl font-bold">{item.name}</h3>

      <p className="text-muted mt-2">{item.desc}</p>

      <p className="mt-2 font-bold">
        Rp {item.price.toLocaleString('id-ID')}
      </p>

      <button
        onClick={() => addToCart(item)}
        className="mt-4 bg-accent px-4 py-2 text-sm font-bold tracking-widest uppercase
        hover:bg-accent-hover transition border-theme rounded active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default MenuCard