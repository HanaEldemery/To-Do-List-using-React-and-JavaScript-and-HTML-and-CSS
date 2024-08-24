const AddButton = (props) => {
  return (
    //props.onClick => onClick hateb2a input when renderend (fel parent)
    <div>
      <button onClick={props.onClick}>Add to list</button>
    </div>
  );
};

export default AddButton;
