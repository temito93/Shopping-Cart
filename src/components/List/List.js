import React, { useContext } from "react";
import { ShoppingContext } from "../../store/shopping-context";
import ListItem from "./ListItem";

const List = () => {
  const { item, addItem } = useContext(ShoppingContext);

  const addToCartHandler = (e) => {
    addItem(e);
  };

  return (
    <div className="container">
      {item.map((e) => {
        return (
          <ListItem
            key={e.id}
            title={e.title}
            price={`${e.price}$`}
            onClick={() => addToCartHandler(e)}
          />
        );
      })}
    </div>
  );
};

export default List;
