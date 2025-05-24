
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Recommendations = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "👩‍🔬",
      testimonial: "The bioinformatics courses here completely transformed my career. The hands-on approach and expert instruction made complex concepts accessible and practical.",
      role: "PhD Student, Johns Hopkins University"
    },
    {
      name: "Dr. Rajesh Patel",
      image: "👨‍💼",
      testimonial: "As a pharmaceutical researcher, the molecular docking course provided exactly the skills I needed. The quality of instruction is exceptional.",
      role: "Senior Scientist, Pfizer"
    },
    {
      name: "Maria Garcia",
      image: "👩‍💻",
      testimonial: "The AI and ML in Drug Discovery course opened up new possibilities in my research. The instructors are world-class and truly passionate about teaching.",
      role: "Bioinformatics Analyst, Roche"
    },
    {
      name: "David Chen",
      image: "👨‍🎓",
      testimonial: "From complete beginner to confident practitioner - these courses provided the perfect pathway into bioinformatics. Highly recommended!",
      role: "Graduate Student, MIT"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="recommendations" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Student Recommendations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful graduates who are making an impact in bioinformatics worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].image}
                </div>
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].testimonial}"
                </blockquote>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
                
                <div className="flex justify-center space-x-4 mb-6">
                  <Button variant="outline" size="sm" onClick={prevTestimonial}>
                    ←
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextTestimonial}>
                    →
                  </Button>
                </div>

                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-muted'
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
