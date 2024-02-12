import { useState } from 'react'
import types from "../../../types"
const ProductItem = ({ product, dispatch }) => {
  const [ boton, setBoton ] = useState(0)

  return (
    <article key={product.id} className="flex flex-col gap-4">
            <img  src={product.image} className="w-full object-contain" />
            <div className="flex flex-col gap-1.5 h-full">
              <p className="font-medium text-xl">{product.title}</p>
              <p className="text-gray-500">{product.description}</p>
            </div>

            {boton === 0
             ?  <button onClick={() => {
                                dispatch({type : types.ADD_PRODUCT,payload : product.price})
                                setBoton(boton + 1)
                }} 
                        className="bg-dodgerblue text-white  border-none leading-48 rounded text-lg font-medium cursor-pointer px-16 py-0 mt-auto">
                    Agregar
                </button>
             :   <div className="flex items-center">
                      <button className="flex-grow bg-dodgerblue w-3/6 h-full leading-48 rounded text-4xl font-medium cursor-pointer px-16 py-0 mt-auto text-center"
                              onClick={() => {
                                dispatch({type : types.REMOVE_PRODUCT, payload : product.price})
                                setBoton(boton - 1)
                            } }
                      >
                          -
                      </button>

                      <p className="mx-4 text-2xl">{`(${boton})`}</p>

                      <button className="flex-grow bg-dodgerblue w-3/6 h-full leading-48 rounded text-4xl font-medium cursor-pointer px-16 py-0 mt-auto text-center"
                              onClick={() => {
                                dispatch({type : types.ADD_PRODUCT, payload : product.price})
                                setBoton(boton + 1)
                              } }
                      >
                          +
                      </button>
                  </div> 
            }
          
    </article>
  )
}

export default ProductItem









 /* <div class="flex items-center">
              <button class="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-full mt-auto">
                  Botón 1
              </button>
              <p class="mx-4">p</p>
              <button class="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Botón 2
              </button>
            </div>
          */