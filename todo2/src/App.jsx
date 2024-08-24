import "./App.css";
import ToDoListContainer from "./components/ToDoListContainer.jsx";
import ElementsContainer from "./components/ElementsContainer.jsx";

function App() {
  return (
    <ToDoListContainer>
      <ElementsContainer />
    </ToDoListContainer>
  );
}

export default App;
