import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-8">
      <div className="max-w-md mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} E-Piket Mahasiswa.
        </p>
        <div className="flex flex-col items-center gap-1 text-xs text-emerald-600 font-medium">
          <span className="bg-emerald-50 px-3 py-1 rounded-full">Sila ke-3: Persatuan Indonesia</span>
          <span className="bg-emerald-50 px-3 py-1 rounded-full">Sila ke-5: Keadilan Sosial</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
