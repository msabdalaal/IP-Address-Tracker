import React, { useEffect, useState } from "react";
import "../App.css";
import { fetchLocation } from "../web/API";

export let locationAdress;
export default function Location({ ip }) {
  let location = fetchLocation(ip);
  return (
    <div className="flex justify-center mt-8">
      <div className="rounded-md w-full mx-7 lg:w-auto text-center lg:text-left p-8 z-10 min-w-[10px] bg-white flex items-center shadow-lg flex-col md:flex-row lg:flex-row">
        <div className="lg:border-r-[1px] lg:pr-8">
          <p className="text-gray-500 font-medium weight">IP ADDRESS</p>
          <h2 className="font-semibold text-xl">{location.ip}</h2>
        </div>
        <div className="lg:pl-8 lg:border-r-[1px] lg:pr-8">
          <p className="text-gray-500 font-medium weight">LOCATION</p>
          <h2 id="Adress" className="font-semibold text-xl">
            {location.city}, {location.country}
          </h2>
        </div>
        <div className="lg:pl-8 lg:border-r-[1px] lg:pr-8">
          <p className="text-gray-500 font-medium weight">TIMEZONE</p>
          <h2 className="font-semibold text-xl">
            {location.timezone.utc}
          </h2>
        </div>
        <div className="lg:pl-8">
          <p className="text-gray-500 font-medium weight">ISP</p>
          <h2 className="font-semibold text-xl">
            {location.connection.isp}
          </h2>
        </div>
      </div>
    </div>
  );
}
