import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment } from "react";
import { brandConditions } from "../../data/BrandsData";

export default function BrandStatus({
  isEdit,
  selectedCondition,
  setSelectedCondition,
}) {
  return (
    <Listbox value={selectedCondition} onChange={setSelectedCondition}>
      <Listbox.Button
        className={classNames(
          "mt-2 flex justify-between gap-x-3 items-center text-lightGray text-sm px-3 h-[34px] rounded-full",
          {
            "bg-lightGreen": selectedCondition.value == "active",
            "bg-veryLightGray": selectedCondition.value !== "active",
            "cursor-pointer": isEdit,
          }
        )}
      >
        <img
          src={`/images/${
            selectedCondition.value == "active"
              ? "radio-green"
              : "radio-inactive"
          }.png`}
          className="w-4 h-4"
        />
        <span
          className={classNames("text-medium", {
            "text-darkGreen": selectedCondition.value == "active",
            "text-lightGray": selectedCondition.value !== "active",
          })}
        >
          {selectedCondition.label}
        </span>
        <img src="/images/arrow-down.png" className="w-6 h-6" />
      </Listbox.Button>
      <Listbox.Options
        style={{
          boxShadow:
            "0px 8px 16px 0px rgba(48, 49, 51, 0.1), 0px 0px 1px 0px rgba(48, 49, 51, 0.05)",
        }}
        className={classNames(
          "mt-2 gap-y-3 flex-col absolute left-0 z-10 max-h-60 w-full overflow-auto p-3 rounded-md bg-white",
          {
            flex: isEdit,
            hidden: !isEdit,
          }
        )}
      >
        {brandConditions.map((condition) => (
          <Listbox.Option key={condition.value} value={condition} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={classNames(
                  "cursor-pointer flex items-center gap-x-3 font-sans text-blackText py-1 px-2 rounded-full",
                  {
                    "bg-lightGreen": condition.value == "active",
                    "bg-veryLightGray": condition.value !== "active",
                  }
                )}
              >
                <img
                  src={
                    condition.value == "active"
                      ? "/images/radio-green.png"
                      : "/images/radio-inactive.png"
                  }
                  className="w-4 h-4"
                />
                <span
                  className={classNames({
                    "text-darkGreen": condition.value == "active",
                    "text-lightGray": condition.value !== "active",
                  })}
                >
                  {condition.label}
                </span>
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
