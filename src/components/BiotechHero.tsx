
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
    <section id="home" className="min-h-screen biotech-bg molecule-pattern flex items-center justify-center relative overflow-hidden">
      {/* Enhanced DNA and Molecular Background */}
      <div className="absolute inset-0 opacity-20">
        {/* DNA Helix Strands */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-400 rounded-full float-animation pulse-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full float-animation pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-green-400 rounded-full float-animation pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-cyan-300 rounded-full float-animation pulse-glow" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-7 h-7 bg-purple-300 rounded-full float-animation pulse-glow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Enhanced Pipeline Connection Lines with DNA-like curves */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#00ff99" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#00ff99" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* DNA Double Helix Pattern */}
          <path
            d="M100,200 Q300,100 500,200 T900,200 Q1100,100 1200,200"
            stroke="url(#dnaGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M100,600 Q300,700 500,600 T900,600 Q1100,700 1200,600"
            stroke="url(#dnaGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '1s'}}
          />
          {/* Connecting base pairs */}
          <path
            d="M200,200 L200,600 M400,200 L400,600 M600,200 L600,600 M800,200 L800,600 M1000,200 L1000,600"
            stroke="url(#dnaGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '2s'}}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold mb-4 leading-tight">
            <span className="neon-text">Bioinformatics.lk</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Empowering the Next Generation of Bioinformatics Professionals
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Advancing bioinformatics education through cutting-edge AI-driven discovery pipelines, 
            molecular modeling, and next-generation computational biology programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="neon-button text-lg px-10 py-4"
              onClick={scrollToCourses}
            >
              Explore Courses
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-dark border-purple-400/30 text-purple-300 hover:text-purple-200 px-10 py-4 text-lg neon-border"
            >
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="glass-card rounded-xl p-8 text-center card-hover neon-border">
              <div className="text-5xl font-bold neon-text mb-3">500+</div>
              <div className="text-gray-300 text-lg">Students Enrolled</div>
            </div>
            <div className="glass-card rounded-xl p-8 text-center card-hover neon-border">
              <div className="text-5xl font-bold neon-green mb-3">25+</div>
              <div className="text-gray-300 text-lg">Expert Instructors</div>
            </div>
            <div className="glass-card rounded-xl p-8 text-center card-hover neon-border">
              <div className="text-5xl font-bold neon-purple mb-3">15+</div>
              <div className="text-gray-300 text-lg">Research Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiotechHero;
