import { createSlice } from "@reduxjs/toolkit";

const initState = {
  batchList: [],
  batchView: null,
};

export const batchSlice = createSlice({
  name: "batch",
  initialState: initState,
  reducers: {
    getBatch: (state, { payload }) => {
      state.batchList = payload;
    },
    setBatchView: (state, { payload }) => {
      state.batchView = payload;
    },
  },
});

export const { getBatch, setBatchView } = batchSlice.actions;
export default batchSlice.reducer;
