import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/Language/i18n.js";
import Routers from "./Routers/Routers.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store/store.jsx";
import App from "./App.jsx";
import HotelBookingCalendar2 from "./components/Hotel/Hotel.jsx";
import MySwal from "./App.jsx";
import Loader from "./components/Loader/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
      <Provider store={store}>
        <Routers />
      </Provider> 
);
