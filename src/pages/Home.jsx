import React from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import mapImage from "../assets/map.png"; // add your image in /assets

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-1 overflow-hidden">
        <img src={mapImage} alt="Progress map" className="w-full h-full object-cover" />
        <div className="absolute left-1/2 -translate-x-1/2 top-2 z-10 w-11/12">
          <TopBar />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
