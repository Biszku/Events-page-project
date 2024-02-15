const PageBar = ({ page }) => {
  return (
    <div className="popup-cart__content-page-container">
      <div className="popup-cart__content-page-container_block">
        <span
          className="popup-cart__content-page-container_block-number"
          style={{
            color: page === 1 ? "rgb(67 67 141)" : "rgb(246 246 246)",
          }}
        >
          1
        </span>
      </div>
      <div className="popup-cart__content-page-container_block">
        <span
          className="popup-cart__content-page-container_block-number"
          style={{
            color: page === 2 ? "rgb(67 67 141)" : "rgb(246 246 246)",
          }}
        >
          2
        </span>
      </div>
      <div className="popup-cart__content-page-container_block">
        <span
          className="popup-cart__content-page-container_block-number"
          style={{
            color: page === 3 ? "rgb(67 67 141)" : "rgb(246 246 246)",
          }}
        >
          3
        </span>
      </div>
    </div>
  );
};

export default PageBar;
