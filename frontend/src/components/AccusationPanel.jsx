import React, { useState } from "react";

const AccusationPanel = ({ onMakeAccusation, disabled = false }) => {
  const [suspect, setSuspect] = useState("");
  const [weapon, setWeapon] = useState("");
  const [location, setLocation] = useState("");

  const suspects = ["Butler", "Chef", "Gardener"];
  const weapons = ["Knife", "Poison", "Rope"];
  const locations = ["Kitchen", "Library", "Garden"];

  const handleAccuse = () => {
    if (disabled) return;
    if (!suspect || !weapon || !location) {
      alert("Please select all three options!");
      return;
    }
    onMakeAccusation({ suspect, weapon, location });
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-yellow-400/30">
      <h2 className="text-2xl font-bold text-yellow-300 mb-5 pb-2 border-b-2 border-yellow-500/30">
        ⚖️ Make Your Accusation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-200">Suspect:</label>
          <select
            value={suspect}
            onChange={(e) => setSuspect(e.target.value)}
            className="p-3 border-2 border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none bg-gray-800 text-white cursor-pointer"
          >
            <option value="">Select Suspect</option>
            {suspects.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-200">Weapon:</label>
          <select
            value={weapon}
            onChange={(e) => setWeapon(e.target.value)}
            className="p-3 border-2 border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none bg-gray-800 text-white cursor-pointer"
          >
            <option value="">Select Weapon</option>
            {weapons.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-200">Location:</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 border-2 border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none bg-gray-800 text-white cursor-pointer"
          >
            <option value="">Select Location</option>
            {locations.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleAccuse}
        className="w-full mt-5 bg-red-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors duration-300 shadow-lg cursor-pointer"
      >
        🎯 Make Accusation!
      </button>
    </div>
  );
};

export default AccusationPanel;
