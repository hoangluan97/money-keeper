import { useReducer } from "react";
import TodoContext from "./Context";
import reducer, { initialState } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
}

export default Provider;
