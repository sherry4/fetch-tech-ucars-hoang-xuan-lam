import React, { useState, Fragment, useMemo } from "react";
import { Listbox, Popover } from "@headlessui/react";
import Button from "../Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import { carConditions, vehicleTypes } from "../../data/CarData";

export default function CarSelector() {
  const [selectedCondition, setSelectedCondition] = useState(carConditions[0]);
  const [minMax, setMinMax] = useState([100000, 1000000]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const typesLabel = useMemo(
    () =>
      selectedTypes.length < 4
        ? selectedTypes
            .map((type) => vehicleTypes.find((t) => t.value == type).label)
            .join(", ")
        : selectedTypes
            .map((type) => vehicleTypes.find((t) => t.value == type).label)
            .slice(0, 3)
            .join(", ") + ` +${String(selectedTypes.length - 3)}`,
    [selectedTypes]
  );

  const onChangeInput = (e) => {
    let name = e.currentTarget.name;
    if (name == "min") {
      setMinMax((prev) => [Number(e.target.value), prev[1]]);
    } else {
      setMinMax((prev) => [prev[0], Number(e.target.value)]);
    }
  };

  const handleClick = (type, action, cb, e) => {
    switch (type) {
      case "priceRange":
        switch (action) {
          case "clear":
            setMinMax([100000, 1000000]);
            break;
          case "save":
            if (minMax[0] > minMax[1]) {
              toast.error("Min should not be larger than max!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              cb();
            }
            break;
          default:
            break;
        }
        break;
      case "vehicleType":
        switch (action) {
          case "clear":
            setSelectedTypes([]);
            break;
          case "save":
            cb();
            break;
          case "checkbox":
            let value = e.target.value;
            if (e.target.checked) {
              setSelectedTypes([...selectedTypes, value]);
            } else {
              setSelectedTypes(selectedTypes.filter((type) => type !== value));
            }
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={classNames(
        "rounded-md border border-gray-300 flex flex-col p-2 mt-8 lg:mt-0 lg:flex-row lg:justify-center shadow-standard",
        "lg:rounded-[10px] lg:p-[40px] lg:items-center bg-white"
      )}
    >
      {/* car condition selection */}
      <div className="relative px-4 py-6 flex flex-col font-roboto gap-y-6 shadow-standard lg:shadow-none lg:pr-[40px] lg:flex-1">
        <label className="text-blackText font-medium">New/ Used</label>
        <Listbox value={selectedCondition} onChange={setSelectedCondition}>
          <Listbox.Button className="flex justify-between text-lightGray text-sm cursor-pointer">
            {selectedCondition.label}
            <img src="/images/arrow-down.png" className="w-6 h-6" />
          </Listbox.Button>
          <Listbox.Options
            style={{
              boxShadow:
                "0px 8px 16px 0px rgba(48, 49, 51, 0.1), 0px 0px 1px 0px rgba(48, 49, 51, 0.05)",
            }}
            className="gap-y-6 flex flex-col absolute left-0 z-10 mt-24 max-h-60 w-full overflow-auto p-6 rounded-md bg-white"
          >
            {carConditions.map((condition) => (
              <Listbox.Option
                key={condition.value}
                value={condition}
                as={Fragment}
              >
                {({ active, selected }) => (
                  <li className="flex items-center gap-x-3 font-sans text-blackText cursor-pointer">
                    <img
                      src={
                        selected
                          ? "/images/active-radio.png"
                          : "/images/inactive-radio.png"
                      }
                      className="w-4 h-4"
                    />
                    {condition.label}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      {/* price range */}
      <div
        className={classNames(
          "relative px-4 py-6 flex flex-col font-roboto gap-y-6 border-b lg:border-b-0 border-gray-200 shadow-standard lg:shadow-none",
          "lg:border-l-[3px] lg:border-r-[3px] lg:px-[40px] lg:flex-1"
        )}
      >
        <label className="text-blackText font-medium">Price Range</label>
        <Popover>
          <Popover.Button className="flex justify-between items-center text-lightGray text-sm cursor-pointer w-full">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-x-2">
                <img src="/images/money.png" className="w-4 h-4" />
                <span className="text-lightGray text-sm">
                  ${Number(minMax[0]).toLocaleString()}
                </span>
              </div>
              <span>—</span>
              <div className="flex items-center gap-x-2">
                <img src="/images/money.png" className="w-4 h-4" />
                <span className="text-lightGray text-sm">
                  ${Number(minMax[1]).toLocaleString()}
                </span>
              </div>
            </div>
            <img src="/images/arrow-down.png" className="w-6 h-6" />
          </Popover.Button>

          <Popover.Panel
            style={{
              boxShadow:
                "0px 8px 16px 0px rgba(48, 49, 51, 0.1), 0px 0px 1px 0px rgba(48, 49, 51, 0.05)",
            }}
            className="w-[500px] font-sans gap-y-4 flex flex-col absolute left-0 z-10 t-0 max-h-60 overflow-auto p-6 rounded-md bg-white"
          >
            {({ close }) => (
              <>
                <h4 className="font-semibold text-blackText">Price Range</h4>
                <div className="flex justify-between items-center pb-3">
                  <div className="border border-gray-200 rounded-md px-4 py-2">
                    <p className="text-popoverText text-xs mb-1">Min</p>
                    <div className="flex">
                      <span>S$</span>
                      <input
                        value={minMax[0]}
                        type="number"
                        className="w-full pl-3 outline-none border-none"
                        name="min"
                        onChange={onChangeInput}
                      />
                    </div>
                  </div>
                  <div className="px-3"> - </div>
                  <div className="border border-gray-200 rounded-md px-4 py-2">
                    <p className="text-popoverText text-xs mb-1">Max</p>
                    <div className="flex">
                      <span>S$</span>
                      <input
                        value={minMax[1]}
                        name="max"
                        type="number"
                        className="w-full pl-3 outline-none border-none"
                        onChange={onChangeInput}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <Button
                    className="bg-none text-popoverGrayText font-semibold"
                    label="Clear"
                    onClick={() => handleClick("priceRange", "clear")}
                  />
                  <Button
                    type="red"
                    className="px-4 py-2"
                    label="Save"
                    onClick={() => handleClick("priceRange", "save", close)}
                  />
                </div>
              </>
            )}
          </Popover.Panel>
        </Popover>
      </div>
      {/* vehicle type */}
      <div className="relative px-4 py-6 flex flex-col font-roboto gap-y-6 shadow-standard lg:shadow-none lg:pl-[40px] lg:flex-1">
        <label className="text-blackText font-medium">Vehicel Type</label>
        <Popover>
          <Popover.Button className="flex justify-between text-lightGray text-sm cursor-pointer w-full items-center">
            <span>{typesLabel || "Select type"}</span>
            <img src="/images/arrow-down.png" className="w-6 h-6" />
          </Popover.Button>

          <Popover.Panel
            style={{
              boxShadow:
                "0px 8px 16px 0px rgba(48, 49, 51, 0.1), 0px 0px 1px 0px rgba(48, 49, 51, 0.05)",
            }}
            className={classNames(
              "font-sans gap-y-4 flex flex-col absolute left-0 z-10 t-0 max-h-60 w-full overflow-auto p-6 rounded-md bg-white",
              "w-[400px]"
            )}
          >
            {({ close }) => (
              <>
                <h4 className="font-semibold text-blackText">Vehicle Type</h4>
                <div className="grid grid-cols-3 pb-3 gap-4">
                  {vehicleTypes.map((type) => (
                    <div className="flex gap-x-2 items-center" key={type.value}>
                      <input
                        type="checkbox"
                        value={type.value}
                        onChange={(e) =>
                          handleClick("vehicleType", "checkbox", null, e)
                        }
                        checked={selectedTypes.includes(type.value)}
                      />
                      <label className="text-sm text-blackText">
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <Button
                    className="bg-none text-popoverGrayText font-semibold"
                    label="Clear"
                    onClick={() => handleClick("vehicleType", "clear")}
                  />
                  <Button
                    type="red"
                    className="px-4 py-2"
                    label="Save"
                    onClick={() => handleClick("vehicleType", "save", close)}
                  />
                </div>
              </>
            )}
          </Popover.Panel>
        </Popover>
      </div>
      <Button
        type="red"
        label="Search"
        className="h-16 flex items-center justify-center cursor-pointer lg:h-[60px] lg:w-[140px] lg:ml-[40px]"
      />
    </div>
  );
}
