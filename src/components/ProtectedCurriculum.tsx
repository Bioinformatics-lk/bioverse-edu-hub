
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProtectedCurriculum = () => {
  const courses = [
    {
      title: "Introduction to Bioinformatics",
      description: "Fundamentals of computational biology and bioinformatics tools",
      image: "/lovable-uploads/6ed14a7d-429b-4411-ad9e-47a06822b24a.png",
      duration: "8 weeks"
    },
    {
      title: "Molecular Docking & Drug Design",
      description: "Advanced techniques in computer-aided drug discovery",
      image: "/lovable-uploads/6ed14a7d-429b-4411-ad9e-47a06822b24a.png",
      duration: "12 weeks"
    },
    {
      title: "Network Pharmacology",
      description: "Systems biology approaches to drug discovery",
      image: "/lovable-uploads/6ed14a7d-429b-4411-ad9e-47a06822b24a.png",
      duration: "10 weeks"
    },
    {
      title: "AI in Drug Discovery",
      description: "Machine learning applications in pharmaceutical research",
      image: "/lovable-uploads/6ed14a7d-429b-4411-ad9e-47a06822b24a.png",
      duration: "14 weeks"
    },
    {
      title: "Genomics & Proteomics",
      description: "High-throughput data analysis and interpretation",
      image: "/lovable-uploads/6ed14a7d-429b-4411-ad9e-47a06822b24a.png",
      duration: "12 weeks"
    },
    {
      title: "Structural Bioinformatics",
      description: "3D protein structure analysis and prediction",
      image: "/lovable-uploads/6ed14a7d-429b-4411-ad9e-47a06822b24a.png",
      duration: "10 weeks"
    }
  ];

  return (
    <section className="py-24 animated-bg relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 color-accent-text">
            Comprehensive Curriculum
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge courses designed to advance your bioinformatics expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="glass-card border-slate-200 hover:border-blue-300 card-hover transition-all duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl mb-3 text-slate-800 leading-tight">
                  {course.title}
                </CardTitle>
                <div className="text-sm text-blue-600 font-medium">
                  Duration: {course.duration}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectedCurriculum;
