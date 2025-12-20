import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

import type { Room } from './RoomTracker';
import type { Bin } from './TrashBinList';

interface CleanlinessReportProps {
  areas?: Room[]; // Deprecated, keeping for interface compat if needed
  bins: Bin[]; // New source of truth
}

const CleanlinessReport: React.FC<CleanlinessReportProps> = ({ bins }) => {
  const total = bins.length;
  const fullCount = bins.filter(b => b.status === 'full').length;
  const emptyCount = total - fullCount;
  const capacityPercentage = Math.round((emptyCount / total) * 100);

  return (
    <section className="px-4 mb-8">
      <div className="bg-white rounded-xl p-5 border-2 border-black shadow-retro-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center justify-between border-b border-gray-200 pb-2">
          <span className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Monitor Kapasitas Sampah
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-bold border ${capacityPercentage === 100 ? 'bg-emerald-100 text-emerald-700 border-emerald-300' : 'bg-amber-100 text-amber-700 border-amber-300'}`}>
            Ready: {emptyCount}/{total}
          </span>
        </h3>

        {/* Progress Bar */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4 border border-gray-300">
          <div 
            className={`h-full transition-all duration-500 flex items-center justify-center text-[10px] text-white font-bold ${capacityPercentage > 50 ? 'bg-emerald-500' : 'bg-red-500'}`}
            style={{ width: `${capacityPercentage}%` }}
          >
            {capacityPercentage}%
          </div>
        </div>

        {fullCount === 0 ? (
          <div className="flex items-center gap-3 text-emerald-700 bg-emerald-50 p-4 rounded-lg text-sm border border-emerald-200">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <span className="font-semibold">Semua tong sampah kosong. Aman untuk membuang sampah!</span>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-red-600 font-bold uppercase flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Perhatian: {fullCount} Tong Penuh
            </p>
            <div className="flex flex-col gap-2">
              {bins.filter(b => b.status === 'full').map(bin => (
                <div key={bin.id} className="flex items-center justify-between bg-red-50 px-3 py-2 rounded border border-red-200 text-sm">
                   <span className="font-bold text-red-800">{bin.name}</span>
                   <span className="text-[10px] bg-red-200 text-red-800 px-2 py-0.5 rounded-full">PENUH</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CleanlinessReport;
