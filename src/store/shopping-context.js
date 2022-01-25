import { createContext, useState } from "react";
import { data } from "../data/data";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [item, setItem] = useState(data);
  const [cartItem, setCartItem] = useState({ items: [], totalAmount: 0 });

  const addItem = (e) => {
    const exist = cartItem.items.find((i) => i.id === e.id);
    if (exist) {
      setCartItem((prev) => {
        return {
          ...prev,
          items: cartItem.items.map((x) =>
            x.id === e.id
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : x
          ),
        };
      });
    } else {
      setCartItem((prev) => {
        return { ...prev, items: [...prev.items, { ...e, qty: 1 }] };
      });
    }
  };

  const removeItem = (e) => {
    const exist = cartItem.items.find((i) => i.id === e.id);
    if (exist.qty === 1) {
      setCartItem((prev) => {
        return { ...prev, items: cartItem.items.filter((x) => x.id !== e.id) };
      });
    } else {
      setCartItem((prev) => {
        return {
          ...prev,
          items: cartItem.items.map((x) =>
            x.id === e.id
              ? {
                  ...exist,
                  qty: exist.qty - 1,
                }
              : x
          ),
        };
      });
    }
  };

  return (
    <ShoppingContext.Provider
      value={{ item, setItem, cartItem, setCartItem, addItem, removeItem }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
