import classNames from "classnames";
import React, { useState } from "react";

export default function MenuItem({
  menu,
  isMenuOpen,
  activeMenu,
  activeSubMenu,
  handleOnClick,
}) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  return (
    <div key={menu.id} className>
      <div
        className={classNames(
          "flex items-center justify-between hover:bg-blueText px-6 py-4 rounded-md cursor-pointer group",
          {
            "bg-blueText": menu.id == activeMenu,
          }
        )}
        onClick={() => {
          handleOnClick(menu.id);
          setIsSubMenuOpen(!isSubMenuOpen);
        }}
      >
        <div className="flex">
          <img src={menu.image} className="w-6 h-6 mr-3"></img>
          {isMenuOpen && (
            <span
              className={classNames(
                "text-lg text-popoverText group-hover:text-white",
                { "!text-white": menu.id == activeMenu }
              )}
            >
              {menu.label}
            </span>
          )}
        </div>
        {menu.subs.length > 0 && isMenuOpen && (
          <img src="/images/arrow-down.png" className="w-6 h-6" />
        )}
      </div>

      {isSubMenuOpen && menu.subs.length > 0 && (
        <div
          className={classNames("flex-col", {
            // block: menu.id == activeMenu,
            // "hidden pt-0": menu.id !== activeMenu,
          })}
        >
          <div className="relative">
            <div className="absolute h-[70%] top-[15%] left-0 w-3 border-l border-popoverText"></div>
            <div className="flex flex-col gap-y-2">
              {menu.subs.map((sub) => {
                const selected =
                  menu.id == activeSubMenu.parent_id &&
                  sub.id === activeSubMenu.id;
                return (
                  <div
                    key={sub.id}
                    className={classNames(
                      "hover:bg-blueText px-6 py-4 pl-12 rounded-md cursor-pointer group first:mt-2",
                      {
                        "bg-blueText": selected,
                      }
                    )}
                    onClick={() => handleOnClick(menu.id, sub.id)}
                  >
                    <div className="flex">
                      <span
                        className={classNames(
                          "text-lg group-hover:text-white",
                          {
                            "text-white": selected,
                            "text-popoverText": !selected,
                          }
                        )}
                      >
                        {sub.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
