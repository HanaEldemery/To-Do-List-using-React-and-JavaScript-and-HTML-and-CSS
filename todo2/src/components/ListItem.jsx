import DeleteButton from "./DeleteButton";

const ListItem = (props) => {
  const handleOnDelete = () => {
    props.onDeleteItem(props.text);
  };
  return (
    <div>
      <p>{props.text}</p>
      <DeleteButton onClick={handleOnDelete} />
    </div>
  );
};

export default ListItem;
