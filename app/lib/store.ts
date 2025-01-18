import { configureStore } from "@reduxjs/toolkit";
import multiplePersonnelSlicing from "./features/personnel/multiplePersonnelSlicing";
import singlePersonnelSlicing from "./features/personnel/singlePersonnelSlicing";
import typeFetchData from "./features/responseTypeDataSlicing";

export const store = configureStore({
  reducer: {
    multiplePersonnel: multiplePersonnelSlicing,
    singlePersonnel: singlePersonnelSlicing,
    typeData: typeFetchData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
