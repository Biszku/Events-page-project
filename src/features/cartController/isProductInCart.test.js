import isEventInCart from "./isProductInCart";

describe("Testing feature isProductInCart", () => {
  test("Testing positive scenario", () => {
    const cartArr = [{ id: 2 }];
    const event = {
      id: 1,
      stats: {
        lowest_price: 12,
      },
    };
    expect(isEventInCart(cartArr, event)).toBeFalsy();
  });

  test("Testing negative scenario", () => {
    const cartArr = [{ id: 1 }];
    const event = {
      id: 1,
      stats: {
        lowest_price: 12,
      },
    };
    expect(isEventInCart(cartArr, event)).toBeTruthy();
  });

  test("Testing scenario without require data", () => {
    const cartArr = [{ id: 2 }];
    const event = {
      id: 1,
    };
    expect(isEventInCart(cartArr, event)).toBeTruthy();
  });
});
