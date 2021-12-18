// import { useMutation } from "react-query";
// import { useDispatch } from "react-redux";
// import { fetchUserMockup } from "../APIs/user";

// const useFetchUsers = () => {
//   const dispatch = useDispatch();
//   const fetchUsersMutation = useMutation(fetchUserMockup, {
//     onSuccess: (res) => {
//       dispatch(res);
//     },
//     onError: (err) => {},
//   });
//   const handleFetchUsers = (values) => {
//     fetchUsersMutation.mutate(values);
//   };

//   return {
//     isLoading: fetchUsersMutation.isLoading,
//     isSuccess: fetchUsersMutation.isSuccess,
//     handleFetchUsers,
//   };
// };
// export default useFetchUsers;
