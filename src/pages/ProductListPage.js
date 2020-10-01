import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductsAPI, deleteProductAPI } from '../actions';
import ProductItem from '../components/ProductItem/ProductItem';
import ProductList from '../components/ProductList/ProductList';

function ProductListPage(props) {
  
  const products = useSelector(state => state.products)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProductsAPI());
  },[])
  
  const onDelete = (id) => {
    dispatch(deleteProductAPI(id))
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