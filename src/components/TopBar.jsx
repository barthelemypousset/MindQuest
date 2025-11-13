import React from "react";

export default function TopBar() {
  return (
    <div className="mx-5 mt-5 mb-2 bg-slate-800 rounded-3xl shadow-md p-4 text-center">
      <p className="text-yellow-400 font-semibold text-sm">Level 4</p>
      <div className="w-full h-2 bg-slate-700 rounded-full mt-2">
        <div className="h-full bg-yellow-400 rounded-full w-[60%]"></div>
      </div>
      <p className="text-slate-400 text-xs mt-2">450 XP</p>
    </div>
  );
}
