import { createSlice } from "@reduxjs/toolkit";

const initState = {
  testimonialList: [],
  testimonialView: null,
  testimonialEdit: null,
};

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: initState,
  reducers: {
    getTestimonial: (state, { payload }) => {
      state.testimonialList = payload;
    },
    setTestimonialView: (state, { payload }) => {
      state.testimonialView = payload;
    },
  },
});

export const { getTestimonial, setTestimonialView } =
  testimonialSlice.actions;
export default testimonialSlice.reducer;
