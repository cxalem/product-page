import { ProductContext } from "components/ProductContext/ProductContext";
import React, { useRef, useState } from "react";
import { Cart } from "SVGComponents/Cart";
import { Minus } from "SVGComponents/Minus";
import { Plus } from "SVGComponents/Plus";
import infoStyles from "./ProductInfo.module.css";

const ProductInfo = ({ products }) => {
  const { setCartItems, formatPrice, quantity, plus, minus, items, setQuantity } = React.useContext(ProductContext)

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
            setQuantity(0)
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
          </div>
        );
      })}
    </>
  );
};

export { ProductInfo };
