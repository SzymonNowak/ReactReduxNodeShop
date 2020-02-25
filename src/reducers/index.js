
const initialState = {
  products: [
    {
      id: 1,
      tittle: "number 1",
      count: 1,
      price: 100,
      description: "loraeasdasdsadasdasdasdasdasdasd",
      productPhoto: "none"
    },
    {
      id: 2,
      tittle: "number 2",
      count: 1,
      price: 100,
      description: "loraeasdasdsadasdasdasdasdasdasd",
      productPhoto: "none"
    },
    {
      id: 3,
      tittle: "number 3",
      count: 1,
      price: 100,
      description: "loraeasdasdsadasdasdasdasdasdasd",
      productPhoto: "none"
    },
    {
      id: 4,
      tittle: "number 4",
      count: 1,
      price: 100,
      description: "loraeasdasdsadasdasdasdasdasdasd",
      productPhoto: "none"
    }
  ]
};

const rootReducer = (state = initialState, action) => {

  switch(action.type) {
    case("REMOVE_ITEM"):
    return {
      ...state,
      products: state.products.filter(item => item.id !== action.payload.id)
    };  
    
    default:
      return state;
  }

}


export default rootReducer;