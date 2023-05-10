import { createSlice } from "@reduxjs/toolkit";

const initState = {
  centerList: [],
  centerView: null,
  centerDropdown: [],
};

export const centerSlice = createSlice({
  name: "center",
  initialState: initState,
  reducers: {
    getCenter: (state, { payload }) => {
      state.centerList = payload;
    },
    setCenterView: (state, { payload }) => {
      state.centerView = payload;
    },
    setCenterDropDown: (state, { payload }) => {
      state.centerDropdown = payload;
    },
  },
});

export const { getCenter, setCenterView, setCenterDropDown } =
  centerSlice.actions;
export default centerSlice.reducer;
