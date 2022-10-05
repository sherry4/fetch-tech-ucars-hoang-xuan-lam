import React from "react";

export default function index({ image, title, description }) {
  return (
    <article className="flex flex-col items-center">
      <img src={image} className="h-32" />
      <h2 className="font-medium text-white text-2xl mt-12 mb-3">{title}</h2>
      <p className="text-white">{description}</p>
    </article>
  );
}
