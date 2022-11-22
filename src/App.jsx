import React, { useState } from "react";
import Location from "./Components/Location";
import Map from "./Components/Map";
import BG_Image from "./assets/images/pattern-bg.png";
import "./App.css";

function App() {
  let [ipAddress, setIpAddress] = useState("");
  let [searchVlaue, setSearchVlaue] = useState("");
  let [address, setAdress] = useState("$$$");

  function handleChange(e) {
    setSearchVlaue(e.target.value);
  }
  function handleClick() {
    if (
      searchVlaue.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/gi) ||
      searchVlaue == ""
    ) {
      setIpAddress(searchVlaue);
      setAdress(document.getElementById("Adress").value);
    } else {
      alert("enter valid ip adress");
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }
  return (
    <main className="">
      <img src={BG_Image} alt="" className="fixed -z-10 top-0 h-2/4" />
      <h1 className="text-white text-2xl text-center m-4">
        IP Address Tracker
      </h1>
      <div className="flex items-center justify-center h-max">
        <input
          type="text"
          id="search"
          className="ml-7 rounded-l-lg border-none focus:outline-none text-md leading-10 indent-4 w-96"
          placeholder="Search for any IP address or domain"
          value={searchVlaue}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          tabIndex="-1"
          onClick={handleClick}
          className="mr-7 bold w-10 bg-black text-white h-10 rounded-r-lg"
        >
          {" "}
          &gt;{" "}
        </button>
      </div>
      <Map ip={ipAddress} />
      <Location ip={ipAddress} />
    </main>
  );
}

export default App;
