import { userReducer } from "./Components/reducer/userreducer"
import { configureStore } from "@reduxjs/toolkit"


const store = configureStore({
  reducer: {
    user: userReducer,

  }
  , middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})

export default store