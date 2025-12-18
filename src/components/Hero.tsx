import React, { useState } from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const today = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-emerald-50 p-6 rounded-b-[2rem] shadow-sm mb-6">
      <div className="flex items-center text-emerald-700 text-sm font-medium mb-4 gap-2">
        <Calendar className="w-4 h-4" />
        {today}
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 text-center relative overflow-hidden">
        <h2 className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Tugas Piket Hari Ini</h2>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Kamar 5 (Edo)</h1>
        
        {isDone ? (
           <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
             <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-2" />
             <p className="text-emerald-600 font-bold">Terima Kasih, Edo!</p>
             <p className="text-xs text-gray-500">Piket sudah dikonfirmasi.</p>
           </div>
        ) : (
          <button 
            onClick={() => setIsDone(true)}
            className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-emerald-200"
          >
            Konfirmasi Sudah Buang
          </button>
        )}
      </div>
    </div>
  );
}

export default Hero;
