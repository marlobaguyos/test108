//reducer: an arror fn that receives state action and
// should return a NEW State

const cartReducer = (state = [], action) => {
  switch (action.type) 
  {
    case 'ADD_PRODUCT':
      var copy = [...state];
      let found = false;
      for (let i = 0; i < copy.length; i++) {
        let item = copy[i];
        if (item.product.id === action.payload.product.id) {
          found = true;
          item.quantity = item.quantity + action.payload.quantity;
        }
      }
      if (!found) {
        copy.push(action.payload);
      }
      return copy;
    case 'REMOVE_PRODUCT':
      //here
      break;
    default:
      return state;
  };
};

export default cartReducer;