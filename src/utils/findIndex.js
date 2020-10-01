export default function findIndex(products, id) {
  var result = -1;
  products.forEach((product, index) => {
    if(product.id === id){
      result = index
    }
  })
  return result;
}