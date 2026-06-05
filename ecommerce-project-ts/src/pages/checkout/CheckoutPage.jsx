import { CheckoutHeader } from "./CheckoutHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import "./CheckoutHeader.css";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";


export function CheckoutPage({ cart ,loadCart }) {
  
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  console.log(cart)
  useEffect(() => {
    const fetchPaymentSummary = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchPaymentSummary();
  }, [cart]);

  useEffect(()=>{
      const fetchDeliveryOptions = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
    };
    fetchDeliveryOptions();
  }, []);
  return (
    <>
      {
        // by link tag you are changing tab icon and by title you are changing text for each page
        //if we set href to a file name vite will look for this file in public folder
      }
      <link rel="icon" type="image/svg+xml" href="images/cart-favicon.png" />
      <title>Checkout</title>
      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions}  loadCart={loadCart}/>
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
