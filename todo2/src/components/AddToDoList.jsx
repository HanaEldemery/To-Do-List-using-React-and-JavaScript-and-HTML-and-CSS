import { useState } from "react";
import InputField from "./InputField.jsx";
import AddButton from "./AddButton.jsx";

const AddToDoList = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    console.log("eshme3naaa");
  };

  const handleClickAddButton = () => {
    props.onAddToList(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <InputField inputValue={inputValue} handleOnChange={handleOnChange} />
      <AddButton onClick={handleClickAddButton} />
    </div>
  );
};

export default AddToDoList;
