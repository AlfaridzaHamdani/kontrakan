import React from 'react';
// import { CheckCircle2, AlertCircle, Trash2 } from 'lucide-react';

export interface Room {
  id: number;
  name: string;
  status: 'clean' | 'full' | 'critical';
}

import type { Bin } from './TrashBinList';

interface RoomTrackerProps {
  rooms: Room[];
  bins: Bin[];
  onToggleStatus?: (id: number) => void; // Optional or deprecated
}

const RoomTracker: React.FC<RoomTrackerProps> = ({ rooms, bins }) => {
  // Map Room ID to Bin ID
  const getRoomBin = (roomId: number) => {
    switch(roomId) {
      case 1: return bins.find(b => b.id === 'LGA'); // Rafael & Nuko (Primary A, maybe B valid too but just pointing to A is safe for status check)
      case 2: return bins.find(b => b.id === 'LGC'); // Alfa
      case 3: return bins.find(b => b.id === 'LDB'); // David (Moved to Dalam B)
      case 4: return bins.find(b => b.id === 'LDA'); // Ariq (Moved to Dalam A)
      case 5: return bins.find(b => b.id === 'LDA'); // Rafi (Moved to Dalam A)
      case 6: return bins.find(b => b.id === 'LDA'); // Adam (Moved to Dalam A)
      case 7: return bins.find(b => b.id === 'LDA'); // Baron (Moved to Dalam A)
      default: return undefined;
    }
  };




  return (
    <section className="px-4 mb-8">
       <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
        Status Kamar & Akses
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {rooms.map(room => {
          const assignedBin = getRoomBin(room.id);
          const isBinFull = assignedBin?.status === 'full';
          
          return (
          <div 
            key={room.id}
            className={`p-3 rounded-xl border-2 flex flex-col items-start gap-2 text-left relative overflow-hidden transition-colors ${
              // If bin is full, show warning bg, otherwise standard room status
              isBinFull ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'
            }`}
          >
            <div className="flex justify-between w-full relative z-10">
              <span className="font-bold text-sm text-gray-800">{room.name}</span>
            </div>
            
            <div className="mt-1 text-xs text-gray-600 relative z-10 w-full">
              <div className="font-mono text-[10px] opacity-75 uppercase">Akses Tong Sampah:</div>
              <div className="font-bold truncate" title={assignedBin?.name}>{assignedBin?.name || '-'}</div>
              
              <div className={`mt-2 py-1 px-2 rounded font-bold text-center border ${isBinFull ? 'bg-red-100 text-red-700 border-red-300' : 'bg-emerald-100 text-emerald-700 border-emerald-300'}`}>
                 {isBinFull ? '⛔ TAHAN DULU' : '✅ BOLEH BUANG'}
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
}

export default RoomTracker;
