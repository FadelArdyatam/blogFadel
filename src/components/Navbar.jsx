import {  Coffee } from 'lucide-react';

const CoffeeNavbar = () => {
  return (
    <div className=" bg-amber-50">
      {/* Navbar */}
      <nav className="bg-brown-900 bg-[url('/api/placeholder/1920/100')] bg-opacity-90 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Coffee className="h-8 w-8 text-amber-200" />
              <span className="text-2xl font-bold text-amber-200 font-serif">FAM</span>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CoffeeNavbar;