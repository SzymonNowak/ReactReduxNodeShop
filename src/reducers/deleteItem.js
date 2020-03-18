export const deleteNewItem = (state, action) => {
         return {
           ...state,
           products: state.products.filter(
             item => item.id !== action.payload.id
           )
         };
       };
