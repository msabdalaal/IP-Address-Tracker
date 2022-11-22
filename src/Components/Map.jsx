import React, { useEffect, useState } from "react";
import "../App.css";
import { fetchLocation } from "../web/API";

function Map({ ip }) {
  let location = fetchLocation(ip);
  return (
    <>
      <iframe
        title="My-Map"
        name="My-Map"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBKCYCieqUIjeJp1EBc8MBQw8zvSjJooZU
    &q=${location.city}`}
        className="w-full absolute bottom-0 h-4/6"
      ></iframe>
    </>
  );
}

export default Map;
