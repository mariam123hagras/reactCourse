import { Route, Routes } from "react-router";
import "./App.css";

import { CheckoutPage } from "../../ecommerce-project/src/pages/checkout/CheckoutPage";
import { OrdersPage } from "../../ecommerce-project/src/pages/orders/OrdersPage";
import { TrackingPage } from "../../ecommerce-project/src/pages/TrackingPage";
import { NotFound } from "../../ecommerce-project/src/pages/NotFound";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "../../ecommerce-project/src/pages/home/HomePage";

function App() {
  //thisenables axios in console:axios.get('/api/cart-items') in console will work after this line
  window.axios=axios;
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkouts" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
        {
          //:orderId,productId are called url parameters
        }
        <Route
          path="tracking/:orderId/:productId"
          element={<TrackingPage cart={cart} />}
        />
        <Route path="*" element={<NotFound cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
