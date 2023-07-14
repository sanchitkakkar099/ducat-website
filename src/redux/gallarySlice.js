import { createSlice } from "@reduxjs/toolkit";

const initState = {
  gallaryList: [],
};

export const gallarySlice = createSlice({
  name: "gallary",
  initialState: initState,
  reducers: {
    getGallary: (state, { payload }) => {
      state.gallaryList = payload;
    },
  },
});

export const { getGallary } =
  gallarySlice.actions;
export default gallarySlice.reducer;
