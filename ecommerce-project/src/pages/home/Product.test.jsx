// when testing a component we render the component and check for expected output
import { it, expect, describe, vi, beforeEach } from "vitest";
// vi is used to mock functions and modules that might contact backend api or have side effects
// render is used to render in a fake web page
// screen is used to query the rendered component and check for expected output
// userEvent is used to simulate user events like clicking
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Product } from "./Product";
import axios from "axios";
vi.mock("axios");
// in tests we shouldn't contact backend api so we need to mock the data and test the component with the mocked data
describe("Product", () => {
  let product;
  //   creating a fake function that doesn't do anything
  let loadCart;
  let user;
  // beforeEach is used to reset the mocked data before each test case so that the tests are independent and don't affect each other
  beforeEach(async() => {
    product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };
    loadCart = vi.fn();
   user = await userEvent.setup();
  });
  it("display the product details correctly", () => {
    render(<Product product={product} loadCart={loadCart} />);
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();
    expect(screen.getByText("$10.90")).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg",
    );
    expect(screen.getByTestId("product-rating-stars-image")).toHaveAttribute(
      "src",
      "images/ratings/rating-45.png",
    );
    expect(screen.getByText("87")).toBeInTheDocument();
  });
  it("add a product to car", async () => {
    render(<Product product={product} loadCart={loadCart} />);
   
    const addToCartButton = screen.getByTestId("add-to-cart-button");

    await user.click(addToCartButton);
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: product.id,
      quantity: 1,
    });
    expect(loadCart).toHaveBeenCalled();
  });
  it("select quantity", async () => {
    render(<Product product={product} loadCart={loadCart} />);
    const quantitySelector = screen.getByTestId("quantity-select");

    expect(quantitySelector).toHaveValue("1");
    await user.selectOptions(quantitySelector, "3");
    expect(quantitySelector).toHaveValue("3");
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: product.id,
      quantity: 3,
    });
    expect(loadCart).toHaveBeenCalled();
  });
});
