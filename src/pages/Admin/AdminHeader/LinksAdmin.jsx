import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CardIcon2, Icons } from "../../../assets/icons";
import { DropdownHover } from "./Dropdown";
import { getUser } from "../../../components/redux/slice/user_slice";
import { useSelector } from "react-redux";
// import Dropdown from "./Dropdown";

const LinksAdmin = () => {
  const links = [
    {
      link: "hotels",
      title: "Mehmonxona",
    },
    {
      link: "cars",
      title: "Moshina",
    },
    {
      link: "translators",
      title: "Tarjimon",
    },
    {
      link: "blogs",
      title: "Blog",
    },
  ];

  const { user } = useSelector(getUser);

  return (
    <div>
      {user.role === "admin" && (
        <ul className="flex links-admin__header gap-[40px] kombo-box overflow-x-scroll md:overflow-hidden">
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center text-[16px] ${
                  isActive ? "text-main" : "text-gray"
                } font-mono  hover:text-main  gap-2 `
              }
              to={"home"}
            >
              <i className="fa-solid fa-house"></i>
              <h1>Home</h1>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center text-[16px] ${
                  isActive ? "text-main" : "text-gray"
                } font-mono  hover:text-main  gap-2 `
              }
              to={"/admin/hotel-owners"}
            >
              <i className="fa-solid fa-user"></i>
              <h1>Mexmonxonachilar</h1>
            </NavLink>
          </li>
          <li>
            <DropdownHover links={links} />
          </li>
        </ul>
      )}
      {user.role === "hotel_owner" && (
        <ul className="flex links-admin__header gap-[40px] kombo-box overflow-x-scroll md:overflow-hidden">
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center text-[16px] ${
                  isActive ? "text-main" : "text-gray"
                } font-mono  hover:text-main  gap-2 `
              }
              to={"/hotel-owner/orders"}
            >
              <i className="fa-solid fa-house"></i>
              <h1>Buyurtmalar</h1>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center text-[16px] ${
                  isActive ? "text-main" : "text-gray"
                } font-mono  hover:text-main  gap-2 `
              }
              to={"/hotel-owner/hotel"}
            >
              <i className="fa-solid fa-user"></i>
              <h1>Mexmonxona Ma'lumotlari</h1>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LinksAdmin;
