import { createSlice } from "@reduxjs/toolkit";

const initState = {
  categoryList: [],
  categoryView: null,
  categoryDropdown: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initState,
  reducers: {
    getCategory: (state, { payload }) => {
      state.categoryList = payload;
    },
    setCategoryView: (state, { payload }) => {
      state.categoryView = payload;
    },
    setCategoryDropDown: (state, { payload }) => {
      state.categoryDropdown = payload;
    },
  },
});

export const { getCategory, setCategoryView, setCategoryDropDown } =
  categorySlice.actions;
export default categorySlice.reducer;
