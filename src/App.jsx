import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BlogLayout from './components/bloglayout';
import BlogDetailLayout from './components/blogdetaillayout.jsx';


function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman utama */}
        <Route path="/" element={<BlogLayout />} />
        {/* Route untuk halaman detail postingan */}
        <Route path="/post/:id" element={<BlogDetailLayout />} />
      </Routes>
    </Router>
  );
}

export default App;