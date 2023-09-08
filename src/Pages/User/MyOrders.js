import React, { Fragment, useState } from "react";
import "./MyOrder.scss";
import SideBar from "./Sidebar";

const ProductList = ({ history }) => {

  const [orders, setOrders] = useState([
    {
      id: 1,
      category: 'All Orders',
      datePlaced: '2023-09-01',
      totalPrice: '$50.00',
      shippedTo: 'John Doe',
      status: 'Delivered',
      deliveredDate: '2023-09-10',
      productName: 'Product 1',
      productImage: 'product1.jpg',
    },
    {
      id: 2,
      category: 'Not Yet Shipped',
      datePlaced: '2023-09-02',
      totalPrice: '$30.00',
      shippedTo: 'Jane Smith',
      status: 'Pending',
      deliveredDate: null,
      productName: 'Product 2',
      productImage: 'product2.jpg',
    },
    // Add more orders as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All Orders');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = orders.filter((order) => {
    if (selectedCategory === 'All Orders' || order.category === selectedCategory) {
      return order.productName.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">My Orders</h1>
          <div className="order-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search Orders"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="order-categories">
              <button
                className={selectedCategory === 'All Orders' ? 'active' : ''}
                onClick={() => handleCategoryChange('All Orders')}
              >
                All Orders
              </button>
              <button
                className={selectedCategory === 'Not Yet Shipped' ? 'active' : ''}
                onClick={() => handleCategoryChange('Not Yet Shipped')}
              >
                Not Yet Shipped
              </button>
              <button
                className={selectedCategory === 'Cancelled Orders' ? 'active' : ''}
                onClick={() => handleCategoryChange('Cancelled Orders')}
              >
                Cancelled Orders
              </button>
            </div>
            <hr />
            <div className="order-list">
              {filteredOrders.map((order) => (
                <div key={order.id} className="order-item">
                  <div className="order-details">
                    <div className="order-info">
                      <p>Order Placed: {order.datePlaced}</p>
                      <p>Total Price: {order.totalPrice}</p>
                      <p>Shipped To: {order.shippedTo}</p>
                    </div>
                    <div className="order-status">
                      <p>Status: {order.status}</p>
                      {order.status === 'Delivered' && (
                        <p>Delivered on: {order.deliveredDate}</p>
                      )}
                    </div>
                  </div>
                  <div className="product-details">
                    <img src={order.productImage} alt={order.productName} />
                    <p>{order.productName}</p>
                    <button>View Your Item</button>
                  </div>
                  <div className="order-actions">
                    <button>Track Package</button>
                    <button>Return/Replace Items</button>
                    <button>View Invoice</button>
                    <button>Write a Product Review</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
