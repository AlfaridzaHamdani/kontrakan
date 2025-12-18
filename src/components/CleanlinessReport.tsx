import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

interface Area {
  id: string;
  name: string;
  status: 'clean' | 'dirty';
  type: 'room' | 'common';
}

interface CleanlinessReportProps {
  areas: Area[];
}

const CleanlinessReport: React.FC<CleanlinessReportProps> = ({ areas }) => {
  const total = areas.length;
  const cleanCount = areas.filter(a => a.status === 'clean').length;
  const percentage = Math.round((cleanCount / total) * 100);
  const dirtyAreas = areas.filter(a => a.status === 'dirty');

  return (
    <section className="px-4 mb-8">
      <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center justify-between">
          <span>Laporan Kebersihan</span>
          <span className={`px-2 py-1 rounded-full text-xs ${percentage === 100 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
            Skor: {percentage}%
          </span>
        </h3>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div 
            className={`h-full transition-all duration-500 rounded-full ${percentage > 80 ? 'bg-emerald-500' : percentage > 50 ? 'bg-amber-500' : 'bg-red-500'}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {dirtyAreas.length === 0 ? (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-3 rounded-lg text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Luar biasa! Semua area bersih.</span>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-xs text-gray-500 font-semibold uppercase">Perlu Dibersihkan ({dirtyAreas.length}):</p>
            <div className="flex flex-wrap gap-2">
              {dirtyAreas.map(area => (
                <span key={area.id} className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded-md text-xs font-medium border border-red-100">
                  <AlertTriangle className="w-3 h-3" />
                  {area.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CleanlinessReport;
