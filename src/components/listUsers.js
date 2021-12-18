import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { fetchUserMockup } from "../APIs/user";
import { QUERY_KEYS } from "../constants";

const ListUsersComponent = () => {
  const { isSuccess, isLoading, isError, data } = useQuery(
    [QUERY_KEYS.FETCH_MOCKUP_USERS],
    () => fetchUserMockup(),
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
    if (isSuccess) {
      toast.success("Fetch users data success");
    }
  }, [isSuccess]);

  if (isLoading) {
    return <React.Fragment>Loading....</React.Fragment>;
  }
  return (
    <React.Fragment>
      {isSuccess &&
        Array.isArray(data) &&
        data.map((user, index) => {
          return <div key={`${index}-${user?.id}`}>{user?.name}</div>;
        })}
    </React.Fragment>
  );
};
export default ListUsersComponent;
