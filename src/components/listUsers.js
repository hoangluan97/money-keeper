import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchUserMockupAPI } from "../APIs/user";
import { QUERY_KEYS } from "../constants";
import { fetchUsersSuccess } from "../features/user/userSlice";
import useDeleteUser from "../hooks/useDeleteUser";

const ListUsersComponent = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const { handleDeleteUser, isSuccess: isDeleteSuccess } = useDeleteUser();
  const { isSuccess, isLoading, isError, data } = useQuery(
    [QUERY_KEYS.FETCH_MOCKUP_USERS],
    () => fetchUserMockupAPI(),
    {
      keepPreviousData: true, //https://react-query.tanstack.com/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
      staleTime: 5000, //https://react-query.tanstack.com/guides/initial-query-data#staletime-and-initialdataupdatedat
    }
  );

  useEffect(() => {
    if (isError) {
      toast.error("Fetch users data error");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess && data.length) {
      dispatch(fetchUsersSuccess(data));
      toast.success("Fetch users data success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Delete user data success");
    }
  }, [isDeleteSuccess]);

  if (isLoading) {
    return <React.Fragment>Loading....</React.Fragment>;
  }
  return (
    <React.Fragment>
      {Array.isArray(users) &&
        users.map((user, index) => {
          return (
            <div style={{ marginTop: "12px" }} key={`${index}-${user?.id}`}>
              {user?.name}{" "}
              <button onClick={() => handleDeleteUser({ userId: user.id })}>
                Delete
              </button>
            </div>
          );
        })}
    </React.Fragment>
  );
};
export default ListUsersComponent;
