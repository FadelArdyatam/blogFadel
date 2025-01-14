import React from 'react';
import { Instagram, Mail, MapPin, Phone, Clock, Coffee, Code, Terminal, Github, Linkedin } from 'lucide-react';

const ProgrammerFooter = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Decorative icons */}
        <div className="flex justify-center mb-8">
          <Code className="h-8 w-8 text-amber-200 transform -rotate-12" />
          <Terminal className="h-8 w-8 text-amber-300 mx-4" />
          <Coffee className="h-8 w-8 text-amber-200 transform rotate-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Tentang Saya */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-200">Tentang Saya</h3>
            <p className="text-amber-200/80">
            Being a programmer isn't just about writing code; it's about solving problems, creating solutions, and changing the world.
            </p>
          </div>

          {/* Keahlian */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-200">Keahlian</h3>
            <ul className="space-y-3">
              <li className="text-amber-200/80 flex items-center gap-2">
                <Code className="h-4 w-4" />Frontend: React.js, Vue.js, Tailwind CSS
              </li>
              <li className="text-amber-200/80 flex items-center gap-2">
                <Terminal className="h-4 w-4" />Backend: Node.js, Express, Java
              </li>
              <li className="text-amber-200/80 flex items-center gap-2">
                <Code className="h-4 w-4" />Database: MySQL, MongoDB, Firebase
              </li>
              <li className="text-amber-200/80 flex items-center gap-2">
                <Terminal className="h-4 w-4" />Tools: Git, Docker, AWS
              </li>
            </ul>
          </div>

          {/* Jam Kerja */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-200">Jam Kerja</h3>
            <ul className="text-amber-200/80 space-y-3">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Senin - Jumat: 09:00 - 18:00
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Sabtu: 10:00 - 15:00
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-200">Hubungi Saya</h3>
            <ul className="text-amber-200/80 space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Bandung, Jawa Barat, Indonesia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +62 821-16573216
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                ardyatamafadel68@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition-colors">
            <Github className="h-6 w-6 text-amber-200" />
          </a>
          <a href="#" className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition-colors">
            <Linkedin className="h-6 w-6 text-amber-200" />
          </a>
          <a href="#" className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition-colors">
            <Mail className="h-6 w-6 text-amber-200" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-800 mt-12 pt-8 text-center">
          <p className="text-amber-200/80">© 2025 [Nama Anda]. Dibuat dengan ❤️ dan ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default ProgrammerFooter;