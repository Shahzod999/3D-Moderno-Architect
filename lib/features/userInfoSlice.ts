import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface toggleCard {
  status: boolean;
}

const initialState: toggleCard = {
  status: localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") || "false") : false,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userLogIn: (state) => {
      state.status = true;
      localStorage.setItem("userLogin", JSON.stringify(state.status));
    },
    userLogOut: (state) => {
      state.status = false;
      localStorage.setItem("userLogin", JSON.stringify(state.status));
    },
  },
});

export const { userLogIn, userLogOut } = userInfoSlice.actions;
export const selectedStatusUser = (state: RootState) => state.userInfo.status;
export default userInfoSlice.reducer;
