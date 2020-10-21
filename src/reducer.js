export const initialState = {
    cart: [],
};

// Selector
export const getCartTotal = (cart) =>
    cart?.reduce((total, item) => total + (item.price * item.qty), 0);

export const getProductTotal = (cart, pid) => {
    const pIndex = cart.findIndex((p => p.pid == pid));
    return (cart[pIndex].qty * cart[pIndex].price);
}

export const getQty = (cart, pid) => {
    const pIndex = cart.findIndex((p => p.pid == pid));
    return cart[pIndex].qty;
}

export const getQtyTotal = (cart) =>
    cart?.reduce((total, item) => total + item.qty, 0);


const reducer = (state, action) => {
    console.log(state, action)

    switch(action.type) {
        case "ADD_TO_CART":            
            const pIndex = state.cart.findIndex((p => p.pid === action.item.pid)); 
            if (pIndex === -1) {
                return {
                    ...state,
                    cart: [...state.cart, {...action.item, qty: 1}],
                }
            } else {
                return state;
            }
        
        case "REMOVE_FROM_CART":
            return { 
                ...state, 
                cart: state.cart.filter(item => item.pid !== action.pid)
            }

        case "QTY_MINUS":
            const pIndex3 = state.cart.findIndex((p => p.pid === action.pid)); 
            if (pIndex3 >= 0 && state.cart[pIndex3].qty > 0) {
                return {
                    ...state,
                    cart: state.cart.map((item, i) => 
                        pIndex3 === i 
                        ? { ...item, qty: item.qty - 1 }  
                        : item 
                    )
                }
            } else {
                return state;
            }
    
        case "QTY_ADD":
            const pIndex2 = state.cart.findIndex((p => p.pid === action.pid)); 
            if (pIndex2 >= 0) {
                return {
                    ...state,
                    cart: state.cart.map((item, i) => 
                        pIndex2 === i 
                        ? { ...item, qty: item.qty + 1 }  
                        : item 
                    )
                }
            } else {
                return state;
            }
    
        case "QTY_UPDATE":
            const pIndex4 = state.cart.findIndex((p => p.pid === action.pid));         
            if (pIndex4 >= 0 && !isNaN(action.qty)) {
                return {
                    ...state,
                    cart: state.cart.map((item, i) => 
                        pIndex4 === i 
                        ? { ...item, qty: action.qty }  
                        : item 
                    )
                }
            } else {                
                return {
                    ...state,
                    cart: state.cart.map((item, i) => 
                        pIndex4 === i 
                        ? { ...item, qty: 0 }  
                        : item 
                    )
                }
            }


        default:
            return state;
    }
}

export default reducer;