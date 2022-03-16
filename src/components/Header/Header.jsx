import React from "react";
import Image from "next/image";
import { Logo } from "SVGComponents/Logo";
import { Cart } from "SVGComponents/Cart";
import headerStyles from "./Header.module.css";
import { ProductContext } from "components/ProductContext/ProductContext";

const Header = () => {
  const { onClickCart, cartItems } = React.useContext(ProductContext)

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <header>
      <nav className={headerStyles.Nav}>
        <div className={headerStyles.column}>
          <Logo />
          <ul className={headerStyles.ul}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={headerStyles.icons}>
          <div onClick={onClickCart} className={headerStyles.cartContainer}>
            {cartItems.length > 0 && <span className={headerStyles.cartQuantity}>{cartItems.length}</span>}
            <Cart className={headerStyles.cart} />
          </div>
          <div className={headerStyles.avatar}>
            <Image
              loader={myLoader}
              src="./img/image-avatar.png"
              alt="Avatar"
              width={40}
              height={40}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
