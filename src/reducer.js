export const initialState = {
    cart: [],
};

// Selector
export const getCartTotal = (cart) =>
    cart?.reduce((total, item) => total + item.price, 0);

export const getQty = (cart, pid) => {
    const pIndex = cart.findIndex((p => p.pid == pid));
    return cart[pIndex].qty;
}


const reducer = (state, action) => {
    console.log(state, action)

    switch(action.type) {
        // case "ADD_TO_CART":
        //     return {
        //         ...state,
        //         cart: [...state.cart, action.item],
        //     }
        case "ADD_TO_CART":            
            const pIndex = state.cart.findIndex((p => p.pid === action.item.pid)); 
            if (pIndex === -1) {
                return {
                    ...state,
                    cart: [...state.cart, {...action.item, qty: 1}],
                }
            }
        
        case "REMOVE_FROM_CART":
            return { 
                ...state, 
                cart: state.cart.filter(item => item.pid !== action.pid)
            }

        case "ADD_QTY":
            const pIndex2 = state.cart.findIndex((p => p.pid === action.pid)); 
            if (pIndex2 >= 0) {
                console.log("Add qty")
                 return {
                     ...state,
                     cart: state.cart.map((item, i) => 
                        pIndex2 === i 
                        ? { ...item, qty: item.qty + 1 }  
                        : item 
                 )
               }}

        case "MINUS_QTY":
            const pIndex3 = state.cart.findIndex((p => p.pid === action.pid)); 
            if (pIndex3 >= 0 && state.cart[pIndex3].qty > 0) {
                console.log("Minud qty")
                 return {
                     ...state,
                     cart: state.cart.map((item, i) => 
                        pIndex3 === i 
                        ? { ...item, qty: item.qty - 1 }  
                        : item 
                 )
               }} 


        default:
            return state;
    }
}

export default reducer;