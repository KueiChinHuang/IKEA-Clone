export const initialState = {
    cart: [],
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item],
            }
            break;

        default:
            return state;
    }
}

export default reducer;