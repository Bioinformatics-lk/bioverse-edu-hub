
import { Button } from '@/components/ui/button';
import { ArrowRight, Dna } from 'lucide-react';

const DNAHero = () => {
  return (
    <section id="home" className="min-h-screen dna-background flex items-center justify-center relative overflow-hidden">
      {/* DNA Helix Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Dna size={120} className="text-blue-500 transform rotate-12" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-1000">
          <Dna size={80} className="text-blue-400 transform -rotate-12" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-pulse delay-2000">
          <Dna size={100} className="text-blue-300 transform rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Bioinformatics</span>
            <br />
            <span className="text-slate-800">Education Hub</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Advancing bioinformatics education in Sri Lanka through cutting-edge courses, 
            research collaborations, and innovative AI-driven drug discovery programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Explore Courses
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-blue-300 text-blue-700 hover:bg-blue-50">
              Watch Demo
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-slate-600">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Research Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating DNA Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce">
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
      <div className="absolute top-32 right-20 opacity-20 animate-bounce delay-500">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-bounce delay-1000">
        <div className="w-5 h-5 bg-blue-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default DNAHero;
