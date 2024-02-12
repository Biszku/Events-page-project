const isEventInCart = (cartArr, event) => {
  const isEventInCart = cartArr.find((e) => e?.id === event?.id);
  if (isEventInCart) return true;
  return false;
};

export default isEventInCart;
