import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";
export function CartItemDetail({ cartItem, deleteCartItem, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const handleUpdate = () => {
    if (!isUpdatingQuantity) {
      setIsUpdatingQuantity(true);
      return;
    } else {
      updateQuantity();
    }
  };
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  const updateQuantity = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity,
    });
    await loadCart();
    setIsUpdatingQuantity(false);
  };
  const handleQuantityKeyDown = (event) => {
    const keyPressed = event.key;
    if (keyPressed === "Enter") {
      updateQuantity();
    } else if (keyPressed === "Escape") {
      setQuantity(cartItem.quantity);
      setIsUpdatingQuantity(false);
    }
  };
  return (
    <>
      <img className="product-image" src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {isUpdatingQuantity ? (
              <input
                type="text"
                className="quantity-input"
                value={quantity}
                onKeyDown={handleQuantityKeyDown}
                onChange={handleQuantityChange}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={handleUpdate}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
