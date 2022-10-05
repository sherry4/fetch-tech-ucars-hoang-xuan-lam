import React from "react";
import classnames from "classnames";
import classNames from "classnames";

export default function Button(props) {
  return (
    <button
      {...props}
      className={classnames(
        "text-center cursor-pointer",
        "rounded-lg",
        {
          "bg-buttonRed text-white": props.type == "red",
          "bg-blueText text-white": props.type == "blue",
        },
        props.className
      )}
    >
      <div
        className={classNames("flex items-center", {
          "gap-x-3": props.label && props.image,
        })}
      >
        {props.image && <img src={props.image} className="w-6 h-6" />}
        <span>{props.label || ""}</span>
      </div>
    </button>
  );
}
