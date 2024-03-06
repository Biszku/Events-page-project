import fetchEvents from "./eventFetching";

describe("Testing feature eventFetching", () => {
  test("Testing '' input scenario", async () => {
    const data = await fetchEvents();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(0);
  });

  test("Testing 'd' input scenario", async () => {
    const data = await fetchEvents("d");
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  test("Testing 'dddd' input scenario", async () => {
    const data = await fetchEvents("dddd");
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(0);
  });
});
