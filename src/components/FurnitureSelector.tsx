import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Check } from 'lucide-react';
import { useConfigurator } from '../context/ConfiguratorContext';
import furnitureData from '../data/furniture.json';

const FurnitureSelector: React.FC = () => {
  const { state, getCurrentRoomConfig, updateRoomConfig } = useConfigurator();
  const config = getCurrentRoomConfig();
  const layouts = (furnitureData as Record<string, { id: string; name: string; description: string; pieces: string[] }[]>)[state.selectedRoom] || [];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <LayoutGrid className="w-4 h-4 text-amber-400" />
        <h3 className="text-stone-200 text-sm font-semibold uppercase tracking-wider">Furniture Layout</h3>
      </div>
      <div className="space-y-2">
        {layouts.map((layout, i) => {
          const isActive = config.furniture === layout.id;
          return (
            <motion.button
              key={layout.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => updateRoomConfig(state.selectedRoom, { furniture: layout.id })}
              aria-pressed={isActive}
              className={`w-full p-3 rounded-xl text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 focus:ring-offset-stone-900 ${
                isActive
                  ? 'bg-amber-400/15 border border-amber-400/50'
                  : 'bg-stone-800/60 border border-stone-700/40 hover:bg-stone-700/60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className={`text-sm font-semibold mb-1 ${isActive ? 'text-amber-400' : 'text-stone-200'}`}>
                    {layout.name}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">{layout.description}</p>
                </div>
                {isActive && (
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                )}
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {layout.pieces.map(piece => (
                  <span key={piece} className="text-stone-500 text-xs bg-stone-800 px-1.5 py-0.5 rounded">
                    {piece}
                  </span>
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default FurnitureSelector;