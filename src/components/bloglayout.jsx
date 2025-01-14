import { Menu, Search, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Impor data dari file data.js
import { blogPosts } from './data';
import LandingPage from './landingpage';
import CoffeeNavbar from './Navbar';
import { Coffee } from 'lucide-react';
import CoffeeFooter from './CoffeeFooter';

const BlogLayout = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navbar */}
      <CoffeeNavbar className="" />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Coffee className="h-16 w-16 text-amber-800" />
            </div>

            <h1 className="text-4xl font-extrabold text-amber-900 sm:text-5xl sm:tracking-tight lg:text-6xl font-serif">
              Hello!
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-amber-800">
            Hidup gue sehari-hari penuh sama kode, kopi, plus error messages yang nggak ada habisnya. Tapi tenang aja, selalu ada solusi buat bikin semua tu jalan lancar, pasti ada aja trick-nya!
            </p>

            
          </div>
        </div>
      </div>

      <LandingPage />

      {/* Blog Posts Grid */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {blogPosts.map((post) => (
      <article
        key={post.id}
        className="bg-amber-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-3 py-1 bg-amber-600 text-amber-100 text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-amber-200">{post.readTime}</span>
          </div>
          <h2 className="text-xl font-semibold text-amber-50 mb-2">
            {post.title}
          </h2>
          <p className="text-amber-100 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-amber-200">{post.date}</span>
            <button
              onClick={() => navigate(`/post/${post.id}`)} // Navigasi ke halaman detail
              className="flex items-center text-amber-300 hover:text-amber-50 transition-colors duration-200"
            >
              Baca selengkapnya
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </article>
    ))}
  </div>
</div>


      {/* Kelompok Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Kelompok
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['FADEL ARDYATAMA MUFLIH C2C023006', 'ZIVEN ROLYAN C2C023030', 'KHOIRUDDIN BUDIMAN C2C023008', 'ABEL NAYAKA LAKSAPUTRA C2C023039'].map((Kelompok) => (
              <div key={Kelompok} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-medium text-gray-900">{Kelompok}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Embed YouTube Video */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Video Tutorial</h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/drbPUz5VRPE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>



      {/* Footer */}
      <CoffeeFooter />
    </div>
  );
};

export default BlogLayout;