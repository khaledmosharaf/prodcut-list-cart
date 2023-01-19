// initial state
const initialState = {
  cart: [],
  cartFull: false,
  cartEmpty: true,
  itemAlreadyInCart: false,
};

// constants
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

const CLEAR_CART = 'CLEAR_CART';
const SET_RANDOM_PRODUCT_TO_CART = 'SET_RANDOM_PRODUCT_TO_CART';

// action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
export const setRandomProductToCart = () => ({
  type: SET_RANDOM_PRODUCT_TO_CART,
});

// reducer
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      if (state.cart.length < 4) {
        const cartItemIds = state.cart.map((cartItem) => cartItem.id);
        console.log('cartItemIds', cartItemIds);
        if (!cartItemIds.includes(parseInt(payload.id))) {
          return {
            ...state,
            cart: [...state.cart, payload],
            cartEmpty: false,
            itemAlreadyInCart: false,
          };
        } else {
          return { ...state, itemAlreadyInCart: true };
        }
      } else {
        return { ...state, cartFull: true };
      }
    case DELETE_FROM_CART:
      if (state.cart.length > 1) {
        return {
          ...state,
          cart: state.cart.filter(
            (cartItem) => cartItem.id !== parseInt(payload)
          ),
          cartEmpty: false,
          cartFull: false,
          itemAlreadyInCart: false,
        };
      } else {
        return {
          ...state,
          cart: [],
          cartEmpty: true,
          cartFull: false,
          itemAlreadyInCart: false,
        };
      }

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
