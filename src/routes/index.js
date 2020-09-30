import React from 'react';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotPage';
import ProductListPage from '../pages/ProductListPage'
import ProductActionPage from '../pages/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history} /> // history để chuyển trang
    },
    {
        path: '/product/:id/update',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>// match để lấy tham số trên url
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;