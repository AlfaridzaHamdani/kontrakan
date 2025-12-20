import React from 'react';
import { Trash2, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react';

export interface Bin {
  id: string;
  name: string;
  location: string;
  status: 'empty' | 'full';
}

interface TrashBinListProps {
  bins: Bin[];
  onToggleStatus: (id: string) => void;
}

const TrashBinList: React.FC<TrashBinListProps> = ({ bins, onToggleStatus }) => {

  const getWaLink = (binName: string) => {
    const message = `⚠️ *PERINGATAN KEBERSIHAN* ⚠️\n\nLokasi: *${binName}*\nStatus: *PENUH / OVERLOAD* 🔴\n\nMohon kepada penghuni terkait untuk segera mengosongkan tempat sampah ini demi kenyamanan bersama. Terima kasih. 🙏`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="px-4 mb-20">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
        <span className="w-3 h-3 bg-black"></span>
        Laporan Kondisi Tong Sampah
      </h3>

      <div className="space-y-4">
        {bins.map(bin => (
          <div 
            key={bin.id} 
            className={`p-4 border-2 border-black transition-all ${
              bin.status === 'empty' 
                ? 'bg-white shadow-retro-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none' 
                : 'bg-red-200 shadow-retro hover:translate-x-1 hover:translate-y-1 hover:shadow-none'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 border-2 border-black ${bin.status === 'empty' ? 'bg-green-300' : 'bg-red-400'}`}>
                  <Trash2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">{bin.name}</h4>
                  <p className="text-xs font-mono text-gray-600 mt-1">{bin.location}</p>
                </div>
              </div>
              
              <button 
                onClick={() => onToggleStatus(bin.id)}
                className={`px-3 py-1 text-xs font-bold border-2 border-black transition-colors shadow-retro-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px] ${
                  bin.status === 'empty' 
                    ? 'bg-green-300 hover:bg-green-400 text-black' 
                    : 'bg-red-400 hover:bg-red-500 text-black'
                }`}
              >
                {bin.status === 'empty' ? 'KOSONG' : 'PENUH!'}
              </button>
            </div>

            {bin.status === 'full' && (
              <div className="mt-3 pt-3 border-t-2 border-black border-dashed">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold bg-yellow-300 px-2 py-1 border border-black flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    ACTION REQUIRED
                  </span>
                  <a 
                    href={getWaLink(bin.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-3 py-2 border-2 border-black shadow-retro-sm text-xs font-bold active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    LAPOR WA
                  </a>
                </div>
              </div>
            )}
            
            {bin.status === 'empty' && (
               <div className="mt-2 text-xs font-mono flex items-center gap-1 opacity-60">
                 <CheckCircle2 className="w-3 h-3" />
                 Status: OK
               </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrashBinList;
