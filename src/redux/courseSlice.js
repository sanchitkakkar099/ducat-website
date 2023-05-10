import { createSlice } from "@reduxjs/toolkit";

const initState = {
  courselist: [],
  courseView: null,
  courseDropdown: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState: initState,
  reducers: {
    getCourse: (state, { payload }) => {
      state.courselist = payload;
    },
    setCourseView: (state, { payload }) => {
      state.courseView = payload;
    },
    setCourseDropDown: (state, { payload }) => {
      state.courseDropdown = payload;
    },
  },
});

export const { getCourse, setCourseView, setCourseDropDown } =
  courseSlice.actions;
export default courseSlice.reducer;
