import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUserMockupAPI } from "../APIs/user";
import { addUsersSuccess } from "../features/user/userSlice";

const useAddUser = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess } = useMutation(addUserMockupAPI)
  const handleAddeUser = ( name ) => {
    console.log("name", name)
    mutate(dispatch(addUsersSuccess({name})));
  };

  return {
    isLoading,
    isSuccess,
    handleAddeUser,
  };
};
export default useAddUser;