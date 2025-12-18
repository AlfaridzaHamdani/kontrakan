import React from 'react';
import { MessageCircleWarning } from 'lucide-react';

const ReportButton: React.FC = () => {
  // Nomor Grup WhatsApp atau Ketua Kontrakan
  const phoneNumber = "6281234567890"; 
  const message = "TEMAN-TEMAN! Sampah di depan sudah numpuk parah & mulai bau. @PetugasHariIni tolong dibuang ya. Terima kasih! #SilaKe3";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:right-[calc(50%-220px+1.5rem)] bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 font-bold transition-all hover:scale-105 active:scale-95 z-50 animate-bounce-slow ring-4 ring-red-100"
    >
      <MessageCircleWarning className="w-6 h-6" />
      <span>Colek di WA!</span>
    </a>
  );
}

export default ReportButton;
