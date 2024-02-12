import ProductsPage from "./components/pages/productsPage/ProductsPage" 
import Carrito from "./components/pages/carrito/Carrito"
import Footer from "./components/pages/footer/Footer"
function App() {
  
  return (
    <main className="flex flex-col justify-between">
      <header className="px-4 py-4 border-b border-solid border-gainsboro font-bold text-2xl">
          Estampitiency
      </header>
      <ProductsPage />
      <Carrito />
      <Footer />
    </main>
  );
}

export default App;
