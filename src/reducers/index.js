
const initialState = {
  products: [
    
  ]
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload.id)
      };
    case "ADD_ITEM":
      return {
        ...state,
        products: [...state.products, action.payload.item]
      };

    default:
      return state;
  }

}


export default rootReducer;