import axios from "axios";
import { useEffect, useState } from "react";

import "./HomePage.css";
import { Header } from "../../../../ecommerce-project-ts/src/components/Header";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router";
export function HomePage({ cart = [], loadCart }) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const [products, setProducts] = useState([]);
  //we need to fetch the data once not evey time the components rereders
  //useEffect runs by strict mode twice to help us fetch bugs in development mode
  // values from outsisde useEffect should be added in dependency array 
  useEffect(() => {
    const getHomeData = async () => {
      const urlPath=searchTerm ? `/api/products?search=${searchTerm}` : "/api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };
    getHomeData();
  }, [searchTerm]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/home-favicon.png" />
      <title>Ecommerce-project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
