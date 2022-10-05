import React, { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import { brandData } from "../../data/BrandsData";
import TableListItem from "../../components/TableListItem";
import AddCarModal from "../../components/Modal/AddCarModal";

const dataToShows = [
  { value: "all", label: "All" },
  { value: "lastUpdated", label: "Last Updated" },
  { value: "brandName", label: "Brand Name" },
  { value: "numberOfModel", label: "Number of Models" },
];

export default function Brands() {
  const [isDialogAddCarOpen, setIsDialogAddCarOpen] = useState(false);
  const [dataToShow, setDataToShow] = useState(dataToShows[0]);
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const filteredData = useMemo(
    () =>
      brandData.filter((d) =>
        d.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    [keyword]
  );

  return (
    <div>
      <Layout>
        <div>
          {/* filter + button */}
          <div className="flex items-center justify-between">
            <div className="py-8">
              <div className="flex items-center ">
                <h1 className="text-darkBlue text-2xl font-semibold">
                  CAR BRANDS LIST
                </h1>
                <div className="relative">
                  <Listbox value={dataToShow} onChange={setDataToShow}>
                    <Listbox.Button className="flex justify-between text-blackText font-medium px-5 ml-2 mr-[56px] text-sm cursor-pointer items-center gap-x-4">
                      <img src="/images/arrow-down.png" className="w-6 h-6" />
                      <span>View {dataToShow.label}</span>
                    </Listbox.Button>
                    <Listbox.Options className="bg-white absolute left-6 top-8 border border-grayText shadow-standard p-2 rounded">
                      {dataToShows.map((data) => (
                        <Listbox.Option
                          className={classNames(
                            "px-4 py-2 text-blackText text-sm cursor-pointer hover:bg-hover"
                          )}
                          key={data.value}
                          value={data}
                        >
                          {data.label}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <div className="rounded-full w-[260px] bg-hover flex items-center gap-x-3 h-[40px] pl-6">
                  <img src="/images/search.png" className="w-6 h-6" />
                  <input
                    className="text-sm text-popoverText bg-transparent outline-none border-none"
                    placeholder="Search car brand"
                    onChange={onChangeKeyword}
                  />
                </div>
              </div>
            </div>
            <Button
              label="Add Brand"
              type="blue"
              image="/images/add.png"
              className="px-4 py-2 text-sm"
              onClick={() => setIsDialogAddCarOpen(true)}
            />
          </div>
          {/* the list */}
          <div className="flex flex-col overflow-auto">
            {filteredData.map((brand) => (
              <TableListItem key={brand.id} item={brand} />
            ))}
          </div>
        </div>
        {/* add car modal */}
        <AddCarModal
          isOpen={isDialogAddCarOpen}
          setIsOpen={setIsDialogAddCarOpen}
        />
      </Layout>
    </div>
  );
}
