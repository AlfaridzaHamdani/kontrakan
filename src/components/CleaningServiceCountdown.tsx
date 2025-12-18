import React, { useState, useEffect } from 'react';
import { CalendarClock } from 'lucide-react';

const CleaningServiceCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number}>({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      const currentDay = now.getDate();

      let targetDate = new Date(currentYear, currentMonth, 7);

      // If today is past the 7th (or is the 7th), target next month
      if (currentDay >= 7) {
        targetDate = new Date(currentYear, currentMonth + 1, 7);
      }

      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        setTimeLeft({ days, hours, minutes });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 mb-8">
      <div className="bg-retro-blue border-2 border-black shadow-retro p-4 relative overflow-hidden group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-retro-sm transition-all">
        {/* Decorative 'screws' */}
        <div className="absolute top-2 left-2 w-2 h-2 border border-black bg-white rounded-full"></div>
        <div className="absolute top-2 right-2 w-2 h-2 border border-black bg-white rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border border-black bg-white rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border border-black bg-white rounded-full"></div>

        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-3 py-1 shadow-retro-sm mb-3">
             <CalendarClock className="w-5 h-5" />
             <span className="font-bold text-xs uppercase tracking-widest">Next Cleaning</span>
          </div>
          
          <h3 className="font-black text-4xl font-mono tracking-tighter mb-1">
            {String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h
          </h3>

          <div className="mt-4 flex justify-center gap-4 text-xs font-bold opacity-60">
             <div className="flex flex-col items-center">
               <span className="block border-b-2 border-black w-8 mb-1"></span>
               <span>SYSTEM</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="block border-b-2 border-black w-8 mb-1"></span>
               <span>SCHEDULER</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CleaningServiceCountdown;
