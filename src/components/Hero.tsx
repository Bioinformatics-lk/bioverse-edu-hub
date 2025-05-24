
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Master Bioinformatics
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Unlock the power of computational biology and data science. 
            Join our comprehensive courses in bioinformatics, molecular modeling, 
            and AI-driven drug discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={scrollToCourses}
            >
              Explore Courses
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 glass-effect"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-effect rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">🧬</span>
            </div>
            <h3 className="font-semibold mb-2">Expert-Led Courses</h3>
            <p className="text-muted-foreground text-sm">Learn from industry professionals and academic experts</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">💻</span>
            </div>
            <h3 className="font-semibold mb-2">Hands-On Learning</h3>
            <p className="text-muted-foreground text-sm">Practice with real datasets and cutting-edge tools</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">🎓</span>
            </div>
            <h3 className="font-semibold mb-2">Career Ready</h3>
            <p className="text-muted-foreground text-sm">Build skills for the future of biotechnology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
