import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paintbrush, Layers, Grid3X3, Maximize, ChevronDown, RotateCcw } from 'lucide-react';
import { useConfigurator } from '../context/ConfiguratorContext';
import materials from '../data/materials.json';
import ThemeSelector from './ThemeSelector';
import FurnitureSelector from './FurnitureSelector';

type Tab = 'materials' | 'themes' | 'furniture';

const sizeOptions = [
  { id: 'small', label: 'Small', desc: 'Compact' },
  { id: 'medium', label: 'Medium', desc: 'Standard' },
  { id: 'large', label: 'Large', desc: 'Spacious' },
] as const;

const CustomizerPanel: React.FC = () => {
  const { state, getCurrentRoomConfig, updateRoomConfig, resetRoom } = useConfigurator();
  const config = getCurrentRoomConfig();
  const [activeTab, setActiveTab] = useState<Tab>('materials');
  const [expandedSection, setExpandedSection] = useState<string | null>('wall');

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'materials', label: 'Materials', icon: <Paintbrush className="w-4 h-4" /> },
    { id: 'themes', label: 'Themes', icon: <Layers className="w-4 h-4" /> },
    { id: 'furniture', label: 'Furniture', icon: <Grid3X3 className="w-4 h-4" /> },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="flex flex-col h-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800/60">
      {/* Tab bar */}
      <div className="flex border-b border-stone-800">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
            className={`flex-1 flex items-center justify-center gap-1.5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 ${
              activeTab === tab.id
                ? 'text-amber-400 border-b-2 border-amber-400 bg-stone-800/40'
                : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/20'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Panel content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <AnimatePresence mode="wait">
          {activeTab === 'materials' && (
            <motion.div
              key="materials"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              {/* Wall */}
              <div className="rounded-xl border border-stone-800/60 overflow-hidden">
                <button
                  onClick={() => toggleSection('wall')}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-stone-800/40 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
                  aria-expanded={expandedSection === 'wall'}
                >
                  <span className="text-stone-200 text-sm font-semibold">Wall Finish</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${expandedSection === 'wall' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedSection === 'wall' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 grid grid-cols-3 gap-2">
                        {materials.wall.map(mat => (
                          <button
                            key={mat.id}
                            onClick={() => updateRoomConfig(state.selectedRoom, { wall: mat.id })}
                            aria-pressed={config.wall === mat.id}
                            title={mat.description}
                            className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                              config.wall === mat.id
                                ? 'bg-amber-400/15 ring-1 ring-amber-400/60'
                                : 'hover:bg-stone-800/60'
                            }`}
                          >
                            <div
                              className="w-10 h-10 rounded-lg border border-stone-700/60 shadow-sm"
                              style={{ backgroundColor: mat.color }}
                              aria-hidden="true"
                            />
                            <span className={`text-xs text-center leading-tight ${config.wall === mat.id ? 'text-amber-400' : 'text-stone-400'}`}>
                              {mat.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floor */}
              <div className="rounded-xl border border-stone-800/60 overflow-hidden">
                <button
                  onClick={() => toggleSection('floor')}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-stone-800/40 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
                  aria-expanded={expandedSection === 'floor'}
                >
                  <span className="text-stone-200 text-sm font-semibold">Floor Material</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${expandedSection === 'floor' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedSection === 'floor' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 grid grid-cols-3 gap-2">
                        {materials.floor.map(mat => (
                          <button
                            key={mat.id}
                            onClick={() => updateRoomConfig(state.selectedRoom, { floor: mat.id })}
                            aria-pressed={config.floor === mat.id}
                            title={mat.description}
                            className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                              config.floor === mat.id
                                ? 'bg-amber-400/15 ring-1 ring-amber-400/60'
                                : 'hover:bg-stone-800/60'
                            }`}
                          >
                            <div
                              className="w-10 h-10 rounded-lg border border-stone-700/60 shadow-sm"
                              style={{ backgroundColor: mat.color }}
                              aria-hidden="true"
                            />
                            <span className={`text-xs text-center leading-tight ${config.floor === mat.id ? 'text-amber-400' : 'text-stone-400'}`}>
                              {mat.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ceiling */}
              <div className="rounded-xl border border-stone-800/60 overflow-hidden">
                <button
                  onClick={() => toggleSection('ceiling')}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-stone-800/40 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
                  aria-expanded={expandedSection === 'ceiling'}
                >
                  <span className="text-stone-200 text-sm font-semibold">Ceiling Style</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${expandedSection === 'ceiling' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedSection === 'ceiling' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
                        {materials.ceiling.map(mat => (
                          <button
                            key={mat.id}
                            onClick={() => updateRoomConfig(state.selectedRoom, { ceiling: mat.id })}
                            aria-pressed={config.ceiling === mat.id}
                            className={`p-3 rounded-lg text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                              config.ceiling === mat.id
                                ? 'bg-amber-400/15 ring-1 ring-amber-400/60'
                                : 'bg-stone-800/40 hover:bg-stone-700/60'
                            }`}
                          >
                            <p className={`text-xs font-semibold mb-0.5 ${config.ceiling === mat.id ? 'text-amber-400' : 'text-stone-300'}`}>
                              {mat.name}
                            </p>
                            <p className="text-stone-500 text-xs">{mat.description}</p>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Room Size */}
              <div className="rounded-xl border border-stone-800/60 overflow-hidden">
                <button
                  onClick={() => toggleSection('size')}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-stone-800/40 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
                  aria-expanded={expandedSection === 'size'}
                >
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-stone-500" />
                    <span className="text-stone-200 text-sm font-semibold">Room Size</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${expandedSection === 'size' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedSection === 'size' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 grid grid-cols-3 gap-2">
                        {sizeOptions.map(size => (
                          <button
                            key={size.id}
                            onClick={() => updateRoomConfig(state.selectedRoom, { size: size.id })}
                            aria-pressed={config.size === size.id}
                            className={`p-3 rounded-lg text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                              config.size === size.id
                                ? 'bg-amber-400/15 ring-1 ring-amber-400/60'
                                : 'bg-stone-800/40 hover:bg-stone-700/60'
                            }`}
                          >
                            <p className={`text-sm font-semibold ${config.size === size.id ? 'text-amber-400' : 'text-stone-300'}`}>
                              {size.label}
                            </p>
                            <p className="text-stone-500 text-xs">{size.desc}</p>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {activeTab === 'themes' && (
            <motion.div
              key="themes"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <ThemeSelector />
            </motion.div>
          )}

          {activeTab === 'furniture' && (
            <motion.div
              key="furniture"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <FurnitureSelector />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Reset button */}
      <div className="p-4 border-t border-stone-800">
        <button
          onClick={() => resetRoom(state.selectedRoom)}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-stone-500 text-sm hover:text-stone-300 hover:bg-stone-800/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Room
        </button>
      </div>
    </div>
  );
};

export default CustomizerPanel;