import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    authSuccess: (state, action) => {},
    fetchUsersSuccess: (state, action) => {
      state.users = action?.payload || [];
    },
    deleteUsersSuccess: (state, action) => {
      const _userId = action?.payload?.id;
      const filterUsers = state.users.filter((user) => user.id !== _userId);
      state.users = [...filterUsers];
    },
    addUsersSuccess: (state, action) => {
      console.log("new",action.payload.data)
      state.users = [...state.users,{name:action.payload.name}]
    }
  },
});


export const { authSuccess, fetchUsersSuccess, deleteUsersSuccess, addUsersSuccess } =
  userSlice.actions;
export default userSlice.reducer;
