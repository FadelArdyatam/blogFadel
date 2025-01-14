
import { Instagram, Mail, MapPin } from 'lucide-react';
import { DiReact, DiLaravel, DiNodejs, DiJsBadge, DiPhp, DiJava } from 'react-icons/di';
import Rena from '../assets/Rena.jpg'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Featured Coffee Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-amber-800 shadow-xl">
              <img 
                src={Rena}
                alt="Featured Coffee" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-800 text-amber-50 px-4 py-1 rounded-full text-sm font-medium">
              Available For Jobs
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center md:text-left stroke-amber-700">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Welcome to <span className="text-amber-800">My Blog!</span> ☕
            </h1>
            <p className="text-xl text-amber-800 mb-6 max-w-2xl">
              Programmer Ngantuk
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="flex items-center gap-2 bg-amber-800 text-amber-50 px-10 py-3 rounded-full hover:bg-amber-900 transition-colors">
              <a href='https://wa.me/+6282116573216'>
                Hubungi Saya
            </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-amber-900 text-center mb-12 font-serif">
      Keahlian Saya
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { name: 'React JS', icon: <DiReact className="h-7 w-7" /> },
        { name: 'Laravel', icon: <DiLaravel className="h-7 w-7" /> },
        { name: 'Node JS', icon: <DiNodejs className="h-7 w-7" /> },
        { name: 'JavaScript', icon: <DiJsBadge className="h-7 w-7" /> },
        { name: 'PHP', icon: <DiPhp className="h-7 w-7" /> },
        { name: 'Java', icon: <DiJava className="h-7 w-7" /> },
      ].map((item) => (
        <div
          key={item.name}
          className="bg-amber-50 rounded-lg p-6 text-center hover:shadow-lg transition-all border-2 border-amber-100 hover:border-amber-200"
        >
          <div className="flex justify-center mb-3 text-amber-800">
            {item.icon}
          </div>
          <div className="text-lg font-medium text-amber-900">{item.name}</div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Contact Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4 font-serif">
              Connect!
            </h2>
            <p className="text-amber-800 max-w-2xl mx-auto">
              Mari Bangun Relasi!
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/fmsati" className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Instagram className="h-6 w-6 text-amber-800" />
            </a>
            <a href="#" className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Mail className="h-6 w-6 text-amber-800" />
            </a>
            <a href="#" className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="h-6 w-6 text-amber-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;