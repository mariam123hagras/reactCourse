import { Header } from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";
export function HomePage({ cart = [] }) {
  const [products, setProducts] = useState([]);
  //we need to fetch the data once not evey time the components rereders
  //useEffect runs by strict mode twice to help us fetch bugs in development mode
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");

      setProducts(response.data);
    };
    getHomeData()
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/home-favicon.png" />
      <title>Ecommerce-project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
