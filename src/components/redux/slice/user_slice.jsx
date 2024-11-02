import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  user: {}
};


const cartSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
});
const { actions, reducer } = cartSlice;

export const getUser = (state) => state.user

export default reducer;
export const { setUser } = actions;
