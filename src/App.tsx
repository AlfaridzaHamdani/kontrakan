import React, { useState } from 'react';
import Layout from './components/Layout';
import Education from './components/Education';
import RoomTracker, { type Room } from './components/RoomTracker';
import TrashBinList from './components/TrashBinList';
import CleanlinessReport from './components/CleanlinessReport';
import WastePolicy from './components/WastePolicy';
import CommonAreaAlert from './components/CommonAreaAlert';

function App() {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, name: 'Kamar 1 (Rafael & Nuko)', status: 'clean' },
    { id: 2, name: 'Kamar 2 (Alfa)', status: 'full' },
    { id: 3, name: 'Kamar 3 (David)', status: 'clean' },
    { id: 4, name: 'Kamar 4 (Ariq)', status: 'clean' },
    { id: 5, name: 'Kamar 5 (Rafi)', status: 'clean' },
    { id: 6, name: 'Kamar 6 (Adam)', status: 'clean' },
    { id: 7, name: 'Kamar 7 (Baron)', status: 'clean' },
  ]);

  const toggleStatus = (id: number) => {
    setRooms(prev => prev.map(room => {
      if (room.id !== id) return room;
      const nextStatus = room.status === 'clean' ? 'full' : room.status === 'full' ? 'critical' : 'clean';
      return { ...room, status: nextStatus };
    }));
  };

  return (
    <Layout>
      <div className="pt-6">
        <CommonAreaAlert />
        <RoomTracker rooms={rooms} onToggleStatus={toggleStatus} />
        <Education />
        <TrashBinList />
        <CleanlinessReport areas={rooms} />
        <WastePolicy />
      </div>
    </Layout>
  );
}

export default App;
