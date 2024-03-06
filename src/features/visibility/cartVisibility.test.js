import cartVisibility, { setVisibility } from "./cartVisibility";

describe("Testing cartVisibility redux", () => {
  test("should return the initial state", () => {
    expect(cartVisibility(undefined, { type: undefined })).toEqual({
      value: false,
    });
  });

  test("Test change state from 'false' to 'true'", () => {
    expect(cartVisibility(undefined, setVisibility(true))).toEqual({
      value: true,
    });
  });

  test("Test when argument is a string ", () => {
    expect(cartVisibility(undefined, setVisibility("dsa"))).toEqual({
      value: false,
    });
  });

  test("Test when argument is a number ", () => {
    expect(cartVisibility(undefined, setVisibility(1221))).toEqual({
      value: false,
    });
  });

  test("Test when argument is '0' ", () => {
    expect(cartVisibility(undefined, setVisibility(0))).toEqual({
      value: false,
    });
  });
});
