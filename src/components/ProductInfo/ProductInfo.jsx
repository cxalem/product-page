import { CartModal } from "components/CartModal/CartModal";
import React, { useRef, useState } from "react";
import { Cart } from "SVGComponents/Cart";
import { Minus } from "SVGComponents/Minus";
import { Plus } from "SVGComponents/Plus";
import infoStyles from "./ProductInfo.module.css";

const ProductInfo = ({ products }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  let items = [];

  const minus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const plus = () => {
    setQuantity(quantity + 1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <>
      {products.map((product) => {
        const addToCart = () => {
          if (quantity > 0) {
            const newItem = [...items];
            newItem.push({
              title: product.title,
              discount: product.discount,
              price: product.price,
              thumb: product.images[0].thumb,
              _id: product._id,
              quantity: quantity
            });
            setCartItems(newItem);
          } else {
            return;
          }
        };
        return (
          <div className={infoStyles.infoContainer} key={product._id}>
            <div className={infoStyles.infoHeader}>
              <span className={infoStyles.company}>
                {product.company.toUpperCase()}
              </span>
              <h2 className={infoStyles.title}>{product.title}</h2>
            </div>
            <p className={infoStyles.description}>{product.description}</p>
            <div className={infoStyles.priceContainer}>
              <span className={infoStyles.discount}>
                {formatPrice(product.discount)}
              </span>
              <span className={infoStyles.price}>
                {formatPrice(product.price)}
              </span>
            </div>

            <div className={infoStyles.addToCartContainer}>
              <div className={infoStyles.quatityCotnainer}>
                <div onClick={minus} className={infoStyles.minus}>
                  <Minus />
                </div>
                <span className={infoStyles.quantity}>{quantity}</span>
                <div onClick={plus} className={infoStyles.plus}>
                  <Plus />
                </div>
              </div>

              <button
                onClick={addToCart}
                className={ quantity > 0 ? infoStyles.addToCartBtn : `${infoStyles.addToCartBtn} ${infoStyles
                  .disabled}`
                }
              >
                <Cart viewBox="0 0 25 20" width="20px" height="15px" fill="white" />
                Add to cart
              </button>
            </div>
            <CartModal formatPrice={formatPrice} cartItems={cartItems} />
          </div>
        );
      })}
    </>
  );
};

export { ProductInfo };
