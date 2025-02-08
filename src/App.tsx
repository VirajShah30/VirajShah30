import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Rocket, Star, Binary, Cpu } from 'lucide-react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <Rocket className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <p className="text-2xl font-space">Initiating Launch Sequence...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white">
      <Navigation />
      <AnimatedBackground />
      <main className="pl-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function AnimatedBackground() {
  const generateRocketStyle = (index: number) => {
    const angle = -45 + (Math.random() * 90 - 45);
    const duration = 6 + Math.random() * 4;
    const startX = Math.random() * 100;
    const xOffset = -50 + Math.random() * 100;

    return {
      bottom: '-50px',
      left: `${startX}%`,
      animation: `none`,
      transform: `rotate(${angle}deg)`,
      transition: 'all linear',
      opacity: '0.6',
      style: {
        animation: `moveRocket${index} ${duration}s linear infinite`,
      }
    };
  };

  const rocketStyles = [...Array(5)].map((_, i) => generateRocketStyle(i));

  useEffect(() => {
    const style = document.createElement('style');
    const keyframes = rocketStyles.map((_, i) => {
      const endX = -50 + Math.random() * 100;
      return `
        @keyframes moveRocket${i} {
          0% {
            transform: translate(0, 0) rotate(${-45 + (Math.random() * 90 - 45)}deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translate(${endX}vw, -120vh) rotate(${-45 + (Math.random() * 90 - 45)}deg);
            opacity: 0;
          }
        }
      `;
    }).join('\n');
    
    style.textContent = keyframes;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <Star
          key={`star-${i}`}
          className="absolute animate-twinkle text-purple-300"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random(),
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
        />
      ))}
      
      {rocketStyles.map((style, i) => (
        <Rocket
          key={`rocket-${i}`}
          className="absolute text-purple-400"
          style={{
            ...style,
            ...style.style,
          }}
        />
      ))}

      {[...Array(10)].map((_, i) => (
        <React.Fragment key={`ai-${i}`}>
          <Binary
            className="absolute animate-float-horizontal text-purple-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 0.8 + 0.5})`,
            }}
          />
          <Cpu
            className="absolute animate-pulse text-purple-600/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `scale(${Math.random() * 0.6 + 0.4})`,
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;