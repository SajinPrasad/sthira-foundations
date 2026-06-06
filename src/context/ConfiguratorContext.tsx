import React, { createContext, useContext, useState, useCallback } from 'react';

export interface RoomConfig {
  wall: string;
  floor: string;
  ceiling: string;
  size: 'small' | 'medium' | 'large';
  furniture: string;
  theme: string | null;
}

export interface ConfiguratorState {
  selectedPlan: string | null;
  selectedRoom: string;
  roomConfigs: Record<string, RoomConfig>;
}

const defaultRoomConfig: RoomConfig = {
  wall: 'white_paint',
  floor: 'wood',
  ceiling: 'standard',
  size: 'medium',
  furniture: 'layout_a',
  theme: null,
};

interface ConfiguratorContextType {
  state: ConfiguratorState;
  selectPlan: (planId: string) => void;
  selectRoom: (roomId: string) => void;
  updateRoomConfig: (roomId: string, updates: Partial<RoomConfig>) => void;
  applyTheme: (roomId: string, theme: { wall: string; floor: string; ceiling: string; size: string; furniture: string; id: string }) => void;
  resetRoom: (roomId: string) => void;
  getCurrentRoomConfig: () => RoomConfig;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | null>(null);

export const ConfiguratorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ConfiguratorState>({
    selectedPlan: null,
    selectedRoom: 'living',
    roomConfigs: {},
  });

  const selectPlan = useCallback((planId: string) => {
    setState(prev => ({ ...prev, selectedPlan: planId, selectedRoom: 'living' }));
  }, []);

  const selectRoom = useCallback((roomId: string) => {
    setState(prev => ({ ...prev, selectedRoom: roomId }));
  }, []);

  const updateRoomConfig = useCallback((roomId: string, updates: Partial<RoomConfig>) => {
    setState(prev => ({
      ...prev,
      roomConfigs: {
        ...prev.roomConfigs,
        [roomId]: {
          ...(prev.roomConfigs[roomId] || defaultRoomConfig),
          ...updates,
          theme: null,
        },
      },
    }));
  }, []);

  const applyTheme = useCallback((roomId: string, theme: { wall: string; floor: string; ceiling: string; size: string; furniture: string; id: string }) => {
    setState(prev => ({
      ...prev,
      roomConfigs: {
        ...prev.roomConfigs,
        [roomId]: {
          ...(prev.roomConfigs[roomId] || defaultRoomConfig),
          wall: theme.wall,
          floor: theme.floor,
          ceiling: theme.ceiling,
          size: theme.size as 'small' | 'medium' | 'large',
          furniture: theme.furniture,
          theme: theme.id,
        },
      },
    }));
  }, []);

  const resetRoom = useCallback((roomId: string) => {
    setState(prev => ({
      ...prev,
      roomConfigs: {
        ...prev.roomConfigs,
        [roomId]: { ...defaultRoomConfig },
      },
    }));
  }, []);

  const getCurrentRoomConfig = useCallback((): RoomConfig => {
    return state.roomConfigs[state.selectedRoom] || { ...defaultRoomConfig };
  }, [state.roomConfigs, state.selectedRoom]);

  return (
    <ConfiguratorContext.Provider value={{ state, selectPlan, selectRoom, updateRoomConfig, applyTheme, resetRoom, getCurrentRoomConfig }}>
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  const ctx = useContext(ConfiguratorContext);
  if (!ctx) throw new Error('useConfigurator must be used within ConfiguratorProvider');
  return ctx;
};