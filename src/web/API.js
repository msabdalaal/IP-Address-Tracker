import { useEffect, useState } from "react";

export function fetchLocation(ip) {
  let [locationData, SetLocationData] = useState({
    ip: "000.00.000.000",
    country: "$$",
    city: "$$$",
    timezone: {
      utc: "$$$",
    },
    connection: {
      isp: "$$$",
    },
  });
  useEffect(() => {
    async function fetchData() {
      try {
        let result = await fetch(`https://ipwho.is/${ip ? ip : ""}`);
        const data = await result.json();
        data != undefined && SetLocationData(data);
      } catch (error) {
        console.error("not available");
      }
    }
    fetchData();
  }, [ip]);
  return locationData;
}
