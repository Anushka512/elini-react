import React from 'react';
import ProductList from './ProductList';
import ShippingAddress from './ShippingAddress';
import PaymentInformation from './PaymentInformation';
import OrderSummary from './OrderSummary';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  return (
    <main className="checkout-page">
      <ProductList />
      <ShippingAddress />
      <PaymentInformation />
      <OrderSummary />
    </main>
  );
};

export default CheckoutPage; 