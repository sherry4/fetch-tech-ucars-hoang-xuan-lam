import { Disclosure } from "@headlessui/react";
import React from "react";

export default function index({ item }) {
  return (
    <div className="w-full first:border-t border-gray-200">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center border-b border-gray-200 h-[56px]">
                <span className="text-sm font-semibold text-blackText">
                  {item.label}
                </span>
                <img src="/images/arrow-down.png" />
              </Disclosure.Button>
              {item.subs.map((sub, idx) => (
                <Disclosure.Panel
                  key={idx}
                  className="pt-4 pb-2 text-sm text-lightGray"
                >
                  <a href={`#${sub}`}>{sub}</a>
                </Disclosure.Panel>
              ))}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
