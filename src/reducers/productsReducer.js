// initial state
const initialState = {
  products: null,
  currentProduct: null,
  randomProduct: null,
  searchResults: null,
};

// constants
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
const SET_RANDOM_PRODUCT = 'SET_RANDOM_PRODUCT';

// action creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
export const setCurrentProduct = (id) => ({
  type: SET_CURRENT_PRODUCT,
  payload: id,
});
export const setSearchResults = (searchTerm) => ({
  type: SET_SEARCH_RESULTS,
  payload: searchTerm,
});
export const setRandomProduct = (randomProductId) => ({
  type: SET_RANDOM_PRODUCT,
  payload: randomProductId,
});

// reducer
const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: state.products.filter(
          (product) => product.id === parseInt(payload)
        ),
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: state.products.filter((product) => {
          const indexOfValue = product.title.toLowerCase().indexOf(payload);
          switch (indexOfValue) {
            case -1:
              return false;
            case 0:
              return false;
            default:
              return true;
          }
        }),
      };
    case SET_RANDOM_PRODUCT:
      return {
        ...state,
        randomProduct: state.products.filter(
          (product) => product.id === parseInt(payload)
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
