import React, { Fragment, useState } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import Button from "../Button";
import classNames from "classnames";
import ImagePicker from "../ImagePicker";
import { brandConditions } from "../../data/BrandsData";
import BrandStatus from "../Listbox/BrandStatus";

export default function AddCarModal({ isOpen, setIsOpen }) {
  const [selectedCondition, setSelectedCondition] = useState(
    brandConditions[0]
  );
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 shadow-modal rounded-md"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  "w-full transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all",
                  "w-[600px]"
                )}
              >
                <div className="px-6 py-4 flex items-center justify-between bg-veryLightGray">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="font-semibold text-blackText text-[16px] leading-[24px]"
                    >
                      Add Car Brand
                    </Dialog.Title>
                    <h4 className="mt-2 text-sm text-lightGray">
                      Setup new car brand
                    </h4>
                  </div>
                  <Button
                    image="/images/close.png"
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-bgGray !rounded-full flex !justify-center items-center border border-grayText"
                  />
                </div>
                <div className="mt-2 p-6 flex flex-col gap-y-6">
                  {/* logo */}
                  <div>
                    <h1 className="text-sm font-semibold text-blackText border-b border-bgGray py-3">
                      Brand Logo
                    </h1>
                    <ImagePicker />
                  </div>

                  {/* detail */}
                  <div>
                    <h1 className="text-sm font-semibold text-blackText border-b border-bgGray py-3">
                      Brand Detail
                    </h1>
                    <div className="mt-4">
                      <div className="flex items-center gap-x-8">
                        <div className="flex-1">
                          <h4 className="text-sm text-popoverText">
                            Brand Name
                          </h4>
                          <input
                            className="w-full outline-none mt-1 px-3 py-2 border border-grayText rounded text-sm text-blackText .placeholder-popoverText"
                            placeholder="Input Content"
                          />
                        </div>
                        <div className="relative flex-1">
                          <h4 className="text-sm text-popoverText">
                            Brand Status
                          </h4>
                          <BrandStatus
                            isEdit
                            setSelectedCondition={setSelectedCondition}
                            selectedCondition={selectedCondition}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm text-popoverText">
                          Brand Description
                        </h4>
                        <textarea
                          rows={4}
                          placeholder="Input Description"
                          className="w-full outline-none mt-1 px-3 py-2 border border-grayText rounded text-sm text-blackText .placeholder-popoverText"
                        />
                      </div>
                    </div>
                  </div>

                  {/* footer */}
                  <div className="flex justify-end gap-x-3">
                    <Button
                      onClick={() => setIsOpen(false)}
                      label="Cancel"
                      className="text-sm text-blackText px-4 py-2 border border-popoverGrayText rounded"
                    />
                    <Button
                      onClick={() => setIsOpen(false)}
                      type="blue"
                      label="Create Brand"
                      className="border-none text-sm text-white px-4 py-2 border border-popoverGrayText rounded"
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
