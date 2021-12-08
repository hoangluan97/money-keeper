import "./App.scss";
import { useRef } from "react";
import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput, display } = state;

  const inputRef = useRef(); //create ref
  const handleClick = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodo(""));
    inputRef.current.focus();
  };

  return (
    <>
      <h1>ADD YOUR TODO LIST HERE</h1>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder={"Your work"}
        onChange={(e) => dispatch(actions.setTodo(e.target.value))}
      />
      <br></br>
      <button onClick={handleClick}>add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="work">
              <p>{todo}</p>
              {/* <i
                className="fas fa-edit fa-1x"
                onClick={() => dispatch(actions.editTodo(index))}
              ></i> */}
              <i
                className="fas fa-window-close fa-1x"
                onClick={() => dispatch(actions.delTodo(index))}
              ></i>
              {/* <input
                className="editInput"
                value={todo}
                onChange={(e) => dispatch(actions.setTodo(e.target.value))}
              /> */}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
// style={{ display: display[index][1] ? "visible" : "none" }}
