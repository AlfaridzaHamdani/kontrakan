import React, { useState } from 'react';
import Layout from './components/Layout';
import Education from './components/Education';
import RoomTracker, { type Room } from './components/RoomTracker';
import TrashBinList, { type Bin } from './components/TrashBinList';
import CleanlinessReport from './components/CleanlinessReport';
import WastePolicy from './components/WastePolicy';
import CommonAreaAlert from './components/CommonAreaAlert';

function App() {
  const [bins, setBins] = useState<Bin[]>(() => {
    const saved = localStorage.getItem('kontrakan_bin_data_v3');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 'LGA', name: 'Lorong Garasi A', location: 'Area Depan (Rafael & Nuko)', status: 'empty' },
      { id: 'LGB', name: 'Lorong Garasi B', location: 'Area Depan (Rafael & Nuko)', status: 'empty' },
      { id: 'LGC', name: 'Lorong Garasi C', location: 'Area Tengah (Alfa)', status: 'full' },
      { id: 'LDA', name: 'Lorong Dalam A', location: 'Area Depan (Ariq, Rafi, Adam, Baron)', status: 'empty' },
      { id: 'LDB', name: 'Lorong Dalam B', location: 'Area Belakang (David)', status: 'empty' },
    ];
  });

  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, name: 'Kamar 1 (Rafael & Nuko)', status: 'clean' },
    { id: 2, name: 'Kamar 2 (Alfa)', status: 'full' },
    { id: 3, name: 'Kamar 3 (David)', status: 'clean' },
    { id: 4, name: 'Kamar 4 (Ariq)', status: 'clean' },
    { id: 5, name: 'Kamar 5 (Rafi)', status: 'clean' },
    { id: 6, name: 'Kamar 6 (Adam)', status: 'clean' },
    { id: 7, name: 'Kamar 7 (Baron)', status: 'clean' },
  ]);

  React.useEffect(() => {
    localStorage.setItem('kontrakan_bin_data_v3', JSON.stringify(bins));
  }, [bins]);

  const toggleBinStatus = (id: string) => {
    setBins(prev => prev.map(bin => {
      if (bin.id !== id) return bin;
      return {
        ...bin,
        status: bin.status === 'empty' ? 'full' : 'empty'
      };
    }));
  };

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
        <RoomTracker rooms={rooms} bins={bins} onToggleStatus={toggleStatus} />
        <Education />
        <TrashBinList bins={bins} onToggleStatus={toggleBinStatus} />
        <CleanlinessReport bins={bins} />
        <WastePolicy />
      </div>
    </Layout>
  );
}

export default App;
