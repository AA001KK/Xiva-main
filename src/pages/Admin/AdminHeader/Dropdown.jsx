import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const DropdownHover = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()


  return (
    <Menu as="div" onClose={() => setIsOpen(false)}>
      <MenuButton onClick={() => setIsOpen(true)}>
        <button
          className={`hover:text-main shadow-2xl text-[16px] bg-blue-700 hover:bg-blue-800 font-mono rounded-lg text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          type="button"
        >
          <p
            className={`flex text-[16px]  items-center font-mono gap-2`}
          >
            <i className="fa-solid fa-folder-plus"></i>
            <span>Qo'shish </span>
          </p>
          <div
            className={`ms-3 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
        </button>
      </MenuButton>

      <MenuItems anchor='bottom' transition className="z-[50] shadow-xl transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:-translate-y-2 data-[closed]:opacity-0 rounded-lg pt-2 min-w-[160px]">
        <div
          className={`opacity-1 bg-white divide-y transition-all divide-gray-100 dark:bg-gray-700`}
        >
          <ul
            className="relative z-10 py-2 text-sm text-gray-700 dark:text-gray-200"
          >
            {links.map((link, idx) => (
              <MenuItem>
                <div
                 key={idx}
                 onClick={() => navigate(link.link)}
                  className="font-mono hover:shadow-sm block cursor-pointer hover:pl-6 transition-all duration-300 hover:text-main px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {link.title}
                </div>
              </MenuItem>
            ))}
          </ul>
        </div>
      </MenuItems>
    </Menu>
  );
};

export { DropdownHover };
