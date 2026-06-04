// when testing a component we render the component and check for expected output
import { it, expect, describe, vi } from "vitest";
// vi is used to mock functions and modules that might contact backend api or have side effects
// render is used to render in a fake web page
// screen is used to query the rendered component and check for expected output
import { render, screen } from "@testing-library/react";
import { Product } from "./Product";
// in tests we shouldn't contact backend api so we need to mock the data and test the component with the mocked data
describe("Product", () => {
  it("display the product details correctly", () => {
    const product = {
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
    //   creating a fake function that doesn't do anything
    const loadCart = vi.fn();
    render(<Product product={product} loadCart={loadCart} />);
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();
    expect(screen.getByText("$10.90")).toBeInTheDocument();
    expect(screen.getByTestId('product-image')).toHaveAttribute('src', 'images/products/athletic-cotton-socks-6-pairs.jpg');
    expect(screen.getByTestId('product-rating-stars-image')).toHaveAttribute('src', 'images/ratings/rating-45.png');
    expect(screen.getByText('87')).toBeInTheDocument()
  });
});
