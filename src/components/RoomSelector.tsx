import React from 'react';
import { Sofa, BedDouble, Bed, ChefHat, Bath } from 'lucide-react';
import { useConfigurator } from '../context/ConfiguratorContext';
import plans from '../data/plans.json';
import rooms from '../data/rooms.json';

const iconMap: Record<string, React.ReactNode> = {
  living: <Sofa className="w-4 h-4" />,
  'master-bedroom': <BedDouble className="w-4 h-4" />,
  bedroom: <Bed className="w-4 h-4" />,
  kitchen: <ChefHat className="w-4 h-4" />,
  bathroom: <Bath className="w-4 h-4" />,
};

const RoomSelector: React.FC = () => {
  const { state, selectRoom } = useConfigurator();
  const plan = plans.find(p => p.id === state.selectedPlan);
  const availableRooms = rooms.filter(r => plan?.rooms.includes(r.id));

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {availableRooms.map(room => {
        const isActive = state.selectedRoom === room.id;
        return (
          <button
            key={room.id}
            onClick={() => selectRoom(room.id)}
            aria-pressed={isActive}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 focus:ring-offset-stone-900 ${
              isActive
                ? 'bg-amber-400 text-stone-950'
                : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
            }`}
          >
            {iconMap[room.id]}
            {room.name}
          </button>
        );
      })}
    </div>
  );
};

export default RoomSelector;