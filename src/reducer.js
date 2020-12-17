export const initialState = {
    post: [],
    user: null
  };
  
  // Selector
//   export const getBasketTotal = (basket) => 
//     basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_POST":
        return {
          ...state,
          post: [...state.post, action.item],
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;