import React from "react";
import cartStyles from "./CartModal.module.css";
import { Delete } from "SVGComponents/Delete";

const CartModal = ({ cartItems, formatPrice }) => {
  return (
    <>
      {cartItems.map((item) => {
        const discount = formatPrice(item.discount)
        const total = formatPrice(item.discount * item.quantity)
        return (
          <div className={cartStyles.container} key={item._id}>
            <span className={cartStyles.cart}>Cart</span>
            <div className={cartStyles.item}>
              <img src={item.thumb} className={cartStyles.thumb} alt="cart img" />
              <div className={cartStyles.cartInfo}>
                <span className={cartStyles.cartTitle}>{item.title}</span>
                <div className={cartStyles.itemPrice}>
                  <span className={cartStyles.price}>{`${discount} x ${item.quantity} `}</span>
                  <span className={cartStyles.total}>{total}</span>
                </div>
              </div>
              <Delete />
            </div>
            <button className={cartStyles.checkout}>Checkout</button>
          </div>
        );
      })}
    </>
  );
};

export { CartModal };
