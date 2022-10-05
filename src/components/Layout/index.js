import classNames from "classnames";
import React, { useState, useContext } from "react";
import Menu from "../Menu";
import MenuContext from "../../context/MenuContext";

function Layout(props) {
  const { isOpen, toggleOpen } = useContext(MenuContext);
  return (
    <div className="flex">
      {/* icon for opening menu */}
      {!isOpen && (
        <img
          onClick={toggleOpen}
          src="/images/arrow-left.png"
          className="w-8 h-8 rotate-180 cursor-pointer absolute left-0 top-1/2"
        />
      )}
      {/* menu */}
      <aside>
        <Menu />
      </aside>
      <main className={classNames("flex-1")}>
        <nav className="h-16 shadow-nav flex gap-x-6 w-full border-b border-gray-200 items-center justify-end pr-10">
          <img src="/images/Info.png" className="w-6 h-6" />
          <img src="/images/bell.png" className="w-6 h-6" />
          <div className="flex gap-x-2 items-center">
            <div className="rounded-full bg-lightGray w-8 h-8"></div>
            <span className="text-sm text-blackText">Admin</span>
            <img src="/images/arrow-down.png" className="w-6 h-6" />
          </div>
        </nav>
        <section className="px-[60px]">{props.children}</section>
      </main>
    </div>
  );
}

export default Layout;
