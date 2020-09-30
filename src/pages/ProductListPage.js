import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem/ProductItem';
import ProductList from '../components/ProductList/ProductList';
import callAPI from '../utils/api';
function ProductListPage(props) {
  
  const [products,setProducts] = useState([])
  
  useEffect(() => {
    callAPI('GET','products',null).then(res => {
      setProducts(res.data)
    })
  },[])
  
  const onDelete = (id) => {
    callAPI('DELETE', `products/${id}`,null).then(res => {
      if(res.status === 200) {
        var index = findIndex(products, id);
         if(index !== -1){
           products.splice(index,1);
           setProducts([...products])
         }
      }
    })
  }
  const findIndex = (products,id) => {
    var result = -1; 
    products.forEach((product, index) => {
      if(product.id === id){
        result = index
      }
    });
    return result;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/product/add" className="btn btn-primary mb-5" style={{marginBottom: 20}}>
            <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
          </Link>
          <ProductList>
            {
              products.map((product, index) => {
                return <ProductItem product={product} key={index} index={index} onDelete={onDelete}/>
              })
            }
          </ProductList>
        </div> 
      </div>
    </div>
  );
}

export default ProductListPage;