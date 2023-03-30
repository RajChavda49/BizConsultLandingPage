import React from "react";
import { Link } from "react-router-dom";

const TitleSection = ({ title, smallTitle }) => {
  return (
    <div className="w-full gap-y-5 flex justify-center flex-col items-center h-80 bg-primary text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="space-x-3">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="cursor-pointer">Pages</span>
        <span>/</span>
        <span>{smallTitle}</span>
      </p>
    </div>
  );
};

export default TitleSection;
