
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean Dark Background with Subtle Neon Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Subtle Molecular Data Streams Background */}
      <div className="absolute inset-0 opacity-20">
        {/* DNA Strand-like flowing lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating molecular nodes */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full glow-animation"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-purple-400 rounded-full glow-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-green-400 rounded-full glow-animation" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-60 right-20 w-3 h-3 bg-cyan-300 rounded-full glow-animation" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-purple-300 rounded-full glow-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-green-300 rounded-full glow-animation" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Subtle Data Stream Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00ffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff00ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke="url(#streamGradient1)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,600 Q300,650 600,600 T1200,600"
            stroke="url(#streamGradient2)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '3s'}}
          />
        </svg>
      </div>

      {/* Main Content - Perfectly Centered */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Tagline with Neon Glow */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight">
            <span className="block text-white">
              Empowering the{' '}
              <span className="neon-text font-medium">Next Generation</span>
            </span>
            <span className="block text-white mt-2">
              of{' '}
              <span className="neon-green font-medium">Bioinformatics</span>{' '}
              <span className="neon-purple font-medium">Professionals</span>
            </span>
          </h1>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="neon-button text-lg px-10 py-4 font-light"
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
