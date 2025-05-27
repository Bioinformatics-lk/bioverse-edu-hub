
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Courses = () => {
  const courses = [
    {
      title: "Introduction to Bioinformatics",
      description: "Fundamentals of computational biology, sequence analysis, and database searching",
      duration: "8 weeks",
      level: "Beginner",
      colorTheme: "blue"
    },
    {
      title: "Network Pharmacology",
      description: "Systems biology approaches to drug discovery and target identification",
      duration: "6 weeks",
      level: "Intermediate",
      colorTheme: "green"
    },
    {
      title: "Molecular Docking",
      description: "Computer-aided drug design and protein-ligand interaction analysis",
      duration: "4 weeks",
      level: "Intermediate",
      colorTheme: "purple"
    },
    {
      title: "Molecular Dynamics",
      description: "Simulation of biomolecular systems and conformational analysis",
      duration: "6 weeks",
      level: "Advanced",
      colorTheme: "blue"
    },
    {
      title: "AI and ML in Drug Discovery",
      description: "Machine learning applications in pharmaceutical research and development",
      duration: "8 weeks",
      level: "Advanced",
      colorTheme: "green"
    },
    {
      title: "Introduction to Cheminformatics",
      description: "Chemical data analysis, molecular descriptors, and QSAR modeling",
      duration: "5 weeks",
      level: "Beginner",
      colorTheme: "purple"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-50 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Advanced': return 'bg-purple-50 text-purple-700 border-purple-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getCardBorder = (color: string) => {
    switch (color) {
      case 'blue': return 'border-blue-200 hover:border-blue-300';
      case 'green': return 'border-green-200 hover:border-green-300';
      case 'purple': return 'border-purple-200 hover:border-purple-300';
      default: return 'border-blue-200 hover:border-blue-300';
    }
  };

  return (
    <section id="courses" className="py-24 animated-bg relative">
      {/* Animated Bubbles */}
      <div className="absolute inset-0">
        <div className="floating-bubble bubble-green w-16 h-16 top-20 left-20" style={{animationDelay: '1s'}}></div>
        <div className="floating-bubble bubble-purple w-20 h-20 bottom-40 right-32" style={{animationDelay: '3s'}}></div>
        <div className="floating-bubble bubble-blue w-14 h-14 top-1/2 left-32" style={{animationDelay: '5s'}}></div>
        <div className="floating-bubble bubble-pink w-18 h-18 bottom-20 left-1/4" style={{animationDelay: '7s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="color-accent-text">Discovery</span>{' '}
            <span className="text-green-600">Pipeline</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Navigate through our comprehensive curriculum designed to transform you from 
            beginner to advanced bioinformatics professional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`glass-card ${getCardBorder(course.colorTheme)} card-hover transition-all duration-500`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    {course.duration}
                  </span>
                </div>
                <CardTitle className="text-xl mb-3 text-slate-800">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                <Button className="w-full professional-button">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
