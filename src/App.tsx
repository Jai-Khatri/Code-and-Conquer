import React from 'react';
import Silk from './components/Silk';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CreationsAndCredentials from './pages/CreationsAndCredentials';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fullscreen background canvas */}
      <div className="fixed inset-0 z-0">
        <Silk
          speed={35}
          scale={0.4}
          color="#8800FF"
          noiseIntensity={2}
          rotation={0}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Route outlet */}
      <main className="relative z-10 mt-16 px-4 sm:px-8">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creationsandcredentials" element={<CreationsAndCredentials/>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
