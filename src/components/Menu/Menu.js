import React from 'react';
import { Route, Link } from 'react-router-dom';

function Menu(props) {
  const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name : 'Quản Lý Sản Phẩm',
        to : '/product-list',
        exact : false
    }
  ]
  const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return(
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? 'active' : '';
          return (
            <li className={`${active}`}>
              <Link to={to} className="my-link">{label}</Link>
            </li>
          )
        }}
      />
    )
  }
  return (
    <nav className="navbar navbar-default">
      <a className="navbar-brand">App</a>
      <ul className="nav navbar-nav">
        {
          menus.map((menu, index) => {
            return (
                <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            )
            })
        }
      </ul>
    </nav>
  );
}

export default Menu;