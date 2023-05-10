import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  categoryApi,
  courseApi,
  centerApi,
  batchApi,
  enquiryApi,
} from "../service";
import courseSlice from "./courseSlice";
import categorySlice from "./categorySlice";
import centerSlice from "./centerSlice";
import batchSlice from "./batchSlice";
import enquirySlice from "./enquirySlice";

const appReducer = combineReducers({
  courseState: courseSlice,
  categoryState: categorySlice,
  centerState: centerSlice,
  batchState: batchSlice,
  enquiryState: enquirySlice,
  [courseApi.reducerPath]: courseApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [centerApi.reducerPath]: centerApi.reducer,
  [enquiryApi.reducerPath]: enquiryApi.reducer,
  [batchApi.reducerPath]: batchApi.reducer,
});

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaltMiddleware) =>
    getDefaltMiddleware({ serializableCheck: false }).concat([
      courseApi.middleware,
      categoryApi.middleware,
      batchApi.middleware,
      centerApi.middleware,
      enquiryApi.middleware,
    ]),
});
