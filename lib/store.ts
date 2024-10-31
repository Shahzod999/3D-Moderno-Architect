import { configureStore } from "@reduxjs/toolkit";
import modalCardToggleSlice from "./features/modalCardToggleSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      modalToggle: modalCardToggleSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
