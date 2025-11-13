import React from "react";
import TopBar from "../components/TopBar";
import mainScreen from '../../assets/main.png';

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <div className="flex flex-1 items-center justify-center">
        <img src={mainScreen} alt="Progression Map" className="object-cover w-full h-full rounded-2xl max-w-xs" />
      </div>
    </div>
  );
}
