import classNames from "classnames";
import pluralize from "pluralize";
import React from "react";
import Button from "../Button";
import { Link } from "gatsby";

export default function TableListItem({ item }) {
  return (
    <div className="flex items-center px-6 py-8">
      {/* checkbox */}
      <div className="flex-1">
        <img src="/images/checkbox.png" className="cursor-pointer" />
      </div>
      {/* logo */}
      <div className="flex-[1] pr-[20px] border-r border-black box-content">
        <img src={item.logo} className="" />
      </div>
      {/* desc */}
      <div className="flex-[5] pl-[50px]">
        <div>
          <h1 className="font-medium text-darkBlue text-xl">{item.name}</h1>
          <div className="flex items-center">
            <p className="line-clamp-1 text-sm text-popoverText pr-4 border-r border-gray-200">
              {item.desc}
            </p>
            <p className="text-blueText text-sm font-medium pl-4 mt-1">
              {item.models} {pluralize("Model", item.models)}
            </p>
          </div>
        </div>
      </div>
      {/* update */}
      <div className="flex flex-col gap-y-3 flex-[2]">
        <h2 className="text-sm font-medium text-darkBlue">Last Update</h2>
        <p className="text-sm text-popoverText">{item.lastUpdated}</p>
      </div>
      {/* active */}
      <div className="flex-[2]">
        <div className="bg-veryLightGray py-2 px-4 flex items-center gap-x-2 w-fit">
          <div
            className={classNames("w-3 h-3 rounded-full", {
              "bg-darkGreen": item.active,
              "bg-lightGray": !item.active,
            })}
          ></div>
          <p
            className={classNames("font-medium", {
              "text-darkGreen": item.active,
              "text-lightGray": !item.active,
            })}
          >
            {item.active ? "Active" : "Inactive"}
          </p>
        </div>
      </div>
      {/* view detail  */}
      <Link to={`/brands/${item.id}`}>
        <Button
          label="View Details"
          className="px-4 py-2 text-sm text-blackText bg-transparent border border-popoverGrayText"
        />
      </Link>
    </div>
  );
}
