import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./features/userInfoSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      userInfo: userInfoSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
