import React from "react";

export default function BottomBar() {
  return (
    <div className="bg-slate-800 h-[70px] flex justify-around items-center border-t border-slate-700">
      <button className="text-slate-400 text-base font-semibold hover:text-yellow-400">
        🎮 Games
      </button>
      <button className="text-yellow-400 text-base font-semibold">
        🗺️ Progress
      </button>
      <button className="text-slate-400 text-base font-semibold hover:text-yellow-400">
        🎒 Inventory
      </button>
    </div>
  );
}
