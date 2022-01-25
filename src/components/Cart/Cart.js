import { useContext } from "react";
import { ShoppingContext } from "../../store/shopping-context";

const Cart = () => {
  const { cartItem, addItem, removeItem } = useContext(ShoppingContext);

  const totalPrice = cartItem.items
    .reduce((a, c) => a + c.price * c.qty, 0)
    .toFixed(2);

  const cartTotal = cartItem.items.reduce((a, c) => a + c.qty, 0);

  const addToCartHandler = (e) => {
    addItem(e);
  };

  const removeCartItem = (e) => {
    removeItem(e);
  };

  return (
    <div className="container w-50 d-flex flex-column justify-content-between">
      <div>Cart {cartTotal} </div>
      {cartItem.items.length === 0 && <div>Cart is empty</div>}
      {cartItem.items.map((element) => (
        <div
          key={element.id}
          className="d-flex justify-content-between align-items-center mt-4"
        >
          <div>{element.title}</div>
          <div>qty: {element.qty}</div>
          <div>{`${element.price}$`}</div>
          <div>
            <button
              onClick={() => addToCartHandler(element)}
              className="btn btn-success"
            >
              +
            </button>
            <button
              onClick={() => removeCartItem(element)}
              className="btn btn-danger"
              style={{ marginLeft: "5px" }}
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div className="mt-5">Total Price: {`${totalPrice}$`}</div>
    </div>
  );
};

export default Cart;
