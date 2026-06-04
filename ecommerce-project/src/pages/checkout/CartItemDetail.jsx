import { formatMoney } from "../../utils/money";
export function CartItemDetail({ cartItem, deleteCartItem }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const switchQuantityUpdateMode = () => {
    setIsUpdatingQuantity(!isUpdatingQuantity);
  }
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
            <input type="text" className="quantity-input" />
            <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary">Update</span>
          <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>Delete</span>
        </div>
      </div>
    </>
  );
}
