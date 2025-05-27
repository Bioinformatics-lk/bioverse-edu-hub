
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
      {/* Enhanced Animated Bubbles with improved interactivity */}
      <div className="absolute inset-0">
        <div className="floating-bubble bubble-green w-36 h-36 top-10 left-10" style={{animationDelay: '0s'}}></div>
        <div className="floating-bubble bubble-purple w-28 h-28 top-20 right-20" style={{animationDelay: '1s'}}></div>
        <div className="floating-bubble bubble-blue w-44 h-44 bottom-20 left-20" style={{animationDelay: '2s'}}></div>
        <div className="floating-bubble bubble-pink w-32 h-32 bottom-40 right-10" style={{animationDelay: '3s'}}></div>
        <div className="floating-bubble bubble-green w-24 h-24 top-1/3 left-1/4" style={{animationDelay: '4s'}}></div>
        <div className="floating-bubble bubble-purple w-40 h-40 bottom-10 right-1/3" style={{animationDelay: '5s'}}></div>
        <div className="floating-bubble bubble-blue w-20 h-20 top-1/4 right-1/4" style={{animationDelay: '6s'}}></div>
        <div className="floating-bubble bubble-pink w-48 h-48 bottom-1/3 left-1/3" style={{animationDelay: '7s'}}></div>
        <div className="floating-bubble bubble-green w-26 h-26 top-1/2 right-1/5" style={{animationDelay: '8s'}}></div>
        <div className="floating-bubble bubble-blue w-34 h-34 bottom-1/2 left-1/5" style={{animationDelay: '9s'}}></div>
      </div>

      {/* Enhanced Flowing Lines with hover effects */}
      <div className="absolute inset-0 opacity-70">
        <div className="flowing-line top-1/6 w-full" style={{animationDelay: '0s'}}></div>
        <div className="flowing-line top-1/3 w-full" style={{animationDelay: '2s'}}></div>
        <div className="flowing-line top-1/2 w-full" style={{animationDelay: '4s'}}></div>
        <div className="flowing-line top-2/3 w-full" style={{animationDelay: '6s'}}></div>
        <div className="flowing-line top-5/6 w-full" style={{animationDelay: '8s'}}></div>
      </div>

      {/* Enhanced Data Stream Lines with interactivity */}
      <div className="absolute inset-0 opacity-60">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="30%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,150 Q300,100 600,150 T1200,150"
            stroke="url(#streamGradient1)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse flowing-line"
          />
          <path
            d="M0,300 Q300,250 600,300 T1200,300"
            stroke="url(#streamGradient2)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse flowing-line"
            style={{animationDelay: '2s'}}
          />
          <path
            d="M0,450 Q300,500 600,450 T1200,450"
            stroke="url(#streamGradient1)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse flowing-line"
            style={{animationDelay: '4s'}}
          />
          <path
            d="M0,650 Q300,700 600,650 T1200,650"
            stroke="url(#streamGradient2)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse flowing-line"
            style={{animationDelay: '6s'}}
          />
        </svg>
      </div>

      {/* Main Content with enhanced heading size */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-12 leading-tight">
            <span className="block rainbow-text">
              Empowering the Next Generation
            </span>
            <span className="block rainbow-text mt-4">
              of Bioinformatics Professionals
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
