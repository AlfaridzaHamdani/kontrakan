import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="bg-retro-cream border-2 border-black shadow-retro-lg rounded-xl overflow-hidden min-h-[80vh]">
             {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
