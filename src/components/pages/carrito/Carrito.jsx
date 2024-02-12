import { useProductContext } from "../../../context/Products"

const Carrito = () => {

  const { cantidad, price } = useProductContext()
  
  return (
    <aside className="sticky bottom-0 m-auto pb-4">
        <button className="bg-dodgerblue text-white  border-none leading-48 rounded text-lg font-medium cursor-pointer px-16 py-0 shadow-3xl">Productos: {cantidad} (total: ${price})</button>
    </aside>
  )
}

export default Carrito