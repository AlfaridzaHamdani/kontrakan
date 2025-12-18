import React from 'react';
import { Trash2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-retro-cream border-b-2 border-black shadow-retro-sm px-4 py-3 mb-6">
      <div className="max-w-md mx-auto flex items-center justify-center">
        <div className="flex items-center gap-2 font-bold text-xl uppercase tracking-widest border-2 border-black bg-white px-4 py-1 shadow-retro-sm transform -rotate-1">
          <Trash2 className="w-6 h-6" />
          <span>Kontrakan OS</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
