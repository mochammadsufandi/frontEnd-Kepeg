import { configureStore } from "@reduxjs/toolkit";
import multiplePersonnelSlicing from "./features/personnel/multiplePersonnelSlicing";
import singlePersonnelSlicing from "./features/personnel/singlePersonnelSlicing";
import typeFetchData from "./features/responseTypeDataSlicing";
import { NIP, NIPEdit } from "./features/uniqueIDSlicing";

export const store = configureStore({
  reducer: {
    multiplePersonnel: multiplePersonnelSlicing,
    singlePersonnel: singlePersonnelSlicing,
    typeData: typeFetchData,
    NIP: NIP,
    NIPEdit : NIPEdit
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
