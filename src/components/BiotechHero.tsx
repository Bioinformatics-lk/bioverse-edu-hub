
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden light-biotech-bg">
      {/* Dynamic Color Lines Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Flowing color lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent gradient-animation"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent gradient-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent gradient-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Floating colorful nodes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full color-pulse"></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-purple-400 rounded-full color-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-green-400 rounded-full color-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-60 right-20 w-4 h-4 bg-pink-400 rounded-full color-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-indigo-400 rounded-full color-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-emerald-400 rounded-full color-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Subtle Data Stream Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lightStreamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lightStreamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke="url(#lightStreamGradient1)"
            strokeWidth="2"
            fill="none"
            className="gradient-animation"
          />
          <path
            d="M0,600 Q300,650 600,600 T1200,600"
            stroke="url(#lightStreamGradient2)"
            strokeWidth="2"
            fill="none"
            className="gradient-animation"
            style={{animationDelay: '3s'}}
          />
        </svg>
      </div>

      {/* Main Content - Perfectly Centered */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Tagline with Color Accent */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight">
            <span className="block text-gray-800">
              Empowering the{' '}
              <span className="color-accent-text font-medium">Next Generation</span>
            </span>
            <span className="block text-gray-800 mt-2">
              of{' '}
              <span className="text-green-600 font-medium">Bioinformatics</span>{' '}
              <span className="text-purple-600 font-medium">Professionals</span>
            </span>
          </h1>

          {/* Call to Action Button */}
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
