import classNames from "classnames";
import React, { useRef } from "react";

export default function ImagePicker({ imageURL, isEdit }) {
  const imageInputRef = useRef(null);
  const onClick = () => {
    if (!isEdit) return;
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };
  return (
    <div
      className={classNames(
        "group relative overflow-hidden flex items-center justify-center flex-col mt-4 w-[120px] h-[120px] rounded-full border border-dashed border-grayText bg-veryLightGray",
        {
          "cursor-pointer": isEdit,
        }
      )}
      onClick={onClick}
    >
      {/* over lay when hover */}
      <div
        className={classNames(
          "hidden absolute top-0 left-0 w-full h-full opacity-[0.8] bg-blackText justify-center items-center",
          {
            "group-hover:flex": isEdit,
          }
        )}
      >
        <span className="font-semibold text-white text-center">
          CHANGE <br></br> LOGO
        </span>
      </div>
      {imageURL ? (
        <img src={imageURL} className="w-[120px] h-[120px]" />
      ) : (
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={onClick}
        >
          <img src="/images/add-dark.png" className="w-8 h-8" />
          <span className="text-popoverText text-xs font-medium mt-1">
            Brand Logo
          </span>
        </div>
      )}
      <input
        ref={(ref) => (imageInputRef.current = ref)}
        type="image"
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
