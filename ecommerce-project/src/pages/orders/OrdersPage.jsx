import { Header } from "../../components/Header";
import { Link } from "react-router";
import "./OrdersPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { OrdersGrid } from "./OrdersGrid";
export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders}/>
      </div>
    </>
  );
}
