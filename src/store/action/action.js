//action: an arror fn that returns an object
//that contain a type(desc) of action, and payload (data)

export const addProductToCart = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};