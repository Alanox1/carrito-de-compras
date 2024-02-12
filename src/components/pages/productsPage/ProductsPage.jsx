import { useProductContext } from '../../../context/Products'
import ProductItem from '../productItem/ProductItem'

const ProductsPage = () => {
  const { products, dispatch} = useProductContext()

  return (
    <section className="p-4 flex-1 gap-3 grid grid-cols-auto-fill-minmax">
        {products.map((product) => (
          <ProductItem key={product.id} product={ product } dispatch={ dispatch }/>
        ))}
      </section>
  )
}

export default ProductsPage