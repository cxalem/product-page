import React from "react";
import cartStyles from "./CartModal.module.css";
import { Delete } from "SVGComponents/Delete";

const CartModal = ({ cartItems, formatPrice, onDelete }) => {
  return (
    <div className={cartStyles.container}>
      <span className={cartStyles.cart}>Cart</span>
      {cartItems.length > 0 ? cartItems.map((item) => {
        const discount = formatPrice(item.discount);
        const total = formatPrice(item.discount * item.quantity);
        return (
          <div className={cartStyles.itemsContainer} key={item._id}>
            <div className={cartStyles.item}>
              <img
                src={item.thumb}
                className={cartStyles.thumb}
                alt="cart img"
              />
              <div className={cartStyles.cartInfo}>
                <span className={cartStyles.cartTitle}>{item.title}</span>
                <div className={cartStyles.itemPrice}>
                  <span
                    className={cartStyles.price}
                  >{`${discount} x ${item.quantity} `}</span>
                  <span className={cartStyles.total}>{total}</span>
                </div>
              </div>
              <div className={cartStyles.delete} onClick={onDelete}>
                <Delete />
              </div>
            </div>
            <button className={cartStyles.checkout}>Checkout</button>
          </div>
        );
      }) : <h3 className={cartStyles.empty}>Your cart is empty</h3>}
    </div>
  );
};

export { CartModal };
