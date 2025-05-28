
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BiotechHero = () => {
  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
      {/* Enhanced Animated Bubbles */}
      <div className="absolute inset-0">
        <div className="floating-bubble bubble-green w-20 h-20 top-20 left-20" style={{animationDelay: '0s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-purple w-16 h-16 top-32 right-32" style={{animationDelay: '1s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-blue w-24 h-24 bottom-40 left-40" style={{animationDelay: '2s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-pink w-18 h-18 bottom-60 right-20" style={{animationDelay: '3s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-green w-14 h-14 top-60 left-1/3" style={{animationDelay: '4s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-purple w-22 h-22 bottom-32 right-1/3" style={{animationDelay: '5s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-blue w-12 h-12 top-1/4 right-1/4" style={{animationDelay: '6s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-pink w-26 h-26 bottom-1/4 left-1/4" style={{animationDelay: '7s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-green w-30 h-30 top-1/3 left-10" style={{animationDelay: '8s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-blue w-28 h-28 bottom-1/3 right-10" style={{animationDelay: '9s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-purple w-15 h-15 top-2/3 left-2/3" style={{animationDelay: '10s', opacity: '0.15'}}></div>
        <div className="floating-bubble bubble-pink w-35 h-35 top-10 right-1/3" style={{animationDelay: '11s', opacity: '0.15'}}></div>
      </div>

      {/* Enhanced Flowing Lines */}
      <div className="absolute inset-0 opacity-40">
        <div className="flowing-line top-1/4 w-full" style={{animationDelay: '0s'}}></div>
        <div className="flowing-line top-1/2 w-full" style={{animationDelay: '2s'}}></div>
        <div className="flowing-line top-3/4 w-full" style={{animationDelay: '4s'}}></div>
        <div className="flowing-line top-1/6 w-full" style={{animationDelay: '6s'}}></div>
        <div className="flowing-line top-5/6 w-full" style={{animationDelay: '8s'}}></div>
      </div>

      {/* Enhanced Data Stream Lines */}
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
          <path
            d="M0,400 Q400,350 800,400 T1200,400"
            stroke="url(#streamGradient1)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '1.5s'}}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-12 leading-tight">
            <span className="block text-slate-800">
              Empowering the{' '}
              <span className="hero-rainbow-text font-medium">Next Generation</span>
            </span>
            <span className="block text-slate-800 mt-2">
              of{' '}
              <span className="hero-rainbow-text font-medium">Bioinformatics</span>{' '}
              <span className="hero-rainbow-text font-medium">Professionals</span>
            </span>
          </h1>

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
      </div>
    </section>
  );
};

export default BiotechHero;
