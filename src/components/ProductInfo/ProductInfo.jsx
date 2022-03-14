import React, { useRef, useState } from "react";
import { Cart } from "SVGComponents/Cart";
import { Minus } from "SVGComponents/Minus";
import { Plus } from "SVGComponents/Plus";
import infoStyles from "./ProductInfo.module.css";

const ProductInfo = ({ products }) => {
  const [items, setItems] = useState(0);
  const plus = useRef();
  const minus = useRef();

  const itemQuantity = (e) => {
    if (e.target === minus.current){
      if(items > 0) {
        setItems(items - 1);
      }
    } else if (e.target === plus.current) {
      setItems(items + 1);
    }
  };

  const btnClick = () => {
    if (items !=0 ){
    console.log('click')
  } else {return}
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <>
      {products.map((product) => {
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
              <div onClick={itemQuantity} className={infoStyles.quatityCotnainer}>
                <div ref={minus} className={infoStyles.minus}>
                  <Minus />
                </div>
                <span className={infoStyles.quantity}>{items}</span>
                <div ref={plus} className={infoStyles.plus}>
                  <Plus />
                </div>
              </div>

              <button onClick={btnClick} className={items != 0 ? infoStyles.addToCartBtn : infoStyles.disabled}>
                <Cart viewBox="0 0 25 20" width="20px" height="15px" fill="white" />Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { ProductInfo };
