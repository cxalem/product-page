import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import portalStyles from './CartPortal.module.css'

const CartPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <div className={portalStyles.cartPortalContainer}>
            {children}    
        </div>, 
        document.querySelector("#cartportal"))
    : null;
};

export { CartPortal };
