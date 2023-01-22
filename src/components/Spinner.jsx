import React from "react";
import loader from "../assets/loader.svg";

export default function Spinner() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={loader} alt="Loading" className="h-24" />
      </div>
    </div>
  );
}
