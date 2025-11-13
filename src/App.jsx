import React from "react";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[390px] h-[844px] bg-slate-900 shadow-2xl overflow-hidden flex flex-col border border-slate-700">
        <Home />
      </div>
    </div>
  );
}
