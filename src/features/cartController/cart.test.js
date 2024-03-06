import cart, {
  addToCart,
  removeFromCart,
  removeAllProducts,
  changeAmount,
} from "./cart";

describe("Testing cart redux", () => {
  test("should return the initial state", () => {
    expect(cart(undefined, { type: undefined })).toBeTruthy();
  });

  test("Test positive adding events", () => {
    const initialState = { value: [{ id: 2 }] };
    expect(cart(initialState, addToCart({ id: 3 }))).toEqual({
      value: [{ amount: 1, id: 3 }, { id: 2 }],
    });
  });

  test("Test positive remove event", () => {
    const initialState = { value: [{ id: 2 }, { id: 3 }] };
    expect(cart(initialState, removeFromCart(2))).toEqual({
      value: [{ id: 3 }],
    });
  });

  test("Test positive remove all events", () => {
    const initialState = { value: [{ id: 2 }, { id: 3 }] };
    expect(cart(initialState, removeAllProducts())).toEqual({
      value: [],
    });
  });

  test("Test positive increase amount ", () => {
    const initialState = { value: [{ amount: 1, id: 2 }] };
    expect(cart(initialState, changeAmount({ amount: 3, id: 2 }))).toEqual({
      value: [{ amount: 4, id: 2 }],
    });
  });

  test("Test positive set amount", () => {
    const initialState = { value: [{ amount: 1, id: 2 }] };
    expect(
      cart(initialState, changeAmount({ amount: 3, id: 2, type: "set" }))
    ).toEqual({
      value: [{ amount: 3, id: 2 }],
    });
  });
});
