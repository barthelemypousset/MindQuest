
import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import GamesScreen from "./screens/GamesScreen";
import InventoryScreen from "./screens/InventoryScreen";

const TABS = [
  { name: "Progression", component: <HomeScreen /> },
  { name: "Games", component: <GamesScreen /> },
  { name: "Inventory", component: <InventoryScreen /> },
];

export default function AppNavigator() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <div className="flex justify-around items-center bg-[#1E293B] h-[70px] border-t-0">
        {TABS.map((tab, idx) => (
          <button
            key={tab.name}
            className={`flex-1 py-3 text-lg font-semibold transition-colors duration-200 ${
              activeTab === idx ? "text-yellow-400" : "text-slate-400"
            }`}
            style={{ background: "none", border: "none", outline: "none" }}
            onClick={() => setActiveTab(idx)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="flex-1">
        {TABS[activeTab].component}
      </div>
    </div>
  );
}
