import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import callAPI from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAPI, getProductAPI } from '../actions';

function ProductActionPage({history, match,}) {
  const [value, setValue] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    status: ''
  });
  const product = useSelector( state => state.product );
  const dispatch = useDispatch();
  console.log(product);
  
  useEffect(() => {
    if(match) {
        const id = match.params.id;
        dispatch(getProductAPI(id));
    }
  },[])

  const onChange = e => {
    setValue({
        ...value,
        [e.target.name] : e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }
  const onSubmit = e => {
        e.preventDefault()
        
        if(value.id) {
            callAPI('PUT', `products/${value.id}`,value).then(res => {
                history.goBack();
            })
        }else{
            dispatch(addProductAPI(value))
        }
        history.goBack();
    }

  return (
    <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form onSubmit={onSubmit}>
                            <legend>* Vui lòng nhập đầy đủ thông tin</legend>
                            <div className="form-group">
                                <label>Tên Sản Phẩm: </label>
                                <input onChange={onChange} value={value.name} name="name" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mô Tả Sản Phẩm: </label>
                                <textarea onChange={onChange} value={value.description} name="description" className="form-control" rows="3">
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label>Giá: </label>
                                <input onChange={onChange} value={value.price} name="price" type="number" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Tình Trạng: </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input checked={value.status} onChange={onChange} value={value.status} type="checkbox" name="status"  />
                                    Còn Hàng
                                </label>
                            </div>
                            <Link to="/product-list" className="btn btn-danger mr-5">
                                <i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
                            </Link>
                            <button type="submit" className="btn btn-primary">
                                <i className="glyphicon glyphicon-save"></i> Lưu Lại
                            </button>
                        </form>
                    </div>
                </div>
            </div>
  );
}

export default ProductActionPage;