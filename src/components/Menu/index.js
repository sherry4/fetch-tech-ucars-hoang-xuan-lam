import classNames from "classnames";
import React, { useEffect, useRef, useState, useContext } from "react";
import MenuItem from "./MenuItem";
import MenuContext from "../../context/MenuContext";

export const menus = [
  { id: "brand", label: "Car Brand", image: "/images/car.png", subs: [] },
  {
    id: "folder",
    label: "Folder",
    image: "/images/calendar.png",
    subs: [
      {
        id: "folder1",
        label: "Menu Item 1",
      },
      {
        id: "folder2",
        label: "Menu Item 2",
      },
      {
        id: "folder3",
        label: "Menu Item 3",
      },
    ],
  },
  { id: "task", label: "Tasks", image: "/images/calendar.png", subs: [] },
  { id: "module", label: "Modules", image: "/images/calendar.png", subs: [] },
  {
    id: "noti",
    label: "Notifications",
    image: "/images/calendar.png",
    subs: [],
  },
];

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState(menus[0].id);
  const [activeSubMenu, setActiveSubMenu] = useState({ parent_id: "", id: "" });
  const { isOpen: isMenuOpen, toggleOpen: setIsMenuOpen } =
    useContext(MenuContext);
  const menuRef = useRef(null);

  const handleOnClick = (menu_id, sub_id) => {
    setActiveMenu(menu_id);
    if (sub_id) {
      setActiveSubMenu({ parent_id: menu_id, id: sub_id });
    } else {
      setActiveSubMenu({ parent_id: "", id: "" });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current.style.display = "flex";
    } else {
      menuRef.current.style.display = "none";
    }
  }, [isMenuOpen]);

  return (
    <div
      ref={(ref) => (menuRef.current = ref)}
      className="w-[250px] bg-menuBg px-4 py-8 flex flex-col h-[100vh]"
    >
      <div className="flex-1 overflow-auto">
        {/* top */}
        <div className="flex justify-between items-center">
          {isMenuOpen && <img src="/images/ucars.png" className="h-[20px]" />}
          <img
            src="/images/menu-fold.png"
            className={classNames("h-[20px] w-[20px] cursor-pointer")}
            onClick={setIsMenuOpen}
          />
        </div>
        {/* menu list */}
        <div className="mt-10 flex flex-col gap-y-2">
          {menus.map((menu) => {
            return (
              <MenuItem
                menu={menu}
                isMenuOpen={isMenuOpen}
                handleOnClick={handleOnClick}
                activeMenu={activeMenu}
                activeSubMenu={activeSubMenu}
              />
            );
          })}
        </div>
      </div>
      <div className="border-t border-popoverText">
        <div
          className={classNames(
            "flex items-center px-6 py-4 rounded-md cursor-pointer group hover:bg-blueText mt-2",
            {
              "bg-blueText": "setting" == activeMenu,
            }
          )}
          onClick={() => handleOnClick("setting")}
        >
          <img src="/images/Setting.png" className="w-6 h-6 mr-3" />
          {isMenuOpen && (
            <span
              className={classNames(
                "text-lg text-popoverText group-hover:text-white",
                { "!text-white": "setting" == activeMenu }
              )}
            >
              Setting
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
