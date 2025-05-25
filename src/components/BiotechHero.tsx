
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
      {/* Floating Molecular Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full float-animation pulse-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full float-animation pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-green-400 rounded-full float-animation pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-300 rounded-full float-animation pulse-glow" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Pipeline Connection Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00ff99" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M100,400 Q300,200 600,300 T1100,400"
            stroke="url(#pipelineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M200,600 Q400,400 700,500 T1000,600"
            stroke="url(#pipelineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '1s'}}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="neon-text">Empowering the Next</span>
            <br />
            <span className="neon-purple">Generation of</span>
            <br />
            <span className="neon-green">Bioinformatics</span>
            <br />
            <span className="text-white">Professionals</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
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
