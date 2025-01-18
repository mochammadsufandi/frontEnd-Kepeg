import { DataTableResult } from "@/interface/propsInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MultiplePersonnelResponse {
  data: DataTableResult[];
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

const initialState: MultiplePersonnelResponse = {
  data: [],
  cacheId: "",
  filterField: {},
  sortField: {},
  count: 0,
  status: "",
};

const multiplePersonnelSlicing = createSlice({
  name: "MultiplePersonnel",
  initialState,
  reducers: {
    filterSort(state, actions: PayloadAction<MultiplePersonnelResponse>) {
      if (actions.payload.filterField && actions.payload.sortField) {
        return {
          ...state,
          data: actions.payload.data,
          cacheId: actions.payload.cacheId,
          filterField: actions.payload.filterField,
          sortField: actions.payload.sortField,
        };
      } else {
        return {
          ...state,
          cacheId: actions.payload.cacheId,
        };
      }
    },
    fetchStatusMultiple(state, actions: PayloadAction<string>) {
      return {
        ...state,
        status: actions.payload,
      };
    },
  },
});

export const { filterSort, fetchStatusMultiple } = multiplePersonnelSlicing.actions;
export default multiplePersonnelSlicing.reducer;
