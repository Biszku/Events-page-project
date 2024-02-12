const InputComponent = (props) => {
  return (
    <div className="Book__section__inputContainer">
      <input
        className="Book__section__inputContainer-input"
        type="text"
        placeholder="Enter event name"
        onChange={(e) => {
          props.mutate(e.target.value);
          props.setCurPage(0);
          props.setLimitPage([0, 9]);
        }}
      />
      {props.isFetching && <div className="spinner spinner-input"></div>}
    </div>
  );
};

export default InputComponent;
