import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const Products = () => {
    return (
        <DashboardLayout>
            <h1 className='text-center'>Products</h1>
        </DashboardLayout>
    );
};

export default Products;

Products.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}