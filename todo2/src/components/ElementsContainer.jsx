import { useState } from "react";
import ListItem from "./ListItem.jsx";
import AddToDoList from "./AddToDoList.jsx";

const ElementsContainer = (props) => {
  const [list, setList] = useState([]);

  const handleAddToList = (newElement) => {
    setList([...list, newElement]);
  };

  const handleOnDeleteItem = (elementToDelete) => {
    setList(list.filter((element) => element != elementToDelete));
  };

  return (
    <>
      {list.map((elementInList) => {
        return (
          <ListItem
            onDeleteItem={handleOnDeleteItem}
            key={elementInList}
            text={elementInList}
          />
        );
      })}
      <AddToDoList onAddToList={handleAddToList} />
    </>
  );
};

export default ElementsContainer;
