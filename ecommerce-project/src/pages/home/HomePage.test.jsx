import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { HomePage } from "./HomePage";
import axios from "axios";
vi.mock("axios");

// to test components with react-router components like link we need to wrap the
// component with the router in the test file otherwise we will get an error that says "useNavigate() may be used only in the context of a <Router> component"
// MemoryRouter is used for testing
// within lets us find things within a specific element instead of the whole document for example we can find the link within the product container instead of the whole document
describe("HomePage Component", () => {
  let loadCart;
  let user;
  beforeEach(() => {
    loadCart = vi.fn();
    user= userEvent.setup();
  });
  //   mock the implementaton make the mock do whatever we want
  axios.get.mockImplementation(async (url) => {
    if (url === "/api/products") {
      return {
        data: [
          {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
              stars: 4.5,
              count: 87,
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"],
          },
          {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            rating: {
              stars: 4,
              count: 127,
            },
            priceCents: 2095,
            keywords: ["sports", "basketballs"],
          },
        ],
      };
    }
  });
  it("display the products correctly", async () => {
    render(
      <MemoryRouter>
        <HomePage loadCart={loadCart} cart={[]} />
      </MemoryRouter>,
    );

    const productContainers = await screen.findAllByTestId("product-container");
    expect(productContainers.length).toBe(2);
    expect(
      within(productContainers[0]).getByText(
        "Black and Gray Athletic Cotton Socks - 6 Pairs",
      ),
    ).toBeInTheDocument();
        expect(
      within(productContainers[1]).getByText(
        "Intermediate Size Basketball",
      ),
    ).toBeInTheDocument();
  });
  it("Add to cart button Work",async()=>{
    render(
      <MemoryRouter>
        <HomePage loadCart={loadCart} cart={[]} />
      </MemoryRouter>,
    );
    const addToCartButtons = await screen.findAllByTestId("add-to-cart-button");
    expect(addToCartButtons.length).toBe(2);
  })
});
