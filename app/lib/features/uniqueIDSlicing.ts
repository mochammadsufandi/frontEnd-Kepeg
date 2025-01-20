import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const NIPSlicing = createSlice({
  name: "NIP",
  initialState,
  reducers: {
    switchNIP(state, actions: PayloadAction<string>) {
      return actions.payload;
    },
  },
});

export const { switchNIP } = NIPSlicing.actions;

export const NIP = NIPSlicing.reducer;
