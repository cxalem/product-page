import React from "react";
import { useState, useEffect } from "react";

const ProductContext = React.createContext();

const ProductProvider = (props) => {
  //Product Info
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

  const onDelete = (e) => {
    const itemIndex = cartItems.findIndex((item) => item._id === e.target._id);
    const newItem = [...items];
    newItem.splice(itemIndex, 1);
    setCartItems(newItem);
  };

  const addToCart = (product) => {
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
    <ProductContext.Provider value={{
        quantity,
        formatPrice,
        onDelete,
        cartItems,
        setCartItems,
        plus,
        minus,
        items
    }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
