export const addProduct = (product) => ({
  type: "ADD_PRODUCT",
  product,
});
export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  id,
});