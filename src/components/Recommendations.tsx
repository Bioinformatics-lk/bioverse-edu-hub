
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Recommendations = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      image: "👩‍🔬",
      testimonial: "The AI-driven drug discovery program completely revolutionized my research approach. The hands-on pipeline training and expert mentorship exceeded all expectations.",
      role: "Senior Research Scientist, Pfizer",
      specialty: "AI Drug Discovery"
    },
    {
      name: "Dr. Rajesh Kumar",
      image: "👨‍💼",
      testimonial: "The molecular docking course provided cutting-edge techniques that directly improved our pharmaceutical development pipeline. World-class instruction with real-world applications.",
      role: "Lead Bioinformatician, Novartis",
      specialty: "Molecular Modeling"
    },
    {
      name: "Dr. Maria Santos",
      image: "👩‍💻",
      testimonial: "From quantum biology to machine learning applications - this program opened entirely new research dimensions. The instructors are pioneers in computational biology.",
      role: "Principal Investigator, MIT",
      specialty: "Computational Biology"
    },
    {
      name: "Dr. James Wilson",
      image: "👨‍🎓",
      testimonial: "The comprehensive bioinformatics pipeline training transformed me from student to industry professional. The career impact has been extraordinary.",
      role: "Bioinformatics Director, Genentech",
      specialty: "Systems Biology"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="recommendations" className="py-24 biotech-bg relative">
      {/* Background Pipeline */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <radialGradient id="testimonialGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="600" cy="300" r="200" fill="url(#testimonialGlow)" className="animate-pulse" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-green">Success</span>{' '}
            <span className="neon-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our graduates who are pioneering the future of bioinformatics and computational biology worldwide
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="glass-card neon-border card-hover">
            <CardContent className="p-12 md:p-16">
              <div className="text-center">
                <div className="text-8xl mb-8 float-animation">
                  {testimonials[currentTestimonial].image}
                </div>
                
                <blockquote className="text-2xl md:text-3xl leading-relaxed mb-8 italic text-gray-300">
                  "{testimonials[currentTestimonial].testimonial}"
                </blockquote>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-xl neon-text mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-300 mb-2">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <span className="text-sm bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-400/30">
                    {testimonials[currentTestimonial].specialty}
                  </span>
                </div>
                
                <div className="flex justify-center space-x-4 mb-8">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={prevTestimonial}
                    className="glass-dark border-cyan-400/30 text-cyan-300 hover:text-cyan-200 w-12 h-12 rounded-full"
                  >
                    ←
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={nextTestimonial}
                    className="glass-dark border-cyan-400/30 text-cyan-300 hover:text-cyan-200 w-12 h-12 rounded-full"
                  >
                    →
                  </Button>
                </div>

                <div className="flex justify-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
