//reducer: an arror fn that receives state action and
// should return a NEW State

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      var copy = [...state];
      if (action.payload.product.id != this.copycopy.product.id) {
        copy.push(action.payload);
      } else {
        copy.push(action.payload);
        return copy;
      }

      /**
       *  if this product id (action.payload.product.id) does not exist inside the cart then add id
       * but if it exist (there is a product on the cart with the same product id), then, just increase the quantity of the product in the cart
       */


      // copy.push(action.payload);
      // return copy;
      case 'REMOVE_PRODUCT':
        //here
      default:
        return state;
  }
};

export default cartReducer;