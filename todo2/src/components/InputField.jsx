const InputFeild = (props) => {
  return (
    <div>
      <input onChange={props.handleOnChange} value={props.inputValue} />
      {/* <button
          onClick={() => {
            setInputValue("");
          }}
        >
          Clear
        </button> */}
    </div>
  );
};

export default InputFeild;
