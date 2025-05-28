import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BiotechHero = () => {
  const heroText = "Empowering the Next Generation of Bioinformatics Professionals";
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      {/* Animated Bubbles */}
      <div className="absolute inset-0">
        <div className="floating-bubble bubble-green w-20 h-20 top-20 left-20" style={{animationDelay: '0s'}}></div>
        <div className="floating-bubble bubble-purple w-16 h-16 top-32 right-32" style={{animationDelay: '1s'}}></div>
        <div className="floating-bubble bubble-blue w-24 h-24 bottom-40 left-40" style={{animationDelay: '2s'}}></div>
        <div className="floating-bubble bubble-pink w-18 h-18 bottom-60 right-20" style={{animationDelay: '3s'}}></div>
        <div className="floating-bubble bubble-green w-14 h-14 top-60 left-1/3" style={{animationDelay: '4s'}}></div>
        <div className="floating-bubble bubble-purple w-22 h-22 bottom-32 right-1/3" style={{animationDelay: '5s'}}></div>
        <div className="floating-bubble bubble-blue w-12 h-12 top-1/4 right-1/4" style={{animationDelay: '6s'}}></div>
        <div className="floating-bubble bubble-pink w-26 h-26 bottom-1/4 left-1/4" style={{animationDelay: '7s'}}></div>
      </div>

      {/* Flowing Lines */}
      <div className="absolute inset-0 opacity-40">
        <div className="flowing-line top-1/4 w-full" style={{animationDelay: '0s'}}></div>
        <div className="flowing-line top-1/2 w-full" style={{animationDelay: '2s'}}></div>
        <div className="flowing-line top-3/4 w-full" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Data Stream Lines */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke="url(#streamGradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,600 Q300,650 600,600 T1200,600"
            stroke="url(#streamGradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '3s'}}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
          {heroText.split('').map((char, index) => (
            <span 
              key={index}
              className="inline-block color-accent-text"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join Sri Lanka's premier bioinformatics education platform. Master cutting-edge computational biology techniques, 
          from molecular modeling to AI-driven drug discovery, guided by world-class researchers and industry experts.
        </p>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="professional-button text-lg px-10 py-4 font-light"
            onClick={scrollToCourses}
          >
            Explore Courses
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BiotechHero;
