import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import CartItem from "../CartItem/CartItem.js";
import { useDispatch, useSelector } from "react-redux";
import "./Wishlist.scss";
import { setWishOpen } from "../../Redux/slices/appConfigSlice";


function Wish() {
    const dispatch = useDispatch();
    const { isWishOpen } = useSelector((state) => state.app);
    const { carts } = useSelector((state) => state.products);

    // CLOSE CART
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const cartElement = document.querySelector(".Cart");
            if (cartElement && !cartElement.contains(event.target)) {
                dispatch(setWishOpen(false));
            }
        };

        const handlePageUnload = () => {
            dispatch(setWishOpen(false));
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

