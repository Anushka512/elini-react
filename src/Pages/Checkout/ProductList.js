
import React from 'react';
import './ProductList.scss';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$10.99',
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$19.99',
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$29.99',
      image: 'product3.jpg',
    },
  ];

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
