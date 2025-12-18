import React from 'react';


const Schedule: React.FC = () => {
  const schedule = [
    { day: 'Senin', room: 'Kamar 1', name: 'Dinda', active: false },
    { day: 'Selasa', room: 'Kamar 2', name: 'Rian', active: false },
    { day: 'Rabu', room: 'Kamar 3', name: 'Siti', active: false },
    { day: 'Kamis', room: 'Kamar 4', name: 'Budi', active: false },
    { day: 'Jumat', room: 'Kamar 5', name: 'Edo', active: true },
    { day: 'Sabtu', room: 'Kamar 6', name: 'Fani', active: false },
    { day: 'Minggu', room: 'Kamar 7', name: 'Gilang', active: false },
  ];

  return (
    <section className="px-4 mb-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
        Jadwal Piket Mingguan
      </h3>

      <div className="space-y-3">
        {schedule.map((item, idx) => (
          <div key={idx} className={`flex items-center gap-4 p-3 rounded-xl border ${item.active ? 'bg-emerald-50 border-emerald-200 ring-1 ring-emerald-100' : 'bg-white border-gray-100'} shadow-sm`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.active ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
              {item.day.substring(0, 3)}
            </div>
            <div className="flex-1">
              <h4 className={`font-semibold ${item.active ? 'text-emerald-900' : 'text-gray-800'}`}>{item.name}</h4>
              <p className="text-xs text-gray-500">{item.room}</p>
            </div>
            {item.active && (
              <span className="text-xs font-bold text-emerald-600 bg-white px-2 py-1 rounded-md border border-emerald-100">
                Hari Ini
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Schedule;
