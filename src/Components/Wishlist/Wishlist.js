<<<<<<< Updated upstream
import React, { useEffect } from "react";
=======
import React, { useEffect } from 'react';
import './Wishlist.scss';
>>>>>>> Stashed changes
import { RxCross1 } from "react-icons/rx";
import CartItem from "../CartItem/CartItem.js";
import { useDispatch, useSelector } from "react-redux";
import "./Wishlist.scss";
<<<<<<< Updated upstream
import { setWishOpen } from "../../Redux/slices/appConfigSlice";


function Wish() {
    const dispatch = useDispatch();
    const { isWishOpen } = useSelector((state) => state.app);
=======
import { setCartOpen } from "../../Redux/slices/appConfigSlice";

const WishlistDialog = ({ open, onClose }) => {
    const dispatch = useDispatch();
>>>>>>> Stashed changes
    const { carts } = useSelector((state) => state.products);

    // CLOSE CART
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const cartElement = document.querySelector(".Cart");
            if (cartElement && !cartElement.contains(event.target)) {
<<<<<<< Updated upstream
                dispatch(setWishOpen(false));
=======
                dispatch(setCartOpen(false));
>>>>>>> Stashed changes
            }
        };

        const handlePageUnload = () => {
<<<<<<< Updated upstream
            dispatch(setWishOpen(false));
=======
            dispatch(setCartOpen(false));
>>>>>>> Stashed changes
        };

        document.addEventListener("mousedown", handleOutsideClick);
        window.addEventListener("beforeunload", handlePageUnload);
    }, []);

    const handleClearCart = () => {
        dispatch({
            type: "ProductSlice/clearCart",
        });
    };

    return (
<<<<<<< Updated upstream
        <>
            <div className={`Cart flex__center ${isWishOpen ? "active" : ""}`}>
                <div className="top__cart-section">
                    <h5>Wishlist</h5>
                    <RxCross1 onClick={() => dispatch(setWishOpen(false))} />
                </div>

                <div className="cart__del-info">
                    <div className="left__info">
                        <p className="p-text">&#10084;&#65039; {carts.length} Items</p>
                    </div>

                    <div className="right__opt">
                        <button
                            onClick={() => handleClearCart()}
                            className="theme-btn-one btn-black-overlay btn_sm"
                        >
                            Clear All
                        </button>
                    </div>
                </div>

                <div className="item__container">
                    {carts.map((product, index) => (
                        <CartItem
                            id={product._id}
                            name={product.name}
                            imgUrl={product.images[0].url}
                            price={product.price}
                            quantity={product.quantity}
                            weight={product.weight}
                        />
                    ))}
                </div>

                <div className="place__order">
                    <h5>Add to Cart</h5>
                </div>
            </div>
        </>
    );
}

export default Wish;

=======
        <div className={`wishlist-dialog ${open ? 'open' : ''}`}>
            <div className="top__cart-section">
                <h5>Your Cart</h5>
                <RxCross1 onClick={() => dispatch(setCartOpen(false))} />
            </div>

            <div className="cart__del-info">
                <div className="left__info">
                    <h5>My Cart</h5>
                    <p className="p-text">{carts.length} Items</p>
                </div>

                <div className="right__opt">
                    <button
                        onClick={() => handleClearCart()}
                        className="theme-btn-one btn-black-overlay btn_sm"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>

            <div className="item__container">
                {carts.map((product, index) => (
                    <CartItem
                        id={product._id}
                        name={product.name}
                        imgUrl={product.images[0].url}
                        price={product.price}
                        quantity={product.quantity}
                        weight={product.weight}
                    />
                ))}
            </div>
        </div>
    );
};

export default WishlistDialog;
>>>>>>> Stashed changes
