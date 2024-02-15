const ClosePopUp = ({ close }) => {
  return (
    <div onClick={close} className="popup-cart__content_exit">
      <div className="popup-cart__content_exit-line-1"></div>
      <div className="popup-cart__content_exit-line-2"></div>
    </div>
  );
};

export default ClosePopUp;
