import React from "react";

export default function index({ item }) {
  console.log(item);
  return (
    <div
      className="last:mr-4"
      style={{ minWidth: item.id !== "ad" ? 415 : "unset" }}
    >
      {item.id == "ad" ? (
        <img src="/images/advertiser.jpg" className="w-auto max-w-none" />
      ) : (
        <>
          <img src={item.image} className="w-full" />
          <div className="p-4 mt-16 flex items-end justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl text-blackText font-medium m-0">
                {item.title}
              </h1>
              <p className="text-xl text-blackText m-0">{item.desc}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-blackText m-0">{item.type}</p>
              <p className="text-xl text-buttonRed m-0">
                {Number(item.price).toLocaleString()}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
