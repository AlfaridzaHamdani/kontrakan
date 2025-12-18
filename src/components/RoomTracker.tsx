import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Trash2 } from 'lucide-react';

interface Room {
  id: number;
  name: string;
  status: 'clean' | 'full' | 'critical';
}

const RoomTracker: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, name: 'Kamar 1 (Dinda)', status: 'clean' },
    { id: 2, name: 'Kamar 2 (Rian)', status: 'full' },
    { id: 3, name: 'Kamar 3 (Siti)', status: 'clean' },
    { id: 4, name: 'Kamar 4 (Budi)', status: 'clean' },
    { id: 5, name: 'Kamar 5 (Edo)', status: 'critical' },
    { id: 6, name: 'Kamar 6 (Fani)', status: 'clean' },
    { id: 7, name: 'Kamar 7 (Gilang)', status: 'full' },
  ]);

  const toggleStatus = (id: number) => {
    setRooms(prev => prev.map(room => {
      if (room.id !== id) return room;
      const nextStatus = room.status === 'clean' ? 'full' : room.status === 'full' ? 'critical' : 'clean';
      return { ...room, status: nextStatus };
    }));
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'clean': return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'full': return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'critical': return 'bg-red-50 border-red-200 text-red-700';
      default: return 'bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'clean': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'full': return <AlertCircle className="w-5 h-5 text-amber-500" />;
      case 'critical': return <Trash2 className="w-5 h-5 text-red-500 animate-bounce" />;
    }
  };

  return (
    <section className="px-4 mb-8">
       <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
        Status Sampah Kamar
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {rooms.map(room => (
          <button 
            key={room.id}
            onClick={() => toggleStatus(room.id)}
            className={`p-4 rounded-xl border-2 flex flex-col items-start gap-2 transition-all active:scale-95 text-left ${getStatusColor(room.status)}`}
          >
            <div className="flex justify-between w-full">
              <span className="font-bold text-sm bg-white/50 px-2 py-1 rounded-md">{room.name}</span>
              {getStatusIcon(room.status)}
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider">
              {room.status === 'clean' ? 'Bersih' : room.status === 'full' ? 'Hampir Penuh' : 'Penuh!'}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default RoomTracker;
