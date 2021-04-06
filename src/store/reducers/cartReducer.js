//reducer: an arror fn that receives state action and
// should return a NEW State

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      var copy = [...state];
      copy.push(action.payload);
      return copy;
    case 'REMOVE_PRODUCT':
      //here
    default:
      return state;
  }
};

export default cartReducer;

