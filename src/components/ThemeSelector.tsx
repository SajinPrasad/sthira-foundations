import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useConfigurator } from '../context/ConfiguratorContext';
import themes from '../data/themes.json';

const ThemeSelector: React.FC = () => {
  const { state, getCurrentRoomConfig, applyTheme } = useConfigurator();
  const config = getCurrentRoomConfig();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <h3 className="text-stone-200 text-sm font-semibold uppercase tracking-wider">Theme Presets</h3>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {themes.map((theme, i) => {
          const isActive = config.theme === theme.id;
          return (
            <motion.button
              key={theme.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => applyTheme(state.selectedRoom, theme)}
              aria-pressed={isActive}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 focus:ring-offset-stone-900 ${
                isActive
                  ? 'bg-amber-400/15 border border-amber-400/50'
                  : 'bg-stone-800/60 border border-stone-700/40 hover:bg-stone-700/60 hover:border-stone-600/60'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${theme.gradient} flex-shrink-0`} aria-hidden="true" />
              <div className="min-w-0">
                <p className={`text-sm font-semibold ${isActive ? 'text-amber-400' : 'text-stone-200'}`}>
                  {theme.name}
                </p>
                <p className="text-stone-500 text-xs truncate">{theme.description}</p>
              </div>
              {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" aria-hidden="true" />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSelector;