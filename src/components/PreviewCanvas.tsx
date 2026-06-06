import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfigurator } from '../context/ConfiguratorContext';
import rooms from '../data/rooms.json';
import materials from '../data/materials.json';
import furnitureData from '../data/furniture.json';

const sizeOverlay: Record<string, string> = {
  small: 'Scale: Compact (Small)',
  medium: 'Scale: Standard (Medium)',
  large: 'Scale: Spacious (Large)',
};

const ceilingLabel: Record<string, string> = {
  standard: 'Standard Ceiling',
  false_ceiling: 'False Ceiling with Recessed Lighting',
  wooden_panels: 'Wooden Panel Ceiling',
  coffered: 'Coffered Ceiling',
};

const PreviewCanvas: React.FC = () => {
  const { state, getCurrentRoomConfig } = useConfigurator();
  const config = getCurrentRoomConfig();
  const room = rooms.find(r => r.id === state.selectedRoom);

  const wallMaterial = useMemo(
    () => materials.wall.find(w => w.id === config.wall),
    [config.wall]
  );
  const floorMaterial = useMemo(
    () => materials.floor.find(f => f.id === config.floor),
    [config.floor]
  );

  const furnitureLayouts = (furnitureData as Record<string, { id: string; name: string; description: string; pieces: string[]; image: string }[]>)[state.selectedRoom] || [];
  const activeFurniture = furnitureLayouts.find(l => l.id === config.furniture);

  if (!room) return null;

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-900 shadow-2xl">
      {/* Base room image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`${state.selectedRoom}-${config.furniture}`}
          src={activeFurniture?.image || room.baseImage}
          alt={`${room.name} interior preview with ${activeFurniture?.name || 'default'} furniture layout`}
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Wall color overlay */}
      <AnimatePresence>
        <motion.div
          key={`wall-${config.wall}`}
          className="absolute inset-0"
          style={{
            background: wallMaterial?.color
              ? `${wallMaterial.color}22`
              : 'transparent',
            mixBlendMode: 'multiply',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Floor color strip */}
      <AnimatePresence>
        <motion.div
          key={`floor-${config.floor}`}
          className="absolute bottom-0 left-0 right-0 h-1/4"
          style={{
            background: floorMaterial?.color
              ? `${floorMaterial.color}44`
              : 'transparent',
            mixBlendMode: 'multiply',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/20 pointer-events-none" />

      {/* Room info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {wallMaterial && (
            <span className="inline-flex items-center gap-1.5 bg-stone-950/70 backdrop-blur-sm text-stone-200 text-xs px-3 py-1.5 rounded-full border border-stone-700/50">
              <span
                className="w-3 h-3 rounded-full border border-stone-600 flex-shrink-0"
                style={{ backgroundColor: wallMaterial.color }}
                aria-hidden="true"
              />
              Wall: {wallMaterial.name}
            </span>
          )}
          {floorMaterial && (
            <span className="inline-flex items-center gap-1.5 bg-stone-950/70 backdrop-blur-sm text-stone-200 text-xs px-3 py-1.5 rounded-full border border-stone-700/50">
              <span
                className="w-3 h-3 rounded-full border border-stone-600 flex-shrink-0"
                style={{ backgroundColor: floorMaterial.color }}
                aria-hidden="true"
              />
              Floor: {floorMaterial.name}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 bg-stone-950/70 backdrop-blur-sm text-stone-200 text-xs px-3 py-1.5 rounded-full border border-stone-700/50">
            {ceilingLabel[config.ceiling] || config.ceiling}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-stone-950/70 backdrop-blur-sm text-stone-200 text-xs px-3 py-1.5 rounded-full border border-stone-700/50">
            {sizeOverlay[config.size]}
          </span>
        </div>

        {activeFurniture && (
          <div className="bg-stone-950/70 backdrop-blur-sm rounded-xl p-4 border border-stone-700/40">
            <p className="text-stone-300 text-xs font-mono uppercase tracking-wider mb-2">
              {activeFurniture.name} — {activeFurniture.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {activeFurniture.pieces.map(piece => (
                <span key={piece} className="text-stone-400 text-xs bg-stone-800/60 px-2 py-0.5 rounded-md">
                  {piece}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Room name badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-stone-950/70 backdrop-blur-sm text-amber-400 text-sm font-semibold px-4 py-2 rounded-full border border-amber-400/30">
          {room.name}
        </span>
      </div>
    </div>
  );
};

export default PreviewCanvas;