import { createSlice } from "@reduxjs/toolkit";
import { findDaysBetween } from "../../helpers/findDaysBetween";

const initialValue = {
  total_price: 0,
  items: [],
  date: {},
};

const init = JSON.parse(localStorage.getItem("cart")) || initialValue;

const max = 10;

const cartSlice = createSlice({
  name: "cart",
  initialState: init,
  reducers: {
    incrementCart: (state, action) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex(
        (i) => i.item._id === item.item._id
      );
      if (itemIndex > -1) {
        const findItem = state.items[itemIndex];
        console.log(findItem.quantity < max, findItem.quantity, max);

        if (findItem.quantity < max) {
          state.items[itemIndex].quantity++;
          state.total_price += (item.item.price * findItem.days_quantity);
        }
      } else {
        item.date = state.date;
        item.quantity = 1;
        let item_price = item.item.price
        item.days_quantity = 1;
        if(state.date?.start && state.date?.end) {
          const days_quantity = findDaysBetween(item.date);
          item_price *= days_quantity
          item.days_quantity = days_quantity;
          item.date = state.date
        }
        state.total_price += item_price;
        state.items = [item, ...state.items];
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementCart: (state, action) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex(
        (i) => i.item._id === item.item._id
      );
      if (itemIndex > -1) {
        const foundItem = state.items[itemIndex];
        state.items[itemIndex].quantity--;
        state.total_price -= foundItem.item.price * foundItem.days_quantity;
        if (foundItem.quantity <= 0) {
          state.items.splice(itemIndex, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteCartItem: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex((i) => i.item._id === id);
      if (itemIndex > -1) {
        state.total_price -= state.items[itemIndex].item.price * state.items[itemIndex].quantity * state.items[itemIndex].days_quantity;
        state.items.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setCartDate: (state, action) => {
      const date = action.payload;
      state.date = date;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    changeItemDate: (state, action) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex((i) => i.item._id === item._id);
      if (itemIndex > -1) {
        const foundItem = state.items[itemIndex];
        if (item.date?.start && item.date?.end) {
          const days_quantity = findDaysBetween(item.date);
          state.items[itemIndex] = foundItem
          const days_price = (days_quantity - foundItem.days_quantity) * foundItem.item.price;
          foundItem.days_quantity = days_quantity
          foundItem.date = item.date
          state.total_price += days_price;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
const { actions, reducer } = cartSlice;

export const getBasket = (state) => state.cart;

export default reducer;
export const {
  incrementCart,
  decrementCart,
  deleteCartItem,
  setCartDate,
  changeItemDate,
} = actions;
