const isEventInCart = (cartArr, event) => {
  if (!event?.stats?.lowest_price) return true;
  const isEventInCart = cartArr.find((e) => e?.id === event?.id);
  if (isEventInCart) return true;
  return false;
};

export default isEventInCart;
