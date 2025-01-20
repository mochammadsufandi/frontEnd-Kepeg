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
          count: actions.payload.count,
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
    markPersonnelMultiple(state, actions: PayloadAction<string>) {
      const NIP = actions.payload;
      return {
        ...state,
        data: state.data.map((value) =>
          value.NIP === NIP ? { ...value, marker: !value.marker } : value
        ),
      };
    },
  },
});

export const { filterSort, fetchStatusMultiple, markPersonnelMultiple } =
  multiplePersonnelSlicing.actions;
export default multiplePersonnelSlicing.reducer;
