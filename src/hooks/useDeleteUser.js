import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteUserMockupAPI } from "../APIs/user";
import { deleteUsersSuccess } from "../features/user/userSlice";

const useDeleteUser = () => {
  const dispatch = useDispatch();
  const deleteUserMutation = useMutation(deleteUserMockupAPI, {
    onSuccess: (res) => {
      dispatch(deleteUsersSuccess(res));
    },
    onError: (err) => {
      console.log("🧨 Error ~ handleDeleteUser:", err);
      toast.error("Remove user fail!");
    },
  });
  const handleDeleteUser = ({ userId }) => {
    deleteUserMutation.mutate(userId);
  };

  return {
    isLoading: deleteUserMutation.isLoading,
    isSuccess: deleteUserMutation.isSuccess,
    handleDeleteUser,
  };
};
export default useDeleteUser;
