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
  },
});

export const { authSuccess, fetchUsersSuccess, deleteUsersSuccess } =
  userSlice.actions;
export default userSlice.reducer;
