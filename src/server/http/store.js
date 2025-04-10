import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../store/app";

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
