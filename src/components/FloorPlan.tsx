import React from 'react';

interface Area {
  id: string;
  name: string;
  status: 'clean' | 'dirty';
  gridArea?: string; // Optional custom grid placement if needed specific CSS classes
}

interface FloorPlanProps {
  areas: Area[];
  onToggle: (id: string) => void;
}

const FloorPlan: React.FC<FloorPlanProps> = ({ areas, onToggle }) => {
  const getAreaColor = (status: 'clean' | 'dirty') => {
    return status === 'clean' 
      ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border-emerald-300' 
      : 'bg-red-100 hover:bg-red-200 text-red-800 border-red-300';
  };

  // Helper to find area by ID to render in specific grid slot
  const renderArea = (id: string, customClass: string = "") => {
    const area = areas.find(a => a.id === id);
    if (!area) return <div className="bg-gray-100 rounded-lg"></div>;
    return (
      <button 
        onClick={() => onToggle(id)}
        className={`w-full h-full min-h-[80px] rounded-lg border-2 flex flex-col items-center justify-center p-2 transition-all active:scale-95 ${getAreaColor(area.status)} ${customClass}`}
      >
        <span className="font-bold text-xs text-center">{area.name}</span>
        <span className="text-[10px] uppercase opacity-75">{area.status === 'clean' ? 'Bersih' : 'Kotor'}</span>
      </button>
    );
  };

  return (
    <section className="px-4 mb-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
        Denah Kebersihan (Klik area)
      </h3>
      
      {/* Grid Layout based on the visual requirements */}
      {/* 3 Columns. CSS Grid Template Areas approach would be ideal, or just flex/grid composition */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        <div className="grid grid-cols-3 gap-3 min-w-[300px]">
          {/* Column 1: Teras, Garasi, Kamar, Kamar, Toilet */}
          <div className="flex flex-col gap-3">
             {renderArea('teras-1', 'h-20')}
             {renderArea('garasi', 'h-32')}
             {renderArea('kamar-1', 'h-24')}
             {renderArea('kamar-2', 'h-24')}
             {renderArea('toilet', 'h-16')}
             {renderArea('lorong-1', 'h-16 bg-gray-50 border-gray-200')}
          </div>

          {/* Column 2: Teras, Kamar, Kamar, Kamar, Common(Lorong) */}
          <div className="flex flex-col gap-3">
            {renderArea('teras-2', 'h-20')}
            {renderArea('kamar-3', 'h-24')}
            {renderArea('kamar-4', 'h-24')}
            {renderArea('kamar-5', 'h-24')}
            {renderArea('lorong', 'h-32')} {/* Hallway connecting everything */}
          </div>

          {/* Column 3: Teras, Kamar(Big), Kamar */}
          <div className="flex flex-col gap-3">
             {renderArea('teras-3', 'h-20')}
             {renderArea('kamar-6', 'h-48')} {/* Big room */}
             {renderArea('kamar-7', 'h-24')}
             {renderArea('lorong-3', 'h-full bg-gray-50 border-gray-200')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FloorPlan;
