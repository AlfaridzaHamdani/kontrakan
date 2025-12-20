import React from 'react';
import { Leaf, Recycle, AlertTriangle } from 'lucide-react';

const Education: React.FC = () => {
  const tips = [
    {
      title: "Organik",
      desc: "Sisa makanan, kulit buah, daun (Mudah busuk).",
      color: "bg-green-50 text-green-700",
      icon: <Leaf className="w-8 h-8 text-green-500 mb-2" />,
      borderColor: "border-green-200"
    },
    {
      title: "Anorganik",
      desc: "Plastik, kaleng, kertas (Bisa didaur ulang).",
      color: "bg-yellow-50 text-yellow-700",
      icon: <Recycle className="w-8 h-8 text-yellow-500 mb-2" />,
      borderColor: "border-yellow-200"
    },
    {
      title: "B3 / Bahaya",
      desc: "Baterai, masker medis, pecahan kaca.",
      color: "bg-red-50 text-red-700",
      icon: <AlertTriangle className="w-8 h-8 text-red-500 mb-2" />,
      borderColor: "border-red-200"
    }
  ];

  return (
    <section className="px-4 mb-24">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
        Edukasi Pemilahan Sampah
      </h3>
      
      <div className="grid grid-cols-1 gap-4">
        {tips.map((tip, idx) => (
          <div key={idx} className={`p-4 rounded-xl border ${tip.borderColor} ${tip.color} shadow-sm transition-transform active:scale-95`}>
            {tip.icon}
            <h4 className="font-bold text-lg mb-1">{tip.title}</h4>
            <p className="text-sm opacity-90 leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
