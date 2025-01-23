import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStateNIP = "";
const initialStateNIPEdit = "";

const NIPSlicing = createSlice({
  name: "NIP",
  initialState : initialStateNIP,
  reducers: {
    switchNIP(state, actions: PayloadAction<string>) {
      return actions.payload;
    },
  },
});

const NIPEditSlicing = createSlice({
  name : "NIP Edit",
  initialState : initialStateNIPEdit,
  reducers : {
    switchNIPEdit(state, actions : PayloadAction<string>) {
      return actions.payload
    }
  }
  
})

export const { switchNIP } = NIPSlicing.actions;
export const { switchNIPEdit } = NIPEditSlicing.actions;

export const NIP = NIPSlicing.reducer;
export const NIPEdit = NIPEditSlicing.reducer;
