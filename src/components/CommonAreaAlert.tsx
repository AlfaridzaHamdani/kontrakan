import React from 'react';
import { Megaphone, ArrowRight } from 'lucide-react';

const CommonAreaAlert: React.FC = () => {
  const message = "🚨 *WOY KOTOR BANGET BRO* 🚨\n\nLokasi: *Dapur / Lorong*\n\nSiapapun yang abis make atau nyampah, tolong banget dibersihin ya. Jangan jorok lah, biar kontrakan kita enak dipandang. \n\n*Gas bersihin skuy!* 🔥";
  const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  return (
    <div className="px-4 mb-8 pt-4">
       <div className="bg-white border-2 border-black shadow-retro p-0 overflow-hidden relative">
         <div className="bg-red-400 border-b-2 border-black px-3 py-1 flex items-center justify-between">
           <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-black">
             <Megaphone className="w-4 h-4" />
             System Alert
           </div>
           <div className="flex gap-1">
             <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
             <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
           </div>
         </div>
         
         <div className="p-4 relative z-10">
             <h2 className="text-xl font-bold mb-2 uppercase underline decoration-2 underline-offset-2">Dapur & Lorong</h2>
             <p className="text-sm font-mono mb-4 border-l-4 border-black pl-3 py-1 bg-gray-50">
               {message.split('\n\n')[2]} {/* Hack to show just the body text nicely if needed, or just keep as is */}
               Jangan jorok lah, biar kontrakan kita enak dipandang.
             </p>

             <a 
               href={waLink}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-4 border-2 border-black shadow-retro-sm flex items-center justify-center gap-2 transition-all active:shadow-none active:translate-x-1 active:translate-y-1"
             >
               <span>GAS BERSIHIN SKUY!</span>
               <ArrowRight className="w-4 h-4" />
             </a>
         </div>
       </div>
    </div>
  );
}

export default CommonAreaAlert;
