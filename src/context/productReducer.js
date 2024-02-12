import types from "../types"
const reducer = (state,action) => {
   
        switch (action.type) {
            case types.GET_PRODUCTS:
                return { ...state, products: action.payload }
    
            case types.ADD_PRODUCT:
                return {...state, cantidad : state.cantidad + 1, price : state.price + action.payload}
    
            case types.REMOVE_PRODUCT:
                return {...state,cantidad : state.cantidad - 1, price : state.price - action.payload}
    
            default: return state
        }
}

export default reducer