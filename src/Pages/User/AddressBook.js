import React, { Fragment, useState } from "react";
import "./AddressBook.scss";
import SideBar from "./Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CouponList = ({ history }) => {
  const [addresses, setAddresses] = useState([
    {
      name: 'John Doe',
      address: '123 Main St, Apt 4B, City, Country',
      phoneNumber: '555-555-5555',
      isDefault: true,
    },
    {
      name: 'John Doe',
      address: '123 Main St, Apt 4B, City, Country',
      phoneNumber: '555-555-5555',
      isDefault: true,
    },
    // Add more addresses as needed
  ]);

  const [isAddAddressDialogOpen, setIsAddAddressDialogOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    isDefault: false,
  });

  const handleAddAddress = () => {
    setAddresses([...addresses, newAddress]);
    setIsAddAddressDialogOpen(false);
    setNewAddress({ name: '', address: '', phoneNumber: '', isDefault: false });
  };

  const handleEditAddress = (index) => {
    setIsAddAddressDialogOpen(true);
    setNewAddress({
      ...addresses[index], // Load the existing address for editing
    });
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };


  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">Address Book</h1>

          {isAddAddressDialogOpen && (
            <div className="add-address-dialog">
              <div className="close-icon" onClick={() => setIsAddAddressDialogOpen(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <h4>Add New Address</h4>
              <input
                type="text"
                placeholder="Name"
                value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Address"
                value={newAddress.address}
                onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={newAddress.phoneNumber}
                onChange={(e) => setNewAddress({ ...newAddress, phoneNumber: e.target.value })}
              />
              <label>
                Make this my default address
                <input
                  type="checkbox"
                  checked={newAddress.isDefault}
                  onChange={() => setNewAddress({ ...newAddress, isDefault: !newAddress.isDefault })}
                />
              </label>
              <button onClick={handleAddAddress}>Add</button>
            </div>
          )}

          <div className="address-list">
            {addresses.map((address, index) => (
              <div key={index} className="address-item">
                <div>
                  <strong>{address.name}</strong>
                  <p>{address.address}</p>
                  <p>{address.phoneNumber}</p>
                  {address.isDefault && <span className="default-address">(Default)</span>}
                </div>
                <div className="address-options">
                  <button onClick={() => handleEditAddress(index)}>Edit</button>
                  <button onClick={() => handleRemoveAddress(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setIsAddAddressDialogOpen(true)}>Add New Address</button>
        </div>
      </div>
    </Fragment >
  );
};

export default CouponList;
