import { configureStore } from "@reduxjs/toolkit";
import filterReducers from "../reducers/filterReducers";
import hotels from "../slice/hotels_slice";
import cart from "../slice/cart_slice";
import user from "../slice/user_slice";
import stringMiddleware from "../middleware/stringMiddleware";


const store = configureStore({
  reducer: { filterReducers, hotels, cart, user },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck: false,})
});

export default store;
