import {useEffect, useState, useReducer } from "react";

import api from "./api";
import {Product} from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
 
  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  return (
    <main className="flex flex-col justify-between">
      <header className="px-4 py-4 border-b border-solid border-gainsboro font-bold text-2xl">Estampitiency</header>
      <section className="p-4 flex-1 gap-3 grid grid-cols-auto-fill-minmax">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col gap-4">
            <img  src={product.image} className="w-full object-contain" />
            <div className="flex flex-col gap-1.5 h-full">
              <p className="font-medium text-xl">{product.title}</p>
              <p className="text-gray-500">{product.description}</p>
            </div>
            <button className="bg-dodgerblue text-white  border-none leading-48 rounded text-lg font-medium cursor-pointer px-16 py-0 mt-auto">Agregar</button>
          </article>
        ))}
      </section>
      <aside className="sticky bottom-0 m-auto pb-4">
        <button className="bg-dodgerblue text-white  border-none leading-48 rounded text-lg font-medium cursor-pointer px-16 py-0 shadow-md">3 productos (total: $12)</button>
      </aside>
      <footer className="p-4 border-t border-gray-300 border-solid text-center text-gray-500">
        Encontrá la consigna de este ejercicio y otros más{" "}
        <a className="text-black" href="https://github.com/goncy/interview-challenges/tree/main/simple-cart">acá</a>
      </footer>
    </main>
  );
}

export default App;
