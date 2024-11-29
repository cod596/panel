import React, { useState } from 'react';

interface Cheat {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

const defaultCheats: Cheat[] = [
  { id: 1, name: 'Auto Aim', description: 'Automatically aims at the enemy', isActive: false },
  { id: 2, name: 'Wall Hack', description: 'See enemies through walls', isActive: false },
  { id: 3, name: 'Speed Hack', description: 'Increase movement speed', isActive: false },
  { id: 4, name: 'Infinite Ammo', description: 'Unlimited ammo for all guns', isActive: false },
  { id: 5, name: 'No Recoil', description: 'No recoil when shooting', isActive: false },
];

const CheatPanel = () => {
  const [cheats, setCheats] = useState(defaultCheats);

  const handleToggleCheat = (id: number) => {
    setCheats(cheats.map((cheat) => (cheat.id === id ? { ...cheat, isActive: !cheat.isActive } : cheat)));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-white mb-4">Free Fire Cheat Panel</h2>
      <ul>
        {cheats.map((cheat) => (
          <li key={cheat.id} className="flex items-center justify-between py-2">
            <div>
              <h3 className="text-white font-medium">{cheat.name}</h3>
              <p className="text-gray-400 text-sm">{cheat.description}</p>
            </div>
            <button
              className={`px-4 py-2 rounded-lg ${cheat.isActive ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-800'} text-white`}
              onClick={() => handleToggleCheat(cheat.id)}
            >
              {cheat.isActive ? 'Enabled' : 'Disabled'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheatPanel;