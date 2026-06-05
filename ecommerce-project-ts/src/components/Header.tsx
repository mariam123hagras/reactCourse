import { NavLink, useNavigate,useSearchParams } from "react-router";
import "./header.css";
import logoWhite from "../assets/images/logo-white.png";
import mobileLogo from "../assets/images/mobile-logo.png";
import cartIcon from "../assets/images/icons/cart-icon.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import { useState } from "react";
type HeaderProps={cart:{
  productId:string;
  quantity:number;
  deliveryOptionId:string;
}[];}
export function Header({ cart }:HeaderProps) {
  const [searchParams] = useSearchParams();
  const searchTermParam=searchParams.get('search');
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState(searchTermParam || '');
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
    console.log(totalQuantity);
  });
  const handleSearch = () => {
    console.log("searching for", searchTerm);
    //navigate to home page with search term as query parameter
    navigate(`/?search=${searchTerm}`);
  };
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={logoWhite} />
          <img className="mobile-logo" src={mobileLogo} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />

        <button className="search-button">
          <img
            className="search-icon"
            src={searchIcon}
            onClick={handleSearch}
          />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkouts">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
