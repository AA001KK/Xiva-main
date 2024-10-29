import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/Home";
import Hotels from "../pages/Hotels/Hotels";
import Cars from "../pages/Cars/Cars";
import Blogs from "../pages/Blogs/Blogs";
import HotelDynamic from "../pages/DynamicPage/HotelDynamic/HotelDynamic";
import CarDynamic from "../pages/DynamicPage/CarDynamic";
import Register from "../pages/Auth/Register";
import LoginPage from "../pages/Auth/LoginPage";
import BlogDynamic from "../pages/DynamicPage/BlogDynamic/BlogDynamic";
import Translators from "../pages/Translators/Translators";
import AdminHome from "../pages/Admin/AdminHome";
import Message from "../pages/Admin/Message/Message";
import AddBlog from "../pages/Admin/AddPages/AddBlog/AddBlog";
import Admin from "../pages/Admin/Admin";
import BlogsAdmin from "../pages/Admin/Service/BlogsAdmin/BlogsAdmin";
import AddCar from "../pages/Admin/AddPages/AddCar/AddCar";
import AddTranslator from "../pages/Admin/AddPages/AddTranslator/AddTranslator";
import AddHotel from "../pages/Admin/AddPages/AddHotels/AddHotel";
import HotelsAdmin from "../pages/Admin/Service/Hotels/HotelsAdmin";
import CarsAdmin from "../pages/Admin/Service/Cars/CarsAdmin";
import TranslatorsAdmin from "../pages/Admin/Service/Translators/Translators";
import useFetch from "../hooks/useFetch";
import BlogDynamicAdmin from "../pages/Admin/DynamicPages.jsx/BlogDynamic/BlogDynamic";
import TranslatorDynamicAdmin from "../pages/Admin/DynamicPages.jsx/TranslatorDynamic/TranslatorDynamic";
import CarDynamicAdmin from "../pages/Admin/DynamicPages.jsx/CarDynamic/CarDynamic";
import HotelDynamicAdmin from "../pages/Admin/DynamicPages.jsx/HotelDynamic/HotelDynamic";
import Basket from "../pages/Basket/Basket";
import App from "../pages/Home/Testimonials/Swiper";
import Pay from "../pages/Pay/pay";
import Loader from "../components/Loader/Loader";
import Settings from "../pages/Profile/Settings";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../components/redux/slice/user_slice";
import Payment from "../pages/Pay/Payment";
import HotelOLayout from "../pages/Hotel owner/layout";
import HotelOwners from "../pages/Admin/hotel owners/owners";
import AddOwnerHotel from "../pages/Hotel owner/HotelOwner";
import HotelOwner from "../pages/Hotel owner/HotelOwner";
import NotFoundPage from "../pages/not_found";
import OwnerClients from "../pages/Hotel owner/OwnerClients";

const publicRoute = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/hotels", element: <Hotels /> },
      { path: "/cal", element: <App /> },
      { path: "/cars", element: <Cars /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/translators", element: <Translators /> },
      { path: "/hotels/:id", element: <HotelDynamic /> },
      { path: "/cars/:id", element: <CarDynamic /> },
      { path: "/blog/:id", element: <BlogDynamic /> },
      { path: "/basket", element: <Basket /> },
      { path: "/pay", element: <Pay /> },
      { path: "/pay/payment", element: <Payment /> },
      { path: "/profile/settings", element: <Settings /> },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

const adminRoute = createBrowserRouter([
  ...publicRoute.routes,
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "hotel-owners",
        element: <HotelOwners />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "hotels",
        element: <HotelsAdmin />,
      },
      {
        path: "hotels/add",
        element: <AddHotel />,
      },
      {
        path: "cars",
        element: <CarsAdmin />,
      },
      {
        path: "cars/add",
        element: <AddCar />,
      },
      {
        path: "translators",
        element: <TranslatorsAdmin />,
      },
      {
        path: "translators/add",
        element: <AddTranslator />,
      },
      {
        path: "blogs",
        element: <BlogsAdmin />,
      },
      {
        path: "blogs/add",
        element: <AddBlog />,
      },
      { path: "hotels/:id", element: <HotelDynamicAdmin /> },
      { path: "cars/:id", element: <CarDynamicAdmin /> },
      { path: "translators/:id", element: <TranslatorDynamicAdmin /> },
      { path: "blogs/:id", element: <BlogDynamicAdmin /> },
    ],
  },
]);

const hotelOwnerRoute = createBrowserRouter([
  ...publicRoute.routes,
  {
    path: "/hotel-owner",
    element: <HotelOLayout />,
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "orders",
        element: <OwnerClients />,
      },
      {
        path: "hotel",
        element: <HotelOwner />,
      },
    ],
  },
]);

const roleRoutes = {
  user: publicRoute,
  admin: adminRoute,
  hotel_owner: hotelOwnerRoute,
};

const Routers = () => {
  const { data: user, loading } = useFetch("users/user");
  const dispatch = useDispatch();

  const { user: userData } = useSelector(getUser);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user]);

  return loading ? (
    <Loader />
  ) : (
    <RouterProvider router={roleRoutes[userData.role] || publicRoute} />
    // <RouterProvider router={ adminRoute } />
  );
};

export default Routers;
