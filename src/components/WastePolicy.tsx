import React from 'react';
import { Globe2, HeartHandshake } from 'lucide-react';

const WastePolicy: React.FC = () => {
  return (
    <section className="px-4 mb-24">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
        <span className="w-3 h-3 bg-black"></span>
        Aturan dan Kesepakatan Kontrakan
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-5 border-2 border-black shadow-retro-sm hover:shadow-retro transition-all group">
          <div className="bg-retro-blue border-2 border-black p-3 w-12 h-12 flex items-center justify-center mb-3 group-hover:rotate-6 transition-transform">
             <Globe2 className="w-6 h-6 text-black" />
          </div>
          <div>
            <h4 className="font-bold text-lg underline decoration-wavy decoration-retro-pink">SDG 11: Lingkungan</h4>
            <p className="text-xs font-mono mt-2 leading-relaxed">
              Kita jaga kontrakan ini tetap bersih & layak huni. #SustainableLiving
            </p>
          </div>
        </div>

        <div className="bg-white p-5 border-2 border-black shadow-retro-sm hover:shadow-retro transition-all group">
          <div className="bg-retro-pink border-2 border-black p-3 w-12 h-12 flex items-center justify-center mb-3 group-hover:-rotate-6 transition-transform">
             <HeartHandshake className="w-6 h-6 text-black" />
          </div>
          <div>
            <h4 className="font-bold text-lg underline decoration-wavy decoration-retro-blue">SDG 12: Konsumsi</h4>
            <p className="text-xs font-mono mt-2 leading-relaxed">
              Kurangi plastik. Pisahkan botol/kardus. Hemat pangkal kaya!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WastePolicy;
