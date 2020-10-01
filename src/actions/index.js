import callAPI from '../utils/api';
import * as Types from './types';

// fetch products
export const fetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}
export const fetchProductsAPI = () => {
  return (dispatch) => {
    return callAPI('GET','products',null).then(res => {
      dispatch(fetchProducts(res.data))
    })
  }
}
// add product
export const addProduct = (product) => {
  return {
    type: Types.ADD_PRODUCTS,
    product
  }
}
export const addProductAPI = (product) => {
  return (dispatch) => {
    return callAPI('POST','products',product).then(res => {
      dispatch(addProduct(res.data))
    })
  }
}
// delete product
export const deleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCTS,
    id
  }
}
export const deleteProductAPI = (id) => {
  return (dispatch) => {
    return callAPI('DELETE',`products/${id}`,null).then(res => {
      dispatch(deleteProduct(id))
    })
  }
}
// get product for update product page
export const getProduct = (product) => {
  return {
    type: Types.GET_PRODUCT,
    product
  }
}
export const getProductAPI = (id) => {
  return (dispatch) => {
    return callAPI('GET',`/products/${id}`,null).then(res => {
      dispatch(getProduct(res.data))
    })
  }
}

