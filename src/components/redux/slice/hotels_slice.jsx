import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isAuth: false,
  imagesHotel: [],
  loaderRedux: false,
  imageData:{},
  isImgOpen:false
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: initialValue,
  reducers: {
    userRegistered: (state) => {
      state.isAuth = true;
    },
    userLogout: (state) => {
      state.isAuth = false;
    },
    addImagesHotel: (state, action) => {
      state.imagesHotel = [...state.imagesHotel, action.payload];
    },
    fetchingData:(state, action)=>{
      state.loaderRedux = action.payload
    },
    openImgModal:(state,action)=>{
      state.imageData = action.payload
      state.isImgOpen = true
    },
    closeImgModal:(state,action)=>{
      state.imageData = action.payload
      state.isImgOpen = false
    }
  },
});
const { actions, reducer } = hotelsSlice;

export default reducer;
export const { userRegistered, userLogout, addImagesHotel,fetchingData, openImgModal, closeImgModal} = actions;
