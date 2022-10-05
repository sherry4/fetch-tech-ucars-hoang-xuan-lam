import React from "react";
import Card from "../Card";
import Button from "../Button";

export default function CardList(props) {
  return (
    <div className="mt-12 flex flex-col lg:mt-6 lg:px-[60px]">
      <div className="flex gap-x-10 overflow-auto pl-4 lg:pl-0 lg:overflow-visible lg:grid lg:grid-cols-4 lg:gap-x-[40px] lg:gap-y-6">
        {props.data.map((car) =>
          car.id == "ad" ? (
            <img src="/images/advertiser.jpg" className="w-auto max-w-none" />
          ) : (
            <Card key={car.id} item={car} />
          )
        )}
      </div>
      <Button
        className="border border-buttonRed text-buttonRed px-4 py-2 mx-auto mt-6"
        label="View more new cars"
      />
    </div>
  );
}
