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
  editField: DataTableResult;
}

const initialState: SinglePersonnelResponse = {
  data: {} as DataTableResult,
  cacheId: "",
  filterField: {},
  sortField: {},
  count: 0,
  status: "",
  editField: {} as DataTableResult,
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
    markPersonnelSingle(state) {
      return {
        ...state,
        data: {
          ...state.data,
          marker: !state.data.marker,
        },
      };
    },
    editPersonnelSingle(state, actions: PayloadAction<string>) {
      const NIP = actions.payload;
      if (state.data.NIP === NIP) {
        return {
          ...state,
          editField: state.data,
        };
      } else {
        return {
          ...state,
          editField: {} as DataTableResult,
        };
      }
    },
    changePersonnelAfterEditSingle(state, actions: PayloadAction<DataTableResult>) {
      return {
        ...state,
        data: actions.payload,
      };
    },
  },
});

export const {
  searchBy,
  fetchStatusSingle,
  markPersonnelSingle,
  editPersonnelSingle,
  changePersonnelAfterEditSingle,
} = singlePersonnelSlice.actions;
export default singlePersonnelSlice.reducer;
