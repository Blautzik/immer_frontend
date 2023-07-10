"use client";
import React, { useState } from "react";
import { BsSearch, BsBellFill } from "react-icons/bs";
import customSelectStyle from "./myComponent.module.css";

const EventBrowserHeader = () => {
  const [selectedLocation, setSelectedLocation] = useState("Los Angeles,CA");

  return (
    <header className="flex flex-row w-full justify-between items-center  pl-8 pr-8 pt-4 bg-primary text-white">
      <div className="text-center p-1">
        <BsSearch />
      </div>
      <div>
        <div
          style={{
            color: "#F4F4FE",
            fontWeight: "500",
            fontSize: "11px",
            lineHeight: "normal",
          }}
          className="text-center text-sm font-thin flex items-center opacity-70"
        >
          <select
            className={`bg-primary text-white text-center ml-3 items-center ${customSelectStyle.customSelect}`}
            value={selectedLocation}
            placeholder="Current Location"
            onChange={(e) => {
              setSelectedLocation(e.target.value);
            }}
          >
            <option hidden defaultChecked>
              Current Location
            </option>
            <option className="mt-8" value={"London"}>
              London
            </option>
            <option value={"New York"}>New York</option>
            <option value={"Cape Town"}>Cape Town</option>
            <option value={"Los Angeles, CA"}>Los Angeles,CA</option>
          </select>
        </div>
        <div
          style={{
            color: "#F4F4FE",
            fontWeight: "500",
          }}
          className="text-center"
        >
          {selectedLocation}
        </div>
      </div>
      <div className=" text-center p-1">
        <BsBellFill />
      </div>
    </header>
  );
};

export default EventBrowserHeader;
