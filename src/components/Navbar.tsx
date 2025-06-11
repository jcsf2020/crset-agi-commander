import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-white font-bold text-xl">CRSET Solutions</span>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
