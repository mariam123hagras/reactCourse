
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetail } from "./CartItemDetail";
import { DeliveryDate } from "./DeliveryDate";
export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
              />

              <div className="cart-item-details-grid">
                <CartItemDetail cartItem={cartItem} />

                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
