import React from 'react';

function ProductList({children}) {
  const table = ['STT', 'Mã SP', 'Tên', 'Mô Tả', 'Giá', 'Trạng Thái', 'Hành Động']
  return (
    <div className="panel panel-success">
      <div className="panel-heading">
        <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
      </div>
      <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                {
                  table.map((name,idx) => (
                    <th key={idx} className="text-center">{name}</th>
                  ))
                }
              </tr>
            </thead>
              <tbody>
                {children}
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default ProductList;