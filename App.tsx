
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
} from 'lucide-react';
import { Slide1, Slide2, Slide3, Slide4 } from './components/Slides';

const slides = [Slide1, Slide2, Slide3, Slide4];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <div className="relative slide-container bg-slide-bg w-full shadow-2xl rounded-xl overflow-hidden font-comfortaa">
        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full border-[20px] border-slide-font"></div>
          <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] rounded-full border-[15px] border-accent-teal"></div>
          <div className="absolute top-[20%] right-[10%] w-[10%] h-[10%] rounded-full bg-accent-red blur-2xl"></div>
        </div>

        {/* Current Slide */}
        <div className="relative w-full h-full p-12 flex flex-col z-10">
          <CurrentSlideComponent />
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-6 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevSlide}
            className="p-2 bg-accent-dark/40 hover:bg-accent-dark/60 rounded-full transition-colors text-slide-font"
            title="Предыдущий слайд"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-slide-font w-6' : 'bg-slide-font/30 hover:bg-slide-font/50'}`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="p-2 bg-accent-dark/40 hover:bg-accent-dark/60 rounded-full transition-colors text-slide-font"
            title="Следующий слайд"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Keyboard Hint */}
      <div className="fixed bottom-4 right-4 text-neutral-500 text-xs font-comfortaa pointer-events-none">
        Используйте стрелки или пробел для навигации
      </div>
    </div>
  );
};

export default App;
