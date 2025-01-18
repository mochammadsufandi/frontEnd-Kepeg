import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const typeDataSlicing = createSlice({
  name: "TypeDataResponse",
  initialState,
  reducers: {
    fetchData(state, actions: PayloadAction<string>) {
      return actions.payload;
    },
  },
});

export const { fetchData } = typeDataSlicing.actions;
export default typeDataSlicing.reducer;
