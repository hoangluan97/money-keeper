import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    authSuccess: (state, action) => {},
  },
});

export const { authSuccess } = userSlice.actions;
export default userSlice.reducer;
