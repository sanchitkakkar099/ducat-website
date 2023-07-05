import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  categoryApi,
  courseApi,
  centerApi,
  batchApi,
  enquiryApi,
  clientApi,
  aboutUsApi
} from "../service";
import courseSlice from "./courseSlice";
import categorySlice from "./categorySlice";
import centerSlice from "./centerSlice";
import batchSlice from "./batchSlice";
import enquirySlice from "./enquirySlice";
import clientSlice from "./clientSlice";


const appReducer = combineReducers({
  courseState: courseSlice,
  categoryState: categorySlice,
  centerState: centerSlice,
  batchState: batchSlice,
  enquiryState: enquirySlice,
  clientState: clientSlice,
  [courseApi.reducerPath]: courseApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [centerApi.reducerPath]: centerApi.reducer,
  [enquiryApi.reducerPath]: enquiryApi.reducer,
  [batchApi.reducerPath]: batchApi.reducer,
  [clientApi.reducerPath]: clientApi.reducer,
  [aboutUsApi.reducerPath]: aboutUsApi.reducer,
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
      clientApi.middleware,
      aboutUsApi.middleware,
    ]),
});
