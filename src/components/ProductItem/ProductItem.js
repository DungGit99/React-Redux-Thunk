import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({product, index, onDelete}) {
  const statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
  const statusClass = product.status ? 'success' : 'default';
  const handleDelete= id => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      onDelete(id);
    }
  }
  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td> 
      <td>{product.description}</td>
      <td>{product.price}đ</td>
      <td>
        <span className={`label label-${statusClass}`}>
          {statusName}
        </span>
      </td>
      <td>
        <Link to={`/product/${product.id}/update`} className="btn btn-warning mr-5" style={{marginRight: 10}} >
          <i className="glyphicon glyphicon-edit"></i> Sửa
        </Link>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(product.id) } >
          <i className="glyphicon glyphicon-trash"></i> Xóa
        </button>
      </td>
  </tr>
  );
}

export default ProductItem;