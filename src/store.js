import { configureStore } from "@reduxjs/toolkit";
import siteSlice from "./redux/slices/siteSlice";
const store = configureStore({
  reducer: {
    site:siteSlice
  },

});
export default store;