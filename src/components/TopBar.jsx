import React from "react";

export default function TopBar() {
  return (
    <div className="bg-[#1E293B] mt-5 mx-5 py-4 px-6 rounded-3xl flex flex-col items-center shadow-lg">
      <span className="text-yellow-400 font-bold text-lg mb-2">Level 4</span>
      <div className="w-full h-2 bg-[#334155] rounded-full overflow-hidden">
        <div className="h-full bg-yellow-400" style={{ width: '60%' }}></div>
      </div>
      <span className="text-slate-400 mt-2 text-sm">450 XP</span>
    </div>
  );
}
