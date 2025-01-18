import { DataTableResult } from "@/interface/propsInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SinglePersonnelResponse {
  data: DataTableResult;
  cacheId: string;
  filterField: {
    [key: string]: string;
  };
  sortField: {
    [key: string]: string;
  };
  count: number;
  status: string;
}

const initialState: SinglePersonnelResponse = {
  data: {} as DataTableResult,
  cacheId: "",
  filterField: {},
  sortField: {},
  count: 0,
  status: "",
};

const singlePersonnelSlice = createSlice({
  name: "SinglePersonnel",
  initialState,
  reducers: {
    searchBy(state, actions: PayloadAction<SinglePersonnelResponse>) {
      if (actions.payload.filterField && actions.payload.sortField) {
        return {
          ...state,
          data: actions.payload.data,
          cacheId: actions.payload.cacheId,
          sortField: actions.payload.sortField,
          filterField: actions.payload.filterField,
        };
      } else {
        return {
          ...state,
          cacheId: actions.payload.cacheId,
        };
      }
    },
    fetchStatusSingle(state, actions: PayloadAction<string>) {
      return {
        ...state,
        status: actions.payload,
      };
    },
  },
});

export const { searchBy, fetchStatusSingle } = singlePersonnelSlice.actions;
export default singlePersonnelSlice.reducer;
