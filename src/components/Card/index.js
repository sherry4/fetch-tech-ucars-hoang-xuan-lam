import React from "react";
import pluralize from "pluralize";

export default function Card({ item }) {
  return (
    <div
      className="border border-gray-200 rounded-md last:mr-4"
      style={{ minWidth: 281 }}
    >
      <img src={item.image} />
      <div className="p-4">
        <div className="flex flex-col gap-y-2">
          <span className="text-blackText font-semibold line-clamp-1">
            {item.name}
          </span>
          <div className="flex items-center gap-x-2">
            {item.price && (
              <span>
                From{" "}
                <span className="font-semibold text-blueText">
                  ${Number(item.price).toLocaleString()}
                </span>
              </span>
            )}
            <div className="h-6 bg-lightBlue text-blueText text-xs flex items-center">
              ${Number(item.installment).toLocaleString()}/mo
            </div>
          </div>
          <span className="text-sm text-lightGray">
            {item.variants} {pluralize("variant", item.variants)}{" "}
            {item.COE ? "| with COE" : ""}
          </span>
        </div>
        <div className="pt-4 flex items-center gap-x-2">
          <img src={item.companyLogo} />
          <span className="text-sm text-blackText">{item.company}</span>
        </div>
      </div>
    </div>
  );
}
