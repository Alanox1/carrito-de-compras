import { createContext, useEffect, useReducer, useContext } from "react"
import api from "../api";
import reducer from "./productReducer";
import types from "../types";

export const Products = createContext()

const useProductContext = () => {
    return useContext(Products)
}


const ProductsProvider = ({children}) => {
    const initialState = {
        products: [],
        cantidad : 0,
        price : 0,
        cantidadBoton : 0,
      };

      
    const [ state, dispatch ] = useReducer(reducer, initialState)
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const products = await api.list();
            dispatch({ type: types.GET_PRODUCTS, payload: products });
          }
           catch (error) {
             console.log(error)
          }
        };
    
        fetchData();
      }, []);

    return (
        <Products.Provider value={{products : state.products, cantidad : state.cantidad, price : state.price,dispatch, cantidadBoton : state.cantidadBoton}}>
            {children}
        </Products.Provider>
    )
}

export default ProductsProvider

export {
    useProductContext
}
