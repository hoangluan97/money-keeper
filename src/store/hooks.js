import { useContext } from "react";
import TodoContext from "./Context";

export const useStore = () => {
  const [state, dispatch] = useContext(TodoContext);
  return [state, dispatch];
};
