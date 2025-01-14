import { Coffee } from 'lucide-react';

const CoffeeHero = () => {
  return (
    <div className="bg-gradient-to-b from-amber-100 to-amber-50">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <Coffee className="h-16 w-16 text-amber-800" />

            
          </div>
          
          <h1 className="text-4xl font-extrabold text-amber-900 sm:text-5xl sm:tracking-tight lg:text-6xl font-serif">
            Selamat Datang di Kopi Kita
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-amber-800">
            Nikmati secangkir kebahagiaan dengan racikan kopi pilihan terbaik kami
          </p>
          
          <div className="flex justify-center space-x-6">
            <button className="bg-amber-800 text-amber-50 px-8 py-3 rounded-full 
                           font-medium hover:bg-amber-900 transition-colors
                           shadow-lg hover:shadow-xl">
              Pesan Sekarang
            </button>
            <button className="bg-amber-100 text-amber-800 px-8 py-3 rounded-full 
                           font-medium hover:bg-amber-200 transition-colors
                           border-2 border-amber-800">
              Lihat Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeHero;